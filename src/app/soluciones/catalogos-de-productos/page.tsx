import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/sections/SolutionPageTemplate";
import { getSolution } from "@/content/solutions";
import { buildMetadata } from "@/lib/metadata";

const solution = getSolution("catalogos-de-productos");

export const metadata: Metadata = buildMetadata({
  title: solution.seo.title,
  description: solution.seo.description,
  path: "/soluciones/catalogos-de-productos",
});

export default function Page() {
  return <SolutionPageTemplate solution={solution} />;
}
