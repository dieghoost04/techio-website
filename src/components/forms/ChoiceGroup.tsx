import { Check } from "lucide-react";
import { FieldError } from "@/components/forms/FormField";
import { cn } from "@/lib/cn";

interface ChoiceOption {
  value: string;
  label: string;
}

interface ChoiceGroupProps {
  id: string;
  name: string;
  legend: string;
  options: readonly ChoiceOption[];
  value: string;
  error?: string;
  columns?: 1 | 2 | 3;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

/** Accessible radio group rendered as selectable cards. */
export function ChoiceGroup({ id, name, legend, options, value, error, columns = 2, onChange, onBlur }: ChoiceGroupProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <fieldset aria-describedby={errorId}>
      <legend className="font-medium text-ink">
        {legend}
        <span className="ml-1 text-muted">
          <span aria-hidden="true">*</span>
          <span className="sr-only">(obligatorio)</span>
        </span>
      </legend>
      <div
        className={cn(
          "mt-3 grid gap-2.5",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-3",
        )}
      >
        {options.map((option, index) => {
          const checked = value === option.value;
          const optionId = `${id}-${index}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                "relative flex min-h-14 cursor-pointer items-center gap-3 rounded-md border bg-card px-4 py-3 transition-[border-color,background-color] duration-150",
                "has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-lavender/60",
                checked ? "border-navy bg-lavender-tint" : error ? "border-error" : "border-line-strong hover:border-navy/50",
              )}
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                onBlur={onBlur}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
                  checked ? "border-navy bg-navy text-lime" : "border-line-strong",
                )}
              >
                {checked ? <Check className="size-3" strokeWidth={3.5} /> : null}
              </span>
              <span className="text-[0.95rem] font-medium text-ink">{option.label}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}
