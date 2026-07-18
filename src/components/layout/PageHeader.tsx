type PageHeaderProps = {
  title: string;
  description: string;
  badge?: string;
};

export function PageHeader({
  title,
  description,
  badge,
}: PageHeaderProps) {
  return (
    <div className="mb-12 border-b border-slate-200 pb-8">
      {badge && (
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}