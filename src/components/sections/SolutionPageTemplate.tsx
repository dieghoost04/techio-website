import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionIcon } from "@/components/ui/SolutionIcon";
import { accentClasses } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { contactHrefFor, solutions } from "@/content/solutions";
import type { Solution } from "@/types/content";

/** Shared layout for every solution detail page; content comes from `content/solutions.ts`. */
export function SolutionPageTemplate({ solution }: { solution: Solution }) {
  const accent = accentClasses[solution.accent];
  const others = solutions.filter((item) => item.slug !== solution.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Soluciones", href: "/soluciones" },
          { label: solution.shortName, href: `/soluciones/${solution.slug}` },
        ]}
        eyebrow={solution.name}
        title={solution.hero.title}
        lead={solution.hero.lead}
        actions={
          <>
            <PrimaryButton href={contactHrefFor(solution.slug)}>Cuéntanos tu proyecto</PrimaryButton>
            <SecondaryButton href="#incluye" withArrow={false}>
              Qué incluye
            </SecondaryButton>
          </>
        }
        aside={
          <div className={cn("relative rounded-xl p-7", accent.fill)}>
            <span className="grid size-16 place-items-center rounded-lg bg-navy text-on-dark">
              <SolutionIcon icon={solution.icon} className="size-8" />
            </span>
            <p className="text-eyebrow mt-10 text-navy">Para</p>
            <p className="mt-2 font-display text-lg font-semibold leading-snug text-navy">{solution.audience}</p>
            <p className="mt-6 border-t border-navy/15 pt-5 text-sm font-medium text-navy/80">Cotización según alcance</p>
          </div>
        }
      />

      {/* The problem */}
      <section aria-labelledby="problem-title" className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading id="problem-title" eyebrow="El problema" title={solution.problemSection.title} />
          <div className="mt-8 space-y-5 text-lg text-muted">
            {solution.problemSection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside aria-labelledby="signals-title" className="lg:col-span-5">
          <div className="reveal rounded-lg border border-line bg-card p-7 shadow-sm">
            <h3 id="signals-title" className="text-h3 text-ink">
              ¿Te suena familiar?
            </h3>
            <ul className="mt-5 space-y-4">
              {solution.problemSection.signals.map((signal) => (
                <li key={signal} className="flex gap-3 text-ink/85">
                  <span aria-hidden="true" className={cn("mt-2 size-2.5 shrink-0 rounded-[3px]", accent.fill)} />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Included / not included */}
      <section id="incluye" aria-labelledby="included-title" className="border-y border-line bg-card py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            id="included-title"
            eyebrow="Alcance"
            title="Qué incluye esta solución"
            description="Estos son los elementos habituales de esta solución. El alcance final se confirma en tu propuesta."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solution.included.map((item) => (
              <li key={item.title} className="reveal flex flex-col rounded-lg border border-line bg-page p-6">
                <span aria-hidden="true" className={cn("grid size-9 place-items-center rounded-[10px] text-navy", accent.fill)}>
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="reveal rounded-lg border border-dashed border-line-strong p-7">
              <h3 className="text-h3 text-ink">Qué no incluye</h3>
              <ul className="mt-5 space-y-3">
                {solution.notIncluded.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <Minus aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                Si tu negocio necesita alguna de estas funciones, cuéntanos y lo revisamos durante el diagnóstico.
              </p>
            </div>

            <div className="reveal rounded-lg bg-navy p-7 text-on-dark on-dark">
              <h3 className="text-h3">Qué necesitamos de ti</h3>
              <ul className="mt-5 space-y-3">
                {solution.clientProvides.map((item) => (
                  <li key={item} className="flex gap-3 text-on-dark-muted">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section aria-labelledby="maintenance-title" className="container-site py-20 md:py-28">
        <div className="grid gap-10 rounded-xl border border-line bg-card p-8 sm:p-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="maintenance-title" eyebrow="Mantenimiento" title="Después de publicar" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lead text-ink">{solution.maintenance.summary}</p>
            <ul className="mt-6 space-y-3">
              {solution.maintenance.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-[3px] bg-navy" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="solution-faq-title" className="container-site grid gap-12 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="solution-faq-title" eyebrow="Preguntas frecuentes" title="Dudas sobre esta solución" />
        </div>
        <div className="lg:col-span-8">
          <FAQAccordion faqs={solution.faqs} />
        </div>
      </section>

      <CTASection
        title="¿Es la solución para tu negocio?"
        description="Cuéntanos cómo trabajas hoy. Revisamos tu caso y te compartimos una propuesta con un alcance claro."
        ctaHref={contactHrefFor(solution.slug)}
      />

      {/* Other solutions */}
      <section aria-labelledby="others-title" className="container-site pb-24">
        <h2 id="others-title" className="text-h3 text-ink">
          Otras soluciones
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {others.map((item) => (
            <SolutionCard key={item.slug} solution={item} index={solutions.indexOf(item)} tone="light" />
          ))}
        </div>
      </section>
    </>
  );
}
