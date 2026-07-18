import { CheckCircle2, XCircle } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type Item = {
  title: string;
  description: string;
  preview?: ReactNode;
};

type DoDontProps = {
  dos: Item[];
  donts: Item[];
};

function Card({
  type,
  icon,
  items,
}: {
  type: "do" | "dont";
  icon: ReactNode;
  items: Item[];
}) {
  const isDo = type === "do";

  return (
   <div
  className={cn(
    "overflow-hidden rounded-[12px] border shadow-sm transition-all duration-200 hover:shadow-md",
    isDo
      ? "border-emerald-200 bg-emerald-50"
      : "border-rose-200 bg-rose-50"
  )}
>
   
<div
  className={cn(
    "flex items-center gap-3 border-b px-7 py-5",
    isDo
      ? "border-emerald-200"
      : "border-rose-200"
  )}
>
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            isDo
              ? "bg-emerald-100 text-emerald-600"
              : "bg-rose-100 text-rose-600"
          )}
        >
          {icon}
        </div>

        <h3
          className={cn(
            "text-lg font-semibold tracking-tight",
            isDo
              ? "text-emerald-700"
              : "text-rose-700"
          )}
        >
          {isDo ? "Do" : "Don't"}
        </h3>
      </div>

   

      <div className="space-y-8 p-7">
        {items.map((item) => (
          <div key={item.title}>
            {item.preview && (
              <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                {item.preview}
              </div>
            )}

            <h4 className="text-base font-semibold tracking-tight text-slate-900">
              {item.title}
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DoDont({
  dos,
  donts,
}: DoDontProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card
        type="do"
        icon={<CheckCircle2 size={20} strokeWidth={2.2} />}
        items={dos}
      />

      <Card
        type="dont"
        icon={<XCircle size={20} strokeWidth={2.2} />}
        items={donts}
      />
    </div>
  );
}