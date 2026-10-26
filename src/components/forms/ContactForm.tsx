"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useTransition, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { submitContactRequest } from "@/app/contacto/actions";
import { ChoiceGroup } from "@/components/forms/ChoiceGroup";
import { FormField, inputClass } from "@/components/forms/FormField";
import { FormStatus } from "@/components/forms/FormStatus";
import { ActionButton } from "@/components/ui/Button";
import {
  type ContactErrors,
  type ContactField,
  type ContactRequest,
  type SolutionInterest,
  contactChannelOptions,
  contactValueLabel,
  emptyContactRequest,
  fieldLimits,
  solutionOptions,
  validateContactRequest,
  validateField,
} from "@/lib/contact";

type SubmitState = "idle" | "submitting" | "success" | "not-configured" | "error";

const fieldOrder: ContactField[] = [
  "name",
  "businessName",
  "businessType",
  "solution",
  "needs",
  "currentSetup",
  "channel",
  "contactValue",
];

const fieldLabels: Record<ContactField, string> = {
  name: "Nombre",
  businessName: "Nombre del negocio",
  businessType: "Giro del negocio",
  solution: "¿Qué necesitas?",
  needs: "Cuéntanos más sobre lo que necesitas",
  currentSetup: "¿Cómo trabajas actualmente?",
  channel: "Canal de contacto preferido",
  contactValue: "Dato de contacto",
};

/** id of the element an error-summary link should focus */
function targetId(field: ContactField): string {
  return field === "solution" || field === "channel" ? `contact-${field}-0` : `contact-${field}`;
}

interface ContactFormProps {
  initialSolution?: SolutionInterest;
}

