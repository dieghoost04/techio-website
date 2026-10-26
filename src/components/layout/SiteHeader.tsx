import { Logo } from "@/components/ui/Logo";
import { PrimaryButton } from "@/components/ui/Button";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { primaryCta } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/92 backdrop-blur-md supports-[backdrop-filter]:bg-page/80">
      <div className="container-site relative flex h-[var(--header-height)] items-center justify-between gap-6">
        <Logo />
        <DesktopNavigation />
        <div className="flex items-center gap-3">
          <PrimaryButton href={primaryCta.href} size="sm" className="max-sm:hidden">
            {primaryCta.label}
          </PrimaryButton>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
