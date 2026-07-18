import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface UsageListProps {
  title: string;
  description?: string;
  items: string[];
  className?: string;
}

export function UsageList({
  title,
  description,
  items,
  className,
}: UsageListProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
    

      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}
      </div>

    

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4"
          >
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
              <Check
                size={16}
                strokeWidth={2.4}
                className="text-blue-600"
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