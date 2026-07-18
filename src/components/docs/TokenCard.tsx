import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface TokenCardProps {
  name: string;
  value: string;
  description: string;
  highlight?: boolean;
  preview?: ReactNode;
  className?: string;
  previewClassName?: string;
}

export function TokenCard({
  name,
  value,
  description,
  highlight = false,
  preview,
  className,
  previewClassName,
}: TokenCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[24px] border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        highlight
          ? "border-blue-500 ring-1 ring-blue-500/20"
          : "border-slate-200",
        className
      )}
    >
   

    {preview ? (
  <div
    className={cn(
      "flex h-24 items-center justify-center border-b border-slate-200 bg-slate-50 px-6",
      previewClassName
    )}
  >
    {preview}
  </div>
) : (
        <div
          className="h-20 w-full border-b border-slate-200"
          style={{ background: value }}
        />
      )}

  

      <div className="space-y-3 p-6">
        <div>
          <h3
            className={cn(
              "font-mono text-sm font-semibold tracking-tight",
              highlight
                ? "text-blue-600"
                : "text-slate-900"
            )}
          >
            {name}
          </h3>

          <p className="mt-1 font-mono text-xs text-slate-500">
            {value}
          </p>
        </div>

        <p className="text-sm leading-6 text-slate-600">
          {description}
        </p>

        {highlight && (
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Default
          </span>
        )}
      </div>
    </div>
  );
}