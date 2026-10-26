import type { NavItem } from "@/types/content";

/**
 * Public URL of the deployed site. Required in production for canonical
 * URLs, Open Graph tags and the sitemap. See README → "Deployment".
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const siteConfig = {
  name: "Techio Solutions",
  shortName: "Techio",
  /** Tagline taken from the official brand board. */
  tagline: "Tecnología que impulsa tu negocio.",
  description:
    "Presencia digital y herramientas prácticas para tu negocio: web con menú QR para restaurantes, sitios para negocios de servicios y catálogos de productos.",
  url: siteUrl,
  locale: "es_MX",
  /**
   * Verified public contact channels. Leave a value as `null` until the
   * business owner confirms it — components hide channels that are null.
   * See CONTENT_REVIEW.md → "Contact information".
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    whatsapp: null as string | null,
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Sobre Techio", href: "/sobre-techio" },
  { label: "Contacto", href: "/contacto" },
];

export const primaryCta: NavItem = { label: "Cuéntanos tu proyecto", href: "/contacto" };

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
