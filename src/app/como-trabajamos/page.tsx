import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { PrimaryButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { processStages } from "@/content/process";

export const metadata: Metadata = buildMetadata({
  title: "Cómo trabajamos",
  description:
    "Diagnóstico, propuesta, diseño y desarrollo, revisión y publicación. Conoce cada etapa de un proyecto con Techio Solutions y tu participación en ella.",
  path: "/como-trabajamos",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Cómo trabajamos", href: "/como-trabajamos" }]}
        eyebrow="Cómo trabajamos"
        title="Cinco etapas, de la primera conversación a tu solución publicada."
        lead="Un proceso ordenado para que sepas en todo momento en qué etapa está tu proyecto, qué hacemos nosotros y qué necesitamos de ti."
        actions={<PrimaryButton href="/contacto">Solicitar una cotización</PrimaryButton>}
      />

      <section aria-labelledby="stages-title" className="container-site py-20 md:py-28">
        <h2 id="stages-title" className="sr-only">
          Etapas del proyecto
        </h2>
        <ol className="space-y-5">
          {processStages.map((stage) => (
            <li
              key={stage.number}
              className="reveal grid gap-8 rounded-lg border border-line bg-card p-7 sm:p-10 lg:grid-cols-12 lg:gap-10"
            >
              <div className="flex items-start gap-5 lg:col-span-4">
                <span
                  className={`grid size-14 shrink-0 place-items-center rounded-[16px] font-display font-bold ${
                    stage.number === "05" ? "bg-lime text-navy" : "bg-navy text-on-dark"
                  }`}
                >
                  {stage.number}
                </span>
                <h3 className="text-h2 pt-1 text-ink">{stage.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-eyebrow text-muted">Qué hacemos</p>
                <p className="mt-3 text-ink/85">{stage.detail}</p>
              </div>
              <div className="rounded-md bg-lavender-tint p-5 lg:col-span-3">
                <p className="text-eyebrow text-ink">Tu participación</p>
                <p className="mt-3 text-ink/85">{stage.clientRole}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="terms-title" className="border-y border-line bg-card py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="terms-title"
              eyebrow="Condiciones"
              title="Todo queda claro en tu propuesta."
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lead text-ink">
              Antes de comenzar el diseño y desarrollo recibes una propuesta que especifica:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "El alcance del proyecto.",
                "Lo que incluye y lo que no incluye.",
                "El costo y las condiciones de pago.",
                "Las condiciones de mantenimiento.",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-md border border-line bg-page p-4 text-ink/85">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-[3px] bg-lavender" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">
              Cada proyecto es distinto, por eso los tiempos y condiciones se acuerdan contigo en la propuesta.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Empecemos con un diagnóstico."
        description="Cuéntanos sobre tu negocio y cómo trabajas hoy. Con eso preparamos una propuesta a la medida de lo que necesitas."
        ctaLabel="Solicitar una cotización"
      />
    </>
  );
}
