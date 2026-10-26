import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/lib/metadata";

// Not indexed until the approved legal text is published (see CONTENT_REVIEW.md).
export const metadata: Metadata = buildMetadata({
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Techio Solutions.",
  path: "/aviso-de-privacidad",
  noIndex: true,
});

const collectedFields = [
  "Nombre.",
  "Nombre y giro del negocio.",
  "La solución que te interesa y la descripción de lo que necesitas.",
  "Cómo trabaja actualmente tu negocio.",
  "Tu canal de contacto preferido y el teléfono o correo electrónico que nos compartes.",
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Aviso de privacidad", href: "/aviso-de-privacidad" }]}
        eyebrow="Legal"
        title="Aviso de privacidad"
        lead="Información sobre el tratamiento de los datos personales que compartes con Techio Solutions."
      />

      <section className="container-site max-w-4xl py-16 md:py-24">
        <div role="note" className="flex gap-4 rounded-lg border border-line-strong bg-lime-tint p-6">
          <FileText aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-ink" />
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Documento en preparación</h2>
            <p className="mt-2 text-ink/85">
              El texto completo de nuestro aviso de privacidad se encuentra en revisión y se publicará en esta página una
              vez aprobado. Mientras tanto, a continuación describimos qué información solicita el formulario de contacto
              de este sitio.
            </p>
          </div>
        </div>

        <h2 className="text-h3 mt-14 text-ink">Datos que solicita el formulario de contacto</h2>
        <ul className="mt-5 space-y-3">
          {collectedFields.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-[3px] bg-lavender" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted">
          El formulario no solicita datos financieros ni datos personales sensibles.
        </p>
      </section>
    </>
  );
}
