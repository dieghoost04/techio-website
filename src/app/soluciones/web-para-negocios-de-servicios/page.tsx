import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/sections/SolutionPageTemplate";
import { getSolution } from "@/content/solutions";
import { buildMetadata } from "@/lib/metadata";

const solution = getSolution("web-para-negocios-de-servicios");

export const metadata: Metadata = buildMetadata({
  title: solution.seo.title,
  description: solution.seo.description,
  path: "/soluciones/web-para-negocios-de-servicios",
});

export default function Page() {
  return <SolutionPageTemplate solution={solution} />;
}