export function ContactForm({ initialSolution }: ContactFormProps) {
  const [data, setData] = useState<ContactRequest>({ ...emptyContactRequest, solution: initialSolution ?? "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [showSummary, setShowSummary] = useState(false);
  const [summaryFocusRequest, setSummaryFocusRequest] = useState(0);
  const [isPending, startTransition] = useTransition();
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const submittingRef = useRef(false);

  const busy = isPending || submitState === "submitting";

  // Move focus to the error summary after each failed submit, once it has rendered.
  useEffect(() => {
    if (summaryFocusRequest > 0) summaryRef.current?.focus();
  }, [summaryFocusRequest]);

  // Move focus to the outcome message once it has rendered.
  useEffect(() => {
    if (submitState === "success" || submitState === "error" || submitState === "not-configured") {
      statusRef.current?.focus();
    }
  }, [submitState]);

  function update(field: ContactField, value: string) {
    const next = { ...data, [field]: value };
    // Switching channel changes what a valid contact value is.
    if (field === "channel" && value !== data.channel) next.contactValue = "";
    setData(next);
    if (touched[field] || errors[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, next) }));
    }
    if (submitState === "error" || submitState === "not-configured") setSubmitState("idle");
  }

  function blur(field: ContactField) {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateField(field, data) }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guard against double submission (the ref updates before React re-renders).
    if (busy || submittingRef.current) return;

    const nextErrors = validateContactRequest(data);
    setErrors(nextErrors);
    setTouched(Object.fromEntries(fieldOrder.map((field) => [field, true])));

    if (Object.keys(nextErrors).length > 0) {
      setShowSummary(true);
      setSummaryFocusRequest((count) => count + 1);
      return;
    }

    setShowSummary(false);
    setSubmitState("submitting");
    submittingRef.current = true;
    startTransition(async () => {
      const result = await submitContactRequest(data, honeypotRef.current?.value ?? "").catch(
        () => ({ status: "error" }) as const,
      );
      submittingRef.current = false;
      if (result.status === "invalid") {
        setErrors(result.errors);
        setShowSummary(true);
        setSubmitState("idle");
        setSummaryFocusRequest((count) => count + 1);
        return;
      }
      setSubmitState(result.status);
    });
  }

  if (submitState === "success") {
    return (
      <FormStatus ref={statusRef} tone="success" title="¡Gracias! Recibimos tu solicitud.">
        <p>Revisaremos la información de tu negocio y te contactaremos por el canal que elegiste.</p>
        <p className="mt-4">
          <Link href="/" className="font-semibold underline decoration-lavender decoration-2 underline-offset-4">
            Volver al inicio
          </Link>
        </p>
      </FormStatus>
    );
  }

  const errorList = fieldOrder.filter((field) => errors[field]);
  const contactInputType = data.channel === "correo" ? "email" : "tel";

  return (
    <form noValidate onSubmit={handleSubmit} aria-describedby="contact-form-note" className="space-y-8">
      <p id="contact-form-note" className="text-sm text-muted">
        Los campos marcados con <span aria-hidden="true">*</span>
        <span className="sr-only">asterisco</span> son obligatorios.
      </p>

      {showSummary && errorList.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="contact-error-title"
          className="rounded-md border border-error/40 bg-error-tint p-5"
        >
          <h2 id="contact-error-title" className="font-display font-semibold text-ink">
            Revisa {errorList.length === 1 ? "este campo" : `estos ${errorList.length} campos`} antes de enviar:
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[0.95rem]">
            {errorList.map((field) => (
              <li key={field}>
                <a href={`#${targetId(field)}`} className="text-error underline underline-offset-2">
                  {field === "contactValue" ? contactValueLabel(data.channel) : fieldLabels[field]}: {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="contact-name" label={fieldLabels.name} required error={errors.name}>
          {(describedBy) => (
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={fieldLimits.name}
              value={data.name}
              onChange={(event) => update("name", event.target.value)}
              onBlur={() => blur("name")}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={describedBy}
              aria-required="true"
              className={inputClass}
            />
          )}
        </FormField>

        <FormField id="contact-businessName" label={fieldLabels.businessName} required error={errors.businessName}>
          {(describedBy) => (
            <input
              id="contact-businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              maxLength={fieldLimits.businessName}
              value={data.businessName}
              onChange={(event) => update("businessName", event.target.value)}
              onBlur={() => blur("businessName")}
              aria-invalid={errors.businessName ? true : undefined}
              aria-describedby={describedBy}
              aria-required="true"
              className={inputClass}
            />
          )}
        </FormField>
      </div>

      <FormField
        id="contact-businessType"
        label={fieldLabels.businessType}
        required
        hint="Por ejemplo: restaurante, consultorio dental, taller mecánico, tienda de ropa."
        error={errors.businessType}
      >
        {(describedBy) => (
          <input
            id="contact-businessType"
            name="businessType"
            type="text"
            maxLength={fieldLimits.businessType}
            value={data.businessType}
            onChange={(event) => update("businessType", event.target.value)}
            onBlur={() => blur("businessType")}
            aria-invalid={errors.businessType ? true : undefined}
            aria-describedby={describedBy}
            aria-required="true"
            className={inputClass}
          />
        )}
      </FormField>

      <ChoiceGroup
        id="contact-solution"
        name="solution"
        legend={fieldLabels.solution}
        options={solutionOptions}
        value={data.solution}
        error={errors.solution}
        onChange={(value) => update("solution", value)}
        onBlur={() => blur("solution")}
      />

      <FormField
        id="contact-needs"
        label={fieldLabels.needs}
        required
        hint="¿Qué te gustaría resolver? ¿Qué quieres que tus clientes puedan ver o hacer?"
        error={errors.needs}
      >
        {(describedBy) => (
          <textarea
            id="contact-needs"
            name="needs"
            rows={4}
            maxLength={fieldLimits.needs}
            value={data.needs}
            onChange={(event) => update("needs", event.target.value)}
            onBlur={() => blur("needs")}
            aria-invalid={errors.needs ? true : undefined}
            aria-describedby={describedBy}
            aria-required="true"
            className={`${inputClass} resize-y`}
          />
        )}
      </FormField>

      <FormField
        id="contact-currentSetup"
        label={fieldLabels.currentSetup}
        required
        hint="Por ejemplo: solo redes sociales, menú impreso, catálogo en PDF, un sitio web que quieres renovar."
        error={errors.currentSetup}
      >
        {(describedBy) => (
          <textarea
            id="contact-currentSetup"
            name="currentSetup"
            rows={3}
            maxLength={fieldLimits.currentSetup}
            value={data.currentSetup}
            onChange={(event) => update("currentSetup", event.target.value)}
            onBlur={() => blur("currentSetup")}
            aria-invalid={errors.currentSetup ? true : undefined}
            aria-describedby={describedBy}
            aria-required="true"
            className={`${inputClass} resize-y`}
          />
        )}
      </FormField>

      <ChoiceGroup
        id="contact-channel"
        name="channel"
        legend={fieldLabels.channel}
        options={contactChannelOptions}
        value={data.channel}
        error={errors.channel}
        columns={3}
        onChange={(value) => update("channel", value)}
        onBlur={() => blur("channel")}
      />

      {data.channel ? (
        <FormField
          id="contact-contactValue"
          label={contactValueLabel(data.channel)}
          required
          hint={data.channel === "correo" ? "Por ejemplo: nombre@negocio.com" : "Incluye la clave de tu ciudad o país si aplica."}
          error={errors.contactValue}
        >
          {(describedBy) => (
            <input
              id="contact-contactValue"
              name="contactValue"
              type={contactInputType}
              inputMode={contactInputType === "tel" ? "tel" : "email"}
              autoComplete={contactInputType === "tel" ? "tel" : "email"}
              maxLength={fieldLimits.contactValue}
              value={data.contactValue}
              onChange={(event) => update("contactValue", event.target.value)}
              onBlur={() => blur("contactValue")}
              aria-invalid={errors.contactValue ? true : undefined}
              aria-describedby={describedBy}
              aria-required="true"
              className={inputClass}
            />
          )}
        </FormField>
      ) : null}

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">No llenes este campo</label>
        <input ref={honeypotRef} id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {submitState === "not-configured" ? (
        <FormStatus ref={statusRef} tone="info" title="Tu solicitud no se envió">
          <p>
            El formulario todavía no está conectado a nuestro sistema de recepción, así que tu mensaje no fue entregado. Tu
            información sigue en el formulario; por favor intenta de nuevo más tarde.
          </p>
        </FormStatus>
      ) : null}

      {submitState === "error" ? (
        <FormStatus ref={statusRef} tone="error" title="No pudimos enviar tu solicitud">
          <p>Ocurrió un problema al enviar el formulario. Tu información sigue aquí; intenta de nuevo en unos minutos.</p>
        </FormStatus>
      ) : null}

      <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-muted">
          Antes de enviar, consulta nuestro{" "}
          <Link href="/aviso-de-privacidad" className="font-medium text-ink underline underline-offset-2">
            Aviso de privacidad
          </Link>
          {" "}para conocer cómo se tratan tus datos.
        </p>
        <ActionButton type="submit" disabled={busy} className="sm:min-w-56">
          {busy ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar solicitud
              <ArrowRight aria-hidden="true" className="size-4" />
            </>
          )}
        </ActionButton>
      </div>
      <p aria-live="polite" className="sr-only">
        {busy ? "Enviando tu solicitud." : ""}
      </p>
    </form>
  );
}
