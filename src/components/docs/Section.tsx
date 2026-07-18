import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "mb-12 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
    

      <div className="border-b border-slate-200 bg-slate-50/70 px-8 py-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            {description}
          </p>
        )}
      </div>

    

      <div className="p-8">
        {children}
      </div>
    </section>
  );
}