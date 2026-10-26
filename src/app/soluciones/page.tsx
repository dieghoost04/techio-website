import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { CTASection } from "@/components/sections/CTASection";
import { PrimaryButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionIcon } from "@/components/ui/SolutionIcon";
import { accentClasses } from "@/lib/accents";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/cn";
import { solutionHref, solutions } from "@/content/solutions";

export const metadata: Metadata = buildMetadata({
  title: "Soluciones",
  description:
    "Menú QR y web para restaurantes, webs para negocios de servicios y catálogos de productos. Conoce qué solución digital se adapta a tu negocio.",
  path: "/soluciones",
});

const serviceModel = [
  {
    title: "Implementación",
    description: "Diseñamos, construimos y publicamos tu solución con tu información y tu identidad.",
  },
  {
    title: "Mantenimiento",
    description: "Después de publicar, mantenemos tu solución bajo las condiciones acordadas en tu propuesta.",
  },
  {
    title: "Cotización según alcance",
    description: "Cada proyecto se cotiza de acuerdo con lo que tu negocio necesita. El costo se define en tu propuesta, después del diagnóstico.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Soluciones", href: "/soluciones" }]}
        eyebrow="Soluciones"
        title="Herramientas digitales prácticas, pensadas para negocios reales."
        lead="Empezamos por lo que tu negocio necesita mostrar en internet: tu menú, tus servicios o tus productos. Elige la solución que más se parece a tu caso, o cuéntanos y te ayudamos a decidir."
        actions={<PrimaryButton href="/contacto">Cuéntanos tu proyecto</PrimaryButton>}
      />

      {/* Which one fits */}
      <section aria-labelledby="fit-title" className="container-site py-20 md:py-28">
        <SectionHeading
          id="fit-title"
          eyebrow="¿Cuál es para ti?"
          title="Encuentra la solución según tu situación."
          description="Cada solución responde a un problema distinto. Si tu negocio combina varios, lo revisamos juntos en el diagnóstico."
        />
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {solutions.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={solutionHref(solution.slug)}
                className="group grid gap-4 py-7 transition-colors md:grid-cols-12 md:items-center md:gap-8"
              >
                <span className="flex items-center gap-4 md:col-span-5">
                  <span
                    className={cn(
                      "grid size-12 shrink-0 place-items-center rounded-md text-navy",
                      accentClasses[solution.accent].fill,
                    )}
                  >
                    <SolutionIcon icon={solution.icon} className="size-6" />
                  </span>
                  <span className="text-muted">
                    Si {solution.problem.charAt(0).toLowerCase() + solution.problem.slice(1)}
                  </span>
                </span>
                <span className="font-display text-lg font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-lavender md:col-span-6">
                  {solution.name}
                </span>
                <span aria-hidden="true" className="hidden text-right text-2xl text-ink transition-transform group-hover:translate-x-1 md:col-span-1 md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Cards */}
      <section aria-labelledby="all-solutions-title" className="on-dark bg-navy py-20 md:py-28">
        <div className="container-site">
          <SectionHeading id="all-solutions-title" tone="dark" eyebrow="Soluciones" title="Tres formas de empezar." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.slug} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service model */}
      <section aria-labelledby="model-title" className="container-site py-20 md:py-28">
        <SectionHeading
          id="model-title"
          eyebrow="Modelo de servicio"
          title="Cómo funciona el servicio."
          description="Además de construir tu solución, la mantenemos funcionando. Las condiciones exactas se definen en tu propuesta."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {serviceModel.map((item, index) => (
            <li key={item.title} className="reveal rounded-lg border border-line bg-card p-7">
              <span className="font-display text-sm font-semibold text-muted">0{index + 1}</span>
              <h3 className="text-h3 mt-4 text-ink">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection
        title="¿No sabes cuál elegir?"
        description="Cuéntanos qué hace tu negocio y cómo compartes tu información hoy. Te ayudamos a identificar la solución adecuada."
      />
    </>
  );
}
