import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";

import { cn } from "../../../lib/utils";
import { checkboxVariants } from "./checkboxVariants";

type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> &
  VariantProps<typeof checkboxVariants> & {
    label?: string;
    description?: string;
    error?: string;
  };

export function Checkbox({
  label,
  description,
  error,
  checked,
  disabled,
  size,
  className,
  ...props
}: CheckboxProps) {
  const state = error
    ? "error"
    : checked
    ? "checked"
    : "default";

  return (
    <label className="flex items-start gap-3 cursor-pointer">
  <input
  type="checkbox"
 className="peer absolute h-0 w-0 opacity-0"
  disabled={disabled}
  {...props}
  checked={checked}
/>

      <div
        className={cn(
          checkboxVariants({
            size,
            state,
          }),
          className
        )}
      >
        {checked && <Check size={14} strokeWidth={3} />}
      </div>

      <div className="space-y-1">
        {label && (
          <p className="text-sm font-medium">
            {label}
          </p>
        )}

        {description && !error && (
          <p className="text-sm text-slate-500">
            {description}
          </p>
        )}

        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </label>
  );
}