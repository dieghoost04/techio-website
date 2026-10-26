import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandMark } from "@/components/ui/BrandMark";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sobre Techio",
  description:
    "Techio Solutions ayuda a negocios a tener presencia digital y adoptar herramientas digitales prácticas. Conoce nuestro propósito y nuestra forma de trabajar.",
  path: "/sobre-techio",
});

// Brand attributes defined in the official identity proposal.
const principles = [
  {
    title: "Modular",
    description:
      "Empezamos por lo que tu negocio necesita hoy. Cada solución es una pieza que puede conectarse con otras cuando tenga sentido.",
    className: "bg-navy text-on-dark",
    textClass: "text-on-dark-muted",
  },
  {
    title: "Ingeniosa",
    description: "Buscamos la forma más sencilla de resolver un problema real, no la más complicada.",
    className: "bg-lavender text-navy",
    textClass: "text-navy/80",
  },
  {
    title: "Clara",
    description: "Hablamos sin tecnicismos y explicamos con claridad qué incluye y qué no incluye cada proyecto.",
    className: "bg-lime text-navy",
    textClass: "text-navy/80",
  },
  {
    title: "Flexible",
    description: "Cada negocio trabaja distinto. Adaptamos la solución a tu forma de operar, no al revés.",
    className: "bg-teal text-navy",
    textClass: "text-navy/80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Sobre Techio", href: "/sobre-techio" }]}
        eyebrow="Sobre Techio"
        title="Tecnología que impulsa tu negocio."
        lead="Techio Solutions es un negocio de transformación digital. Ayudamos a negocios a tener presencia digital y a adoptar herramientas digitales prácticas, útiles en su día a día."
        aside={
          <div className="grid place-items-center rounded-xl border border-line bg-card p-10">
            <BrandMark className="size-36" />
            <p className="mt-6 text-center font-display font-semibold text-ink">Cada idea encuentra su conexión.</p>
          </div>
        }
      />

      <section aria-labelledby="purpose-title" className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="purpose-title" eyebrow="Propósito" title="Hacer que lo digital sea accesible y útil." />
        </div>
        <div className="space-y-5 text-lg text-muted lg:col-span-7">
          <p>
            Muchos negocios saben que necesitan estar en internet, pero no tienen tiempo para aprender herramientas
            técnicas ni claridad sobre por dónde empezar.
          </p>
          <p>
            Nuestro trabajo es traducir esa necesidad en soluciones concretas: un menú que tus clientes pueden consultar
            desde su celular, un sitio que explica tus servicios o un catálogo que muestra tus productos.
          </p>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="border-y border-line bg-card py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="approach-title"
              eyebrow="Nuestro enfoque"
              title="Transformación digital, paso a paso."
            />
          </div>
          <div className="space-y-5 text-lg text-muted lg:col-span-7">
            <p>
              Para nosotros, la transformación digital no empieza con sistemas complejos. Empieza resolviendo un problema
              cotidiano: que tus clientes encuentren tu información, entiendan lo que ofreces y sepan cómo contactarte.
            </p>
            <p>
              Por eso trabajamos con un alcance claro, entregamos soluciones pensadas para usarse en el día a día y las
              mantenemos funcionando bajo las condiciones que acordamos contigo. Tu contenido, tu dominio y tus datos
              siempre son tuyos.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="container-site py-20 md:py-28">
        <SectionHeading
          id="principles-title"
          eyebrow="Filosofía de trabajo"
          title="Cuatro ideas que guían cómo trabajamos."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <li key={principle.title} className={`reveal flex min-h-64 flex-col rounded-lg p-7 ${principle.className}`}>
              <h3 className="text-h2">{principle.title}</h3>
              <p className={`mt-auto pt-10 ${principle.textClass}`}>{principle.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
