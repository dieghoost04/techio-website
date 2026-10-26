"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { mainNav, primaryCta } from "@/lib/site";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/cn";

/**
 * Disclosure-style mobile menu: a toggle button controls a panel below the
 * header. It is not modal, so focus is never trapped; Escape closes it and
 * returns focus to the toggle, and it closes after any navigation.
 */
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close after navigating: the menu only counts as open on the page where it was opened.
  const isOpen = open && openedAt === pathname;

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !toggleRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  function toggle() {
    setOpenedAt(pathname);
    setOpen((value) => !(value && openedAt === pathname));
  }

  return (
    <div className="xl:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-navy/15 bg-card text-ink transition-colors hover:border-navy"
      >
        {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-page shadow-raised"
      >
        <nav aria-label="Principal" className="container-site py-4">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-14 items-center justify-between font-display text-lg font-semibold",
                      active ? "text-ink" : "text-ink/80",
                    )}
                  >
                    {item.label}
                    {active ? <span aria-hidden="true" className="size-2.5 rounded-[3px] bg-lavender" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={primaryCta.href}
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-lavender px-6 font-semibold text-navy"
          >
            {primaryCta.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
