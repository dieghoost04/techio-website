import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SolutionIcon } from "@/components/ui/SolutionIcon";
import { accentClasses } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { solutionHref } from "@/content/solutions";
import type { Solution } from "@/types/content";

interface SolutionCardProps {
  solution: Solution;
  index: number;
  tone?: "dark" | "light";
  headingLevel?: "h2" | "h3";
}

export function SolutionCard({ solution, index, tone = "dark", headingLevel: Heading = "h3" }: SolutionCardProps) {
  const dark = tone === "dark";

  return (
    <article
      className={cn(
        "reveal group relative flex flex-col overflow-hidden rounded-lg border p-7 transition-[border-color,transform,background-color] duration-300 ease-brand hover:-translate-y-1 sm:p-8",
        dark ? "border-white/12 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.07]" : "border-line bg-card shadow-sm hover:shadow-raised",
      )}
    >
      <div className="flex items-center justify-between">
        <span className={cn("grid size-14 place-items-center rounded-md text-navy", accentClasses[solution.accent].fill)}>
          <SolutionIcon icon={solution.icon} className="size-7" />
        </span>
        <span className={cn("font-display text-sm font-semibold", dark ? "text-on-dark-muted" : "text-muted")}>
          {String(index + 1).padStart(2, "0")} / 03
        </span>
      </div>

      <Heading className={cn("text-h3 mt-8", dark ? "text-on-dark" : "text-ink")}>{solution.name}</Heading>

      <dl className="mt-6 space-y-4 text-[0.95rem]">
        <div>
          <dt className={cn("text-eyebrow", dark ? "text-lime" : "text-ink")}>Para</dt>
          <dd className={cn("mt-1.5", dark ? "text-on-dark-muted" : "text-muted")}>{solution.audience}</dd>
        </div>
        <div>
          <dt className={cn("text-eyebrow", dark ? "text-lime" : "text-ink")}>Problema</dt>
          <dd className={cn("mt-1.5", dark ? "text-on-dark-muted" : "text-muted")}>{solution.problem}</dd>
        </div>
      </dl>

      <p className={cn("mt-6 border-t pt-6", dark ? "border-white/12 text-on-dark" : "border-line text-ink")}>
        {solution.summary}
      </p>

      <div className="mt-auto pt-8">
        <Link
          href={solutionHref(solution.slug)}
          className={cn(
            "inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors duration-200",
            dark ? "bg-white text-navy hover:bg-lime" : "bg-navy text-on-dark hover:bg-navy-soft",
          )}
        >
          Conocer la solución<span className="sr-only">: {solution.name}</span>
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
