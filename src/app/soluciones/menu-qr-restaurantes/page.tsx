import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/sections/SolutionPageTemplate";
import { getSolution } from "@/content/solutions";
import { buildMetadata } from "@/lib/metadata";

const solution = getSolution("menu-qr-restaurantes");

export const metadata: Metadata = buildMetadata({
  title: solution.seo.title,
  description: solution.seo.description,
  path: "/soluciones/menu-qr-restaurantes",
});

export default function Page() {
  return <SolutionPageTemplate solution={solution} />;
}
