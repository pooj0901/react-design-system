type ColorCardProps = {
  name: string;
  hex: string;
  color: string;
  usage: string;
};

export function ColorCard({
  name,
  hex,
  color,
  usage,
}: ColorCardProps) {
  return (
    <div className="w-44 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div
        className="mb-3 h-14 rounded-lg border border-slate-100"
        style={{ backgroundColor: color }}
      />

      <h4 className="text-sm font-semibold">
        {name}
      </h4>

      <p className="text-xs text-slate-500">
        {hex}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {usage}
      </p>
    </div>
  );
}