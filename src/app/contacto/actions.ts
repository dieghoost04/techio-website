"use server";

import {
  type ContactSubmissionResult,
  contactChannelOptions,
  solutionOptions,
  toContactRequest,
  validateContactRequest,
} from "@/lib/contact";

/**
 * Integration boundary for the contact form.
 *
 * Delivery is delegated to an external service configured through
 * environment variables (see README → "Configuring the contact form"):
 *   CONTACT_FORM_ENDPOINT  HTTPS URL that accepts a JSON POST (form service,
 *                          automation webhook, email API proxy, …)
 *   CONTACT_FORM_TOKEN     Optional bearer token sent in the Authorization header
 *
 * Without an endpoint the action reports "not-configured" and the UI says so
 * plainly: submissions are never reported as delivered unless the receiving
 * service answered with a 2xx status.
 */
export async function submitContactRequest(input: unknown, honeypot: string): Promise<ContactSubmissionResult> {
  const request = toContactRequest(input);
  const errors = validateContactRequest(request);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors };
  }

  // Bots tend to fill every field, including the hidden one.
  if (honeypot.trim() !== "") {
    return { status: "error" };
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return { status: "not-configured" };
  }

  const payload = {
    ...request,
    solutionLabel: solutionOptions.find((option) => option.value === request.solution)?.label ?? request.solution,
    channelLabel: contactChannelOptions.find((option) => option.value === request.channel)?.label ?? request.channel,
    source: "techio-website/contacto",
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CONTACT_FORM_TOKEN ? { Authorization: `Bearer ${process.env.CONTACT_FORM_TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(`[contact] Endpoint responded with ${response.status}`);
      return { status: "error" };
    }
    return { status: "success" };
  } catch (error) {
    console.error("[contact] Delivery failed", error);
    return { status: "error" };
  }
}
