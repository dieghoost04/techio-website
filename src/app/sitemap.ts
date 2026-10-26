import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { solutionHref, solutions } from "@/content/solutions";

// /aviso-de-privacidad is excluded while its legal text is pending approval.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/soluciones", "/como-trabajamos", "/sobre-techio", "/contacto"];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...solutions.map((solution) => ({
      url: absoluteUrl(solutionHref(solution.slug)),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
