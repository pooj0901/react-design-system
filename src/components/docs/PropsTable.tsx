import { cn } from "../../lib/utils";

type PropItem = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

type PropsTableProps = {
  props: PropItem[];
  className?: string;
};

export function PropsTable({
  props,
  className,
}: PropsTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
       

          <thead className="bg-slate-50/70">
            <tr>
              <th className="border-b border-slate-200 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Prop
              </th>

              <th className="border-b border-slate-200 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Type
              </th>

              <th className="border-b border-slate-200 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Default
              </th>

              <th className="border-b border-slate-200 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Description
              </th>
            </tr>
          </thead>

      

          <tbody className="divide-y divide-slate-100">
            {props.map((prop) => (
              <tr
                key={prop.name}
                className="transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-5 align-top">
                  <code className="rounded-lg bg-blue-50 px-2.5 py-1 font-mono text-sm font-medium text-blue-700">
                    {prop.name}
                  </code>
                </td>

                <td className="px-6 py-5 align-top">
                  <code className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-sm text-slate-700">
                    {prop.type}
                  </code>
                </td>

                <td className="px-6 py-5 align-top">
                  <span className="text-sm font-medium text-slate-600">
                    {prop.defaultValue ?? "—"}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm leading-7 text-slate-600">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}