import { cn } from "@/lib/cn";

interface BrandMarkProps {
  className?: string;
  /** "color" on light backgrounds; "inverse" swaps navy for white on dark backgrounds. */
  tone?: "color" | "inverse";
}

/**
 * PROVISIONAL vector trace of the Techio "T" mark, drawn from the brand board
 * in /Media. Replace with the official SVG export when it is available — see
 * README → "Replacing brand assets".
 */
export function BrandMark({ className, tone = "color" }: BrandMarkProps) {
  const body = tone === "inverse" ? "#FFFFFF" : "var(--brand-navy)";

  return (
    <svg viewBox="22 30 640 640" aria-hidden="true" focusable="false" className={cn("shrink-0", className)}>
      <path
        style={{ fill: body }}
        d="M52 30H310Q340 30 340 60V180Q340 215 375 220H405Q440 222 440 260V640Q440 670 410 670H242Q212 670 212 640V500Q212 470 242 470H365Q395 470 395 440V285Q395 252 362 250H52Q22 250 22 220V60Q22 30 52 30Z"
      />
      <path
        style={{ fill: "var(--brand-lavender)" }}
        d="M400 30H632Q662 30 662 60V225Q662 255 632 255H490Q460 255 460 225Q458 195 430 192H400Q370 192 370 162V60Q370 30 400 30Z"
      />
      <rect x="212" y="283" width="163" height="157" rx="26" style={{ fill: "var(--brand-lime)" }} />
    </svg>
  );
}
