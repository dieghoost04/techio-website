import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Closing call to action shared by every page. */
export function CTASection({
  title = "Cuéntanos qué necesita tu negocio.",
  description = "Compártenos cómo trabajas hoy y qué te gustaría resolver. Revisamos tu caso y te proponemos una solución con un alcance claro.",
  ctaLabel = "Cuéntanos tu proyecto",
  ctaHref = "/contacto",
}: CTASectionProps) {
  const { whatsapp } = siteConfig.contact;

  return (
    <section aria-labelledby="cta-title" className="container-site py-16 md:py-24">
      <div className="reveal relative overflow-hidden rounded-xl bg-lavender px-7 py-14 sm:px-12 md:py-20 lg:px-16">
        <div className="relative z-10 max-w-2xl">
          <h2 id="cta-title" className="text-h1 text-navy">
            {title}
          </h2>
          <p className="text-lead mt-6 max-w-xl text-navy/85">{description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={ctaHref} variant="navy">
              {ctaLabel}
            </ButtonLink>
            {whatsapp ? (
              <ButtonLink
                href={`https://wa.me/${whatsapp}`}
                variant="secondary"
                withArrow={false}
              >
                Escríbenos por WhatsApp
              </ButtonLink>
            ) : null}
          </div>
        </div>

        {/* Modular "enlace" pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 grid grid-cols-4 gap-3 opacity-95 max-md:scale-75 max-md:opacity-40 md:bottom-10 md:right-10"
        >
          <span className="size-16 rounded-[16px] bg-navy" />
          <span className="size-16 rounded-[16px] bg-navy" />
          <span className="size-16 rounded-[16px] bg-white/45" />
          <span className="size-16" />
          <span className="size-16" />
          <span className="size-16 rounded-[16px] bg-navy" />
          <span className="size-16 rounded-[16px] bg-lime" />
          <span className="size-16 rounded-[16px] bg-white/45" />
          <span className="size-16 rounded-[16px] bg-lime" />
          <span className="size-16 rounded-[16px] bg-navy" />
          <span className="size-16" />
          <span className="size-16 rounded-[16px] bg-navy" />
        </div>
      </div>
    </section>
  );
}
