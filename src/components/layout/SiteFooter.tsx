import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { mainNav, siteConfig } from "@/lib/site";
import { solutionHref, solutions } from "@/content/solutions";

const footerLinkClass =
  "inline-flex min-h-9 items-center rounded-xs text-on-dark-muted transition-colors duration-200 hover:text-on-dark";

export function SiteFooter() {
  const { email, phone, whatsapp } = siteConfig.contact;
  const hasContact = Boolean(email || phone || whatsapp);

  return (
    <footer className="on-dark bg-navy text-on-dark">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo tone="inverse" />
          <p className="mt-6 max-w-sm text-on-dark-muted">
            Ayudamos a negocios a tener presencia digital y a adoptar herramientas digitales prácticas: webs, menús
            digitales y catálogos de productos.
          </p>
          <p className="mt-6 font-display text-lg font-semibold text-lime">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Pie de página" className="grid gap-10 sm:grid-cols-3 md:col-span-7">
          <div>
            <h2 className="text-eyebrow text-on-dark">Navegación</h2>
            <ul className="mt-4 space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-eyebrow text-on-dark">Soluciones</h2>
            <ul className="mt-4 space-y-1">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link href={solutionHref(solution.slug)} className={footerLinkClass}>
                    {solution.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-eyebrow text-on-dark">Contacto</h2>
            <ul className="mt-4 space-y-1">
              {email ? (
                <li>
                  <a href={`mailto:${email}`} className={footerLinkClass}>
                    {email}
                  </a>
                </li>
              ) : null}
              {phone ? (
                <li>
                  <a href={`tel:${phone}`} className={footerLinkClass}>
                    {phone}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <li>
                  <a href={`https://wa.me/${whatsapp}`} className={footerLinkClass} rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              ) : null}
              <li>
                <Link href="/contacto" className={footerLinkClass}>
                  {hasContact ? "Formulario de contacto" : "Escríbenos desde el formulario"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <span aria-hidden="true" className="flex gap-1">
              <span className="size-2 rounded-[3px] bg-lavender" />
              <span className="size-2 rounded-[3px] bg-lime" />
              <span className="size-2 rounded-[3px] bg-teal" />
            </span>
            <span>
              © <CopyrightYear /> {siteConfig.name}. Todos los derechos reservados.
            </span>
          </p>
          <Link href="/aviso-de-privacidad" className={footerLinkClass}>
            Aviso de privacidad
          </Link>
        </div>
      </div>

    </footer>
  );
}
