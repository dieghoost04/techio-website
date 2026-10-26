import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactFormFromParams } from "@/components/forms/ContactFormFromParams";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { processStages } from "@/content/process";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Cuéntanos sobre tu negocio y lo que necesitas. Revisamos tu caso y te compartimos una propuesta con un alcance claro y cotización según alcance.",
  path: "/contacto",
});

export default function ContactPage() {
  const { email, phone, whatsapp } = siteConfig.contact;
  const nextSteps = processStages.slice(0, 2);

  return (
    <section aria-labelledby="contact-title" className="container-site pb-24 pt-8">
      <Breadcrumbs items={[{ label: "Contacto", href: "/contacto" }]} />

      <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
            <p className="text-eyebrow flex items-center gap-3 text-muted">
              <span aria-hidden="true" className="inline-block size-2 rounded-[3px] bg-lavender" />
              Contacto
            </p>
            <h1 id="contact-title" className="text-h1 mt-5 text-ink">
              Cuéntanos tu proyecto.
            </h1>
            <p className="text-lead mt-6 text-muted">
              Responde unas preguntas breves sobre tu negocio. Con esa información preparamos el diagnóstico y te
              contactamos por el canal que prefieras.
            </p>

            <div className="mt-10 rounded-lg bg-navy p-7 text-on-dark on-dark">
              <h2 className="text-eyebrow text-lime">Qué sigue después de enviar</h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((stage) => (
                  <li key={stage.number} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-white/10 font-display text-xs font-bold">
                      {stage.number}
                    </span>
                    <span>
                      <span className="block font-display font-semibold">{stage.title}</span>
                      <span className="mt-1 block text-sm text-on-dark-muted">{stage.summary}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-on-dark-muted">Cotización según alcance.</p>
            </div>

            {email || phone || whatsapp ? (
              <div className="mt-6 text-sm text-muted">
                <p className="font-medium text-ink">También puedes escribirnos:</p>
                <ul className="mt-2 space-y-1">
                  {email ? (
                    <li>
                      <a href={`mailto:${email}`} className="underline underline-offset-2">
                        {email}
                      </a>
                    </li>
                  ) : null}
                  {phone ? (
                    <li>
                      <a href={`tel:${phone}`} className="underline underline-offset-2">
                        {phone}
                      </a>
                    </li>
                  ) : null}
                  {whatsapp ? (
                    <li>
                      <a href={`https://wa.me/${whatsapp}`} className="underline underline-offset-2">
                        WhatsApp
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-xl border border-line bg-card p-6 shadow-card sm:p-10">
            <h2 className="text-h3 text-ink">Solicitud de proyecto</h2>
            <div className="mt-6">
              <Suspense fallback={<ContactForm />}>
                <ContactFormFromParams />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
