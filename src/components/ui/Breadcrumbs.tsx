import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { NavItem } from "@/types/content";

interface BreadcrumbsProps {
  /** Trail excluding "Inicio"; the last item is the current page. */
  items: NavItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: NavItem[] = [{ label: "Inicio", href: "/" }, ...items];

  return (
    <nav aria-label="Ruta de navegación" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, index) => {
          const isCurrent = index === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isCurrent ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="rounded-xs underline-offset-4 hover:text-ink hover:underline">
                    {item.label}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
