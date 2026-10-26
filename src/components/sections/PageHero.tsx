import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { NavItem } from "@/types/content";

interface PageHeroProps {
  breadcrumbs: NavItem[];
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
}

/** Hero for inner pages: breadcrumbs, H1, lead and optional visual. */
export function PageHero({ breadcrumbs, eyebrow, title, lead, actions, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-site grid gap-12 pb-16 pt-8 md:pb-20 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-8">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-eyebrow mt-12 flex items-center gap-3 text-muted md:mt-16">
            <span aria-hidden="true" className="inline-block size-2 rounded-[3px] bg-lavender" />
            {eyebrow}
          </p>
          <h1 className="text-h1 mt-5 max-w-4xl text-ink">{title}</h1>
          <p className="text-lead mt-6 max-w-2xl text-muted">{lead}</p>
          {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {aside ? <div className="lg:col-span-4">{aside}</div> : null}
      </div>
    </section>
  );
}
