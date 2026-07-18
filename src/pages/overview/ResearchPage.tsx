export function ResearchPage() {
  const objectives = [
    "Create reusable UI components.",
    "Maintain visual consistency.",
    "Improve accessibility.",
    "Reduce design and development time.",
    "Provide reusable design tokens.",
    "Create comprehensive documentation.",
  ];

  const principles = [
    {
      title: "Consistency",
      body: "Every component follows the same spacing, typography, colors and interaction patterns.",
      accent: "border-l-indigo-500",
      dot: "bg-indigo-500",
    },
    {
      title: "Accessibility",
      body: "Components are designed with keyboard navigation, focus states and readable color contrast.",
      accent: "border-l-rose-400",
      dot: "bg-rose-400",
    },
    {
      title: "Reusability",
      body: "Components can be reused across multiple applications with minimal customization.",
      accent: "border-l-amber-400",
      dot: "bg-amber-400",
    },
    {
      title: "Scalability",
      body: "The system is designed to grow with new components, themes and product requirements.",
      accent: "border-l-emerald-400",
      dot: "bg-emerald-400",
    },
  ];

  const process = [
    "Research",
    "Design Tokens",
    "Components",
    "Documentation",
    "Development",
  ];

  const systems = [
    {
      code: "TW",
      badgeClass: "bg-indigo-600",
      name: "Tailwind UI",
      url: "tailwindui.com",
      tags: ["Variant naming", "Color scale", "Component examples"],
      note: "primary-50→900 numeric scale adopted directly. Makes hover/active states predictable — 600 default, 700 hover, 800 active.",
    },
    {
      code: "SC",
      badgeClass: "bg-slate-900",
      name: "Shadcn / ui",
      url: "ui.shadcn.com",
      tags: ["Compound components", "forwardRef", "Accessibility"],
      note: "Card.Header / Card.Body pattern and forwardRef on every interactive element. Improves form library compatibility and focus management.",
    },
    {
      code: "M3",
      badgeClass: "bg-amber-500",
      name: "Material Design 3",
      url: "m3.material.io",
      tags: ["Token structure", "8px grid", "All 5 states"],
      note: "Every interactive state (default, hover, active, disabled, focus) is mandatory for every component. The 8px base grid adopted.",
    },
    {
      code: "AN",
      badgeClass: "bg-rose-500",
      name: "Ant Design",
      url: "ant.design",
      tags: ["Props tables", "When to use", "Code + preview"],
      note: '"When to use / When not to use" section adopted for every component. Guidance prevents misuse; developers need more than API reference.',
    },
  ];

  const decisions = [
    {
      decision: "primary-600 naming convention",
      source: "Tailwind UI",
      sourceClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
      why: "Numeric scale = predictable darker/lighter steps",
      code: true,
    },
    {
      decision: "Compound sub-components (Card.Header)",
      source: "Shadcn/ui",
      sourceClass: "bg-slate-100 text-slate-700 border-slate-300",
      why: "Cleaner JSX than deeply prop-configured APIs",
      code: false,
    },
    {
      decision: "8px spacing base unit",
      source: "Material",
      sourceClass: "bg-amber-50 text-amber-700 border-amber-200",
      why: "Divides evenly on all pixel-density screens",
      code: false,
    },
    {
      decision: "Props table + When-to-use per component",
      source: "Ant Design",
      sourceClass: "bg-rose-50 text-rose-700 border-rose-200",
      why: "Scannable tables beat prose for developer reference",
      code: false,
    },
  ];

  return (
    <div className="space-y-16">
    

      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          Research &amp; Planning
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Research
        </h1>
        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
          Research and planning that guided the creation of this design
          system.
        </p>
      </div>

    

      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-5 h-1 w-10 rounded-full bg-indigo-500" />
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Project Goal
          </h2>
          <p className="leading-7 text-slate-600">
            Build a scalable, reusable, and accessible design system that
            creates a consistent user experience across products while
            improving collaboration between designers and developers.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-5 h-1 w-10 rounded-full bg-rose-400" />
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Problem Statement
          </h2>
          <p className="leading-7 text-slate-600">
            Many products suffer from inconsistent UI patterns, duplicated
            components, different spacing systems, multiple color styles, and
            poor documentation. These inconsistencies slow development,
            create design debt, and reduce usability.
          </p>
        </div>
      </section>

   

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Systems Studied
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {systems.map((system) => (
            <div
              key={system.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${system.badgeClass}`}
                >
                  {system.code}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{system.name}</p>
                  <p className="text-xs text-slate-400">{system.url}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {system.note}
              </p>
            </div>
          ))}
        </div>
      </section>

    

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Key Decisions From Research
        </h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                <th className="px-6 py-3 font-medium">Decision</th>
                <th className="px-6 py-3 font-medium">Source</th>
                <th className="px-6 py-3 font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              {decisions.map((row, i) => (
                <tr
                  key={row.decision}
                  className={i !== decisions.length - 1 ? "border-b border-slate-100" : ""}
                >
                  <td className="px-6 py-4">
                    {row.code ? (
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
                        {row.decision}
                      </code>
                    ) : (
                      <span className="text-slate-700">{row.decision}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${row.sourceClass}`}
                    >
                      {row.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

 

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Objectives
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {objectives.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M6.5 10.2l2.3 2.3 4.7-4.9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="leading-6 text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Design Principles
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className={`rounded-xl border border-slate-200 border-l-4 ${p.accent} bg-white p-6 transition-shadow hover:shadow-md`}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Design Process
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-slate-200 sm:block" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              {process.map((step, i) => (
                <div
                  key={step}
                  className="flex flex-row items-center gap-3 sm:flex-col sm:items-center sm:text-center"
                >
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-white text-xs font-semibold text-indigo-600">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700 sm:mt-1">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-indigo-50 to-violet-50 p-8">
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-200/40 to-violet-200/40 blur-2xl" />
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-indigo-500">
          Expected Outcome
        </h2>
        <p className="relative leading-7 text-indigo-950">
          A modern design system that includes reusable design tokens,
          accessible React components, comprehensive documentation, and a
          scalable foundation for future products and teams.
        </p>
      </section>
    </div>
  );
}