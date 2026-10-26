import { BriefcaseBusiness, Package, QrCode, type LucideIcon } from "lucide-react";
import type { SolutionIconKey } from "@/types/content";

const icons: Record<SolutionIconKey, LucideIcon> = {
  restaurant: QrCode,
  services: BriefcaseBusiness,
  catalog: Package,
};

export function SolutionIcon({ icon, className }: { icon: SolutionIconKey; className?: string }) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" strokeWidth={1.75} className={className} />;
}
