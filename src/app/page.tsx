import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, KeyRound, Wrench } from "lucide-react";
import { ArrowLink, PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { ProblemCard } from "@/components/sections/ProblemCard";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { solutionHref, solutions } from "@/content/solutions";
import { homeFaqs, whyTechio } from "@/content/home";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Soluciones digitales prácticas para tu negocio",
    description: siteConfig.description,
    path: "/",
  }),
  // The root title template would otherwise append the name twice.
  title: { absolute: `${siteConfig.name} | Soluciones digitales prácticas para tu negocio` },
};

const whyIcons = { service: Wrench, scope: FileText, ownership: KeyRound } as const;

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="container-site grid items-center gap-14 pb-14 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="text-eyebrow flex items-center gap-3 text-muted">
              <span aria-hidden="true" className="inline-block size-2 rounded-[3px] bg-lavender" />
              Presencia digital para negocios
            </p>
            <h1 id="hero-title" className="text-display mt-6 text-ink">
              Tecnología práctica que{" "}
              <span className="relative isolate whitespace-nowrap">
                <span aria-hidden="true" className="absolute inset-x-[-0.08em] bottom-[0.06em] top-[0.52em] -z-10 rounded-[0.18em] bg-lime" />
                impulsa
              </span>{" "}
              tu negocio.
            </h1>
            <p className="text-lead mt-7 max-w-xl text-muted">
              Creamos webs, menús digitales con QR y catálogos de productos para restaurantes, negocios de servicios y
              tiendas que quieren tener presencia en línea y herramientas digitales útiles para su día a día.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryButton href="/contacto">Cuéntanos tu proyecto</PrimaryButton>
              <SecondaryButton href="/soluciones" withArrow={false}>
                Explorar soluciones
              </SecondaryButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        {/* Solution index strip */}
        <nav aria-label="Soluciones" className="border-y border-line bg-card/60">
          <ul className="container-site grid md:grid-cols-3">
            {solutions.map((solution, index) => (
              <li key={solution.slug} className="border-line max-md:border-b max-md:last:border-b-0 md:border-l md:last:border-r">
                <Link
                  href={solutionHref(solution.slug)}
                  className="group flex min-h-20 items-center justify-between gap-4 px-1 py-5 transition-colors hover:bg-card md:px-6"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-display text-xs font-semibold text-muted">0{index + 1}</span>
                    <span className="font-display font-semibold text-ink">{solution.name}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* 2 — Problemas que resolvemos */}
      <section aria-labelledby="problems-title" className="container-site py-20 md:py-28">
        <SectionHeading
          id="problems-title"
          eyebrow="01 / Problemas que resolvemos"
          title="Problemas cotidianos que una buena herramienta digital puede resolver."
          description="Estas son situaciones frecuentes en negocios que todavía no tienen una presencia digital clara."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <ProblemCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </section>

      {/* 3 — Soluciones */}
      <section aria-labelledby="solutions-title" className="on-dark bg-navy py-20 text-on-dark md:py-28">
        <div className="container-site">
          <SectionHeading
            id="solutions-title"
            tone="dark"
            eyebrow="02 / Soluciones"
            title="Tres soluciones para empezar tu presencia digital."
            description="Cada una resuelve una necesidad concreta. Te ayudamos a elegir la que mejor se adapta a tu negocio."
            aside={
              <ArrowLink href="/soluciones" tone="dark">
                Ver todas las soluciones
              </ArrowLink>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.slug} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Cómo trabajamos */}
      <section aria-labelledby="process-title" className="container-site py-20 md:py-28">
        <SectionHeading
          id="process-title"
          eyebrow="03 / Cómo trabajamos"
          title="Un proceso claro, de la primera conversación a la publicación."
          aside={<ArrowLink href="/como-trabajamos">Conocer el proceso</ArrowLink>}
        />
        <div className="mt-14">
          <ProcessOverview />
        </div>
      </section>

      {/* 5 — Por qué Techio */}
      <section aria-labelledby="why-title" className="border-y border-line bg-card py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="why-title"
              eyebrow="04 / Por qué Techio"
              title="Soluciones útiles, con reglas claras."
              description="Trabajamos para que entiendas qué recibes, qué cuidamos después de publicar y qué te pertenece."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {whyTechio.map((item, index) => {
              const Icon = whyIcons[item.key];
              return (
                <article
                  key={item.key}
                  className={`reveal flex flex-col rounded-lg p-7 ${index === 2 ? "bg-lime sm:col-span-2" : "border border-line bg-page"}`}
                >
                  <span className="grid size-11 place-items-center rounded-[12px] bg-navy text-lime">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-h3 mt-6 text-ink">{item.title}</h3>
                  <p className="mt-2 text-ink/80">{item.description}</p>
                </article>
              );
            })}
            <p className="text-sm text-muted sm:col-span-2">
              El alcance del mantenimiento se define en cada propuesta. Funciones nuevas, cambios mayores o suscripciones
              de servicios de terceros no están incluidos salvo que se acuerden.
            </p>
          </div>
        </div>
      </section>

      {/* 6 — Preguntas frecuentes */}
      <section aria-labelledby="faq-title" className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow="05 / Preguntas frecuentes" title="Lo que suelen preguntarnos." />
        </div>
        <div className="lg:col-span-8">
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 7 — CTA final */}
      <CTASection />
    </>
  );
}
