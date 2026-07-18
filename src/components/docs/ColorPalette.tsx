import { ColorCard } from "./ColorCard";

interface Color {
  name: string;
  value: string;
  description?: string;
}

interface ColorPaletteProps {
  title: string;
  description?: string;
  colors: Color[];
}

export function ColorPalette({
  title,
  description,
  colors,
}: ColorPaletteProps) {
  return (
    <section className="space-y-8">
   

      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-3 text-base leading-7 text-slate-600">
            {description}
          </p>
        )}
      </div>

  
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {colors.map((color) => (
          <ColorCard
            key={color.name}
            name={color.name}
            value={color.value}
            description={color.description}
          />
        ))}
      </div>
    </section>
  );
}