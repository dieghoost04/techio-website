/**
 * Contact request model and validation, shared by the client form and the
 * server action so both apply exactly the same rules.
 */

export const solutionOptions = [
  { value: "menu-qr-restaurantes", label: "Menú QR y web para restaurante" },
  { value: "web-para-negocios-de-servicios", label: "Web para negocio de servicios" },
  { value: "catalogos-de-productos", label: "Catálogo de productos" },
  { value: "no-estoy-seguro", label: "Aún no estoy seguro" },
] as const;

export const contactChannelOptions = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "llamada", label: "Llamada" },
  { value: "correo", label: "Correo electrónico" },
] as const;

export type SolutionInterest = (typeof solutionOptions)[number]["value"];
export type ContactChannel = (typeof contactChannelOptions)[number]["value"];

export interface ContactRequest {
  name: string;
  businessName: string;
  businessType: string;
  solution: SolutionInterest | "";
  needs: string;
  currentSetup: string;
  channel: ContactChannel | "";
  contactValue: string;
}

export type ContactField = keyof ContactRequest;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const emptyContactRequest: ContactRequest = {
  name: "",
  businessName: "",
  businessType: "",
  solution: "",
  needs: "",
  currentSetup: "",
  channel: "",
  contactValue: "",
};

export const fieldLimits: Record<ContactField, number> = {
  name: 80,
  businessName: 120,
  businessType: 120,
  solution: 40,
  needs: 1500,
  currentSetup: 1000,
  channel: 20,
  contactValue: 120,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isSolutionInterest(value: string): value is SolutionInterest {
  return solutionOptions.some((option) => option.value === value);
}

function isContactChannel(value: string): value is ContactChannel {
  return contactChannelOptions.some((option) => option.value === value);
}

export function contactValueLabel(channel: ContactRequest["channel"]): string {
  return channel === "correo" ? "Correo electrónico" : "Número de teléfono";
}

export function validateField(field: ContactField, data: ContactRequest): string | undefined {
  const value = data[field].trim();

  if (value.length > fieldLimits[field]) {
    return `Usa como máximo ${fieldLimits[field]} caracteres.`;
  }

  switch (field) {
    case "name":
      return value.length < 2 ? "Escribe tu nombre." : undefined;
    case "businessName":
      return value.length < 2 ? "Escribe el nombre de tu negocio." : undefined;
    case "businessType":
      return value.length < 3 ? "Cuéntanos a qué se dedica tu negocio." : undefined;
    case "solution":
      return isSolutionInterest(value) ? undefined : "Elige la opción que mejor describe lo que necesitas.";
    case "needs":
      return value.length < 10 ? "Describe brevemente lo que necesitas (al menos 10 caracteres)." : undefined;
    case "currentSetup":
      return value.length < 3 ? "Cuéntanos cómo compartes hoy la información de tu negocio." : undefined;
    case "channel":
      return isContactChannel(value) ? undefined : "Elige cómo prefieres que te contactemos.";
    case "contactValue":
      if (!data.channel) return undefined; // reported on the channel field
      if (data.channel === "correo") {
        return EMAIL_PATTERN.test(value) ? undefined : "Escribe un correo electrónico válido, por ejemplo nombre@negocio.com.";
      }
      return value.replace(/\D/g, "").length >= 10 ? undefined : "Escribe un número de teléfono de al menos 10 dígitos.";
  }
}

export function validateContactRequest(data: ContactRequest): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of Object.keys(emptyContactRequest) as ContactField[]) {
    const message = validateField(field, data);
    if (message) errors[field] = message;
  }
  return errors;
}

/** Normalizes untrusted input (e.g. from the server action) into a ContactRequest. */
export function toContactRequest(input: unknown): ContactRequest {
  const source = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {};
  const result = { ...emptyContactRequest };
  for (const field of Object.keys(emptyContactRequest) as ContactField[]) {
    const value = source[field];
    (result as Record<ContactField, string>)[field] = typeof value === "string" ? value.trim() : "";
  }
  return result;
}

export type ContactSubmissionResult =
  | { status: "success" }
  | { status: "invalid"; errors: ContactErrors }
  | { status: "not-configured" }
  | { status: "error" };
