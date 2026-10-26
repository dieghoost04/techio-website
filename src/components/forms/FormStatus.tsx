import type { ReactNode, Ref } from "react";
import { CircleAlert, CircleCheck, Info } from "lucide-react";
import { cn } from "@/lib/cn";

type StatusTone = "error" | "success" | "info";

interface FormStatusProps {
  tone: StatusTone;
  title: string;
  children?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

const tones: Record<StatusTone, { box: string; icon: typeof Info }> = {
  error: { box: "border-error/40 bg-error-tint text-ink", icon: CircleAlert },
  success: { box: "border-success/40 bg-success-tint text-ink", icon: CircleCheck },
  info: { box: "border-line-strong bg-card text-ink", icon: Info },
};

/**
 * Status message for form submission. Focusable so it can receive focus
 * after a submit attempt; announced via role="alert" / role="status".
 */
export function FormStatus({ tone, title, children, ref }: FormStatusProps) {
  const { box, icon: Icon } = tones[tone];

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role={tone === "error" ? "alert" : "status"}
      className={cn("rounded-md border p-5 focus-visible:outline-2", box)}
    >
      <div className="flex gap-3">
        <Icon
          aria-hidden="true"
          className={cn("mt-0.5 size-5 shrink-0", tone === "error" ? "text-error" : tone === "success" ? "text-success" : "text-ink")}
        />
        <div>
          <p className="font-display font-semibold">{title}</p>
          {children ? <div className="mt-2 text-[0.95rem] text-ink/85">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}
