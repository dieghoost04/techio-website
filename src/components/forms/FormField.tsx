import type { ReactNode } from "react";
import { CircleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

export const inputClass =
  "w-full rounded-md border bg-card px-4 py-3 text-base text-ink placeholder:text-muted/80 transition-[border-color,box-shadow] duration-150 " +
  "focus-visible:border-navy focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-lavender/60 " +
  "aria-[invalid=true]:border-error aria-[invalid=true]:bg-error-tint/40";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  /** Render prop receives the aria-describedby value to put on the control. */
  children: (describedBy: string | undefined) => ReactNode;
  className?: string;
}

export function FormField({ id, label, required = false, hint, error, children, className }: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-muted">
            <span aria-hidden="true">*</span>
            <span className="sr-only">(obligatorio)</span>
          </span>
        ) : (
          <span className="ml-1.5 text-sm font-normal text-muted">(opcional)</span>
        )}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children(describedBy)}</div>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-error">
      <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      {message}
    </p>
  );
}
