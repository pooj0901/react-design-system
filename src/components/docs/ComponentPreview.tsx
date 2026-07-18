import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ComponentPreviewProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function ComponentPreview({
  title = "Live Preview",
  description,
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >

      <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-slate-600">
            {description}
          </p>
        )}
      </div>

      <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8">
        <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white">
          {children}
        </div>
      </div>
    </section>
  );
}