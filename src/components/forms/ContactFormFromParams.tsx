"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { isSolutionInterest } from "@/lib/contact";

/** Preselects the solution when arriving from a solution page (?solucion=<slug>). */
export function ContactFormFromParams() {
  const param = useSearchParams().get("solucion") ?? "";
  return <ContactForm initialSolution={isSolutionInterest(param) ? param : undefined} />;
}
