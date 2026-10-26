import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Small uppercase label, e.g. "01 / Soluciones" */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  align?: "start" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Optional element shown to the right of the heading on large screens */
  aside?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  as: Heading = "h2",
  align = "start",
  tone = "light",
  className,
  aside,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className={cn("text-eyebrow mb-4 flex items-center gap-3", dark ? "text-lime" : "text-muted")}>
            <span aria-hidden="true" className={cn("inline-block size-2 rounded-[3px]", dark ? "bg-lime" : "bg-lavender")} />
            {eyebrow}
          </p>
        ) : null}
        <Heading id={id} className={cn(Heading === "h1" ? "text-h1" : "text-h2", dark ? "text-on-dark" : "text-ink")}>
          {title}
        </Heading>
        {description ? (
          <p className={cn("text-lead mt-5 max-w-2xl", dark ? "text-on-dark-muted" : "text-muted", align === "center" && "mx-auto")}>
            {description}
          </p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
