export type BrandAccent = "lavender" | "lime" | "teal";

export type SolutionIconKey = "restaurant" | "services" | "catalog";

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface IncludedItem {
  title: string;
  description: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  /** Longer explanation used on /como-trabajamos */
  detail: string;
  /** What the client does during this stage */
  clientRole: string;
}

export interface Solution {
  slug: string;
  /** Full public name of the solution family */
  name: string;
  /** Compact label for navigation, chips and footer links */
  shortName: string;
  accent: BrandAccent;
  icon: SolutionIconKey;
  /** Who this solution is for */
  audience: string;
  /** The main problem, phrased from the customer's perspective */
  problem: string;
  /** One-paragraph explanation used on cards */
  summary: string;
  /** Home "Problemas que resolvemos" card copy */
  problemCard: {
    title: string;
    description: string;
    howWeHelp: string;
  };
  hero: {
    title: string;
    lead: string;
  };
  problemSection: {
    title: string;
    paragraphs: string[];
    signals: string[];
  };
  included: IncludedItem[];
  notIncluded: string[];
  clientProvides: string[];
  maintenance: {
    summary: string;
    points: string[];
  };
  faqs: FAQ[];
  seo: {
    title: string;
    description: string;
  };
}
