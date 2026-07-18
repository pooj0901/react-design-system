import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type PreviewCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function PreviewCard({
  title,
  description,
  children,
  className,
}: PreviewCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
    

      <div className="border-b border-slate-200 bg-slate-50/70 px-7 py-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}
      </div>

    

      <div className="flex min-h-[240px] items-center justify-center bg-white p-10">
        {children}
      </div>
    </div>
  );
}