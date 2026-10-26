import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "secondary-inverse" | "lime" | "navy";

type ButtonSize = "md" | "sm";

const sizes: Record<ButtonSize, string> = {
  md: "min-h-12 px-6 py-3 text-[0.95rem]",
  sm: "min-h-11 px-5 py-2 text-sm",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-brand " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-55 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  // Navy on lavender: ~6.7:1 contrast.
  primary: "bg-lavender text-navy shadow-[inset_0_-2px_0_rgb(16_26_54/0.12)] hover:bg-lavender-strong",
  secondary: "border border-navy/20 bg-card text-navy hover:border-navy hover:bg-white",
  "secondary-inverse": "border border-white/30 text-on-dark hover:border-white hover:bg-white/10",
  lime: "bg-lime text-navy hover:bg-white",
  navy: "bg-navy text-on-dark hover:bg-navy-soft",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  withArrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
      {withArrow ? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-brand group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}

export function PrimaryButton(props: Omit<ButtonLinkProps, "variant">) {
  return <ButtonLink variant="primary" {...props} />;
}

export function SecondaryButton({ inverse = false, ...props }: Omit<ButtonLinkProps, "variant"> & { inverse?: boolean }) {
  return <ButtonLink variant={inverse ? "secondary-inverse" : "secondary"} {...props} />;
}

interface SubmitButtonProps extends Omit<ComponentProps<"button">, "className"> {
  className?: string;
}

/** Native button for actions (form submit). Navigation always uses links. */
export function ActionButton({ className, children, ...props }: SubmitButtonProps) {
  return (
    <button className={cn(base, sizes.md, variants.primary, className)} {...props}>
      {children}
    </button>
  );
}

interface TextLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}

/** Inline arrow link used at the end of cards and sections. */
export function ArrowLink({ tone = "light", className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-2 underline-offset-[6px] transition-colors duration-200 hover:decoration-current",
        tone === "dark" ? "text-on-dark decoration-lime" : "text-ink decoration-lavender",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
