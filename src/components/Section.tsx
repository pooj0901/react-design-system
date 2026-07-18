import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-24"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          {title}
        </h2>

        <p className="mt-2 max-w-2xl text-gray-500">
          {description}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        {children}
      </div>
    </section>
  );
}