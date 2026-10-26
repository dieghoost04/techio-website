import { Plus } from "lucide-react";
import type { FAQ } from "@/types/content";
import { cn } from "@/lib/cn";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

/**
 * Native <details>/<summary> disclosures: keyboard and screen-reader
 * accessible, and readable without JavaScript.
 */
export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold text-ink transition-colors hover:text-navy-soft [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong transition-[transform,background-color,border-color] duration-200 ease-brand group-open:rotate-45 group-open:border-lavender group-open:bg-lavender"
            >
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-14 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
