import { ArrowLink } from "@/components/ui/Button";
import { accentClasses } from "@/lib/accents";
import { cn } from "@/lib/cn";
import { solutionHref } from "@/content/solutions";
import type { Solution } from "@/types/content";

interface ProblemCardProps {
  solution: Solution;
  index: number;
}

export function ProblemCard({ solution, index }: ProblemCardProps) {
  const { problemCard } = solution;

  return (
    <article className="reveal group relative flex flex-col rounded-lg border border-line bg-card p-7 shadow-sm transition-[box-shadow,transform] duration-300 ease-brand hover:-translate-y-1 hover:shadow-raised sm:p-8">
      <div className="flex items-start justify-between">
        <span className="font-display text-sm font-semibold text-muted">{String(index + 1).padStart(2, "0")}</span>
        <span aria-hidden="true" className="relative block size-10">
          <span className={cn("absolute right-0 top-0 size-6 rounded-[7px]", accentClasses[solution.accent].fill)} />
          <span className="absolute bottom-0 left-0 size-5 rounded-[6px] bg-navy" />
        </span>
      </div>

      <h3 className="text-h3 mt-6 text-ink">{problemCard.title}</h3>
      <p className="mt-3 text-muted">{problemCard.description}</p>

      <div className="mt-6 border-t border-line pt-6">
        <p className="text-eyebrow text-ink">Cómo ayudamos</p>
        <p className="mt-2 text-ink/85">{problemCard.howWeHelp}</p>
      </div>

      <div className="mt-auto pt-7">
        <ArrowLink href={solutionHref(solution.slug)}>
          Ver solución<span className="sr-only">: {solution.name}</span>
        </ArrowLink>
      </div>
    </article>
  );
}
