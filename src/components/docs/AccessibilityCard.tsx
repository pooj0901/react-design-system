import { CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccessibilityCardProps {
  title: string;
  items: string[];
  className?: string;
}

export function AccessibilityCard({
  title,
  items,
  className,
}: AccessibilityCardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <h3 className="mb-6 text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4"
          >
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
              <CheckCircle2
                size={16}
                strokeWidth={2.2}
                className="text-emerald-600"
              />
            </div>

            <span className="flex-1 text-sm leading-7 text-slate-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}