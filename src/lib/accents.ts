import type { BrandAccent } from "@/types/content";

/**
 * Tailwind class sets per brand accent. Text placed on these fills is always
 * navy: white text on lavender, lime or teal does not meet WCAG AA contrast.
 */
export const accentClasses: Record<BrandAccent, { fill: string; tint: string; border: string }> = {
  lavender: { fill: "bg-lavender", tint: "bg-lavender-tint", border: "border-lavender" },
  lime: { fill: "bg-lime", tint: "bg-lime-tint", border: "border-lime" },
  teal: { fill: "bg-teal", tint: "bg-teal-tint", border: "border-teal" },
};
