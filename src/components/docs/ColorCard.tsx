interface ColorCardProps {
  name: string;
  value: string;
  description?: string;
}

export function ColorCard({
  name,
  value,
  description,
}: ColorCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div
        className="h-24 w-full"
        style={{ backgroundColor: value }}
      />

      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">
            {name}
          </h3>

          <span className="rounded-md bg-gray-100 px-2 py-1 font-mono text-xs text-gray-700">
            {value}
          </span>
        </div>

        {description && (
          <p className="text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}