import type { ProcessStage } from "@/types/content";
import { cn } from "@/lib/cn";

interface ProcessStepProps {
  stage: ProcessStage;
  isLast: boolean;
}

/**
 * One stage of the process. Vertical sequence on mobile (connector on the
 * left), horizontal on large screens (connector across the top).
 */
export function ProcessStep({ stage, isLast }: ProcessStepProps) {
  return (
    <li className="reveal relative grid grid-cols-[3rem_1fr] gap-x-5 pb-10 last:pb-0 lg:block lg:pb-0">
      {/* Connector */}
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-line-strong lg:left-12 lg:top-6 lg:h-px lg:w-[calc(100%-1.5rem)]"
        />
      ) : null}

      <span
        className={cn(
          "relative z-10 grid size-12 place-items-center rounded-[14px] font-display text-sm font-bold",
          stage.number === "05" ? "bg-lime text-navy" : "bg-navy text-on-dark",
        )}
      >
        {stage.number}
      </span>

      <div className="lg:mt-6 lg:pr-6">
        <h3 className="text-h3 text-ink">{stage.title}</h3>
        <p className="mt-2 text-muted">{stage.summary}</p>
      </div>
    </li>
  );
}
