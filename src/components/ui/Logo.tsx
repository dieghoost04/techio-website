import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "color" | "inverse";
  className?: string;
}

/**
 * Temporary logo lockup: provisional mark + wordmark set in Sora (the brand
 * typeface). Swap for the official horizontal logo file when delivered.
 */
export function Logo({ tone = "color", className }: LogoProps) {
  const inverse = tone === "inverse";

  return (
    <Link
      href="/"
      aria-label="Techio Solutions, ir al inicio"
      className={cn("group inline-flex items-center gap-2.5 rounded-sm", className)}
    >
      <BrandMark tone={tone} className="h-9 w-9 transition-transform duration-200 ease-brand group-hover:-rotate-3" />
      <span className="flex flex-col leading-none" aria-hidden="true">
        <span
          className={cn(
            "font-display text-[1.6rem] font-bold tracking-[-0.045em]",
            inverse ? "text-on-dark" : "text-ink",
          )}
        >
          techio
        </span>
        <span
          className={cn(
            "mt-0.5 pl-px font-display text-[0.5rem] font-semibold tracking-[0.42em]",
            inverse ? "text-on-dark-muted" : "text-ink",
          )}
        >
          SOLUTIONS
        </span>
      </span>
    </Link>
  );
}
