import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";

export function DesignTokensPage() {
  const categories = [
  {
    name: "Colors",
    desc: "Primary, neutral and semantic color palettes.",
    count: "3 groups",
    preview: (
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-[8px] bg-blue-600" />
        <div className="h-8 w-8 rounded-[8px] bg-yellow-300" />
        <div className="h-8 w-8 rounded-[8px] bg-slate-300" />
      </div>
    ),
  },

  {
    name: "Typography",
    desc: "Font sizes, weights and line-heights.",
    count: "Type scale",
    preview: (
      <div className="space-y-1">
        <p className="text-lg font-semibold leading-none text-slate-900">
          Aa
        </p>
        <p className="text-xs text-slate-500">
          Inter
        </p>
      </div>
    ),
  },

  {
    name: "Spacing",
    desc: "Consistent spacing scale for layout rhythm.",
    count: "Spacing scale",
    preview: (
      <div className="flex items-end gap-2">
        <div className="h-4 w-4 rounded bg-blue-500" />
        <div className="h-6 w-6 rounded bg-blue-500" />
        <div className="h-8 w-8 rounded bg-blue-500" />
      </div>
    ),
  },

  {
    name: "Border Radius",
    desc: "Corner-radius tokens from sharp to pill.",
    count: "8 tokens",
    preview: (
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded border border-slate-300 bg-white" />
        <div className="h-8 w-8 rounded-[8px] border border-slate-300 bg-white" />
        <div className="h-8 w-8 rounded-[12px] border border-slate-300 bg-white" />
        <div className="h-8 w-8 rounded-full border border-slate-300 bg-white" />
      </div>
    ),
  },

  {
    name: "Shadow",
    desc: "Elevation tokens communicating depth and hierarchy.",
    count: "5 tokens",
    preview: (
      <div className="flex gap-3 bg-slate-100 p-2 rounded-lg">
        <div className="h-7 w-7 rounded-lg bg-white shadow-sm" />
        <div className="h-7 w-7 rounded-lg bg-white shadow-md" />
        <div className="h-7 w-7 rounded-lg bg-white shadow-xl" />
      </div>
    ),
  },

  {
    name: "Motion",
    desc: "Duration and easing tokens for animation.",
    count: "4 + 4 tokens",
    preview: (
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-600" />
        <div className="h-2 w-2 rounded-full bg-blue-500" />
        <div className="h-2 w-2 rounded-full bg-blue-400" />
        <div className="h-2 w-2 rounded-full bg-blue-300" />
      </div>
    ),
  },
];

  const tiers = [
    {
      title: "Primitive",
      example: "blue-600 → #2563EB",
      description: "Raw, context-free values. A hex code, a pixel number, a millisecond.",
    },
    {
      title: "Semantic",
      example: "color-primary → blue-600",
      description: "Primitives given meaning. What role does this value play in the system?",
    },
    {
      title: "Component",
      example: "button-bg → color-primary",
      description: "Semantic tokens applied to a specific component's specific property.",
    },
  ];

  return (
    <div className="space-y-16">

      <PageHeader
        badge="Overview"
        title="Design Tokens"
        description="The foundational values — color, type, space, radius, shadow and motion — that every component in this system is built from."
      />

      <Section
        title="What Are Design Tokens?"
        description="A single source of truth for the small, repeated decisions that make an interface feel consistent."
      >

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="leading-7 text-slate-600">
            Design tokens are named values — a color, a spacing unit, a duration — stored once
            and referenced everywhere. Instead of a button and a card independently deciding
            what shade of blue or how much corner rounding to use, both point to the same
            token. Change the token, and every component that references it updates together.
          </p>
        </div>

      </Section>

      <Section
        title="Token Categories"
        description="Every category documented in this system, and what it covers."
      >

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
               <div>{cat.preview}</div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-500">
                  {cat.count}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900">{cat.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{cat.desc}</p>
            </div>
          ))}
        </div>

      </Section>

      <Section
        title="Token Tiers"
        description="Tokens build on each other in three layers — from raw value to component-specific usage."
      >

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-slate-200 sm:block" />
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              {tiers.map((tier, i) => (
                <div key={tier.title} className="flex flex-1 flex-row gap-4 sm:flex-col sm:items-center sm:text-center">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-xs font-semibold text-blue-600">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{tier.title}</p>
                    <p className="mt-1 font-mono text-[11px] text-slate-400">{tier.example}</p>
                    <p className="mt-2 max-w-[16rem] text-xs leading-5 text-slate-500 sm:mx-auto">
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Section>

      <Section
        title="Naming Convention"
        description="Tokens follow a consistent, predictable naming pattern across every category."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Pattern</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <code>--{"{category}"}-{"{property}"}-{"{step}"}</code>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <code>--color-primary-600</code>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <code>--radius-lg</code>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <code>--duration-base</code>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Why It Matters</h3>
            <p className="text-sm leading-7 text-slate-600">
              A predictable naming pattern means anyone on the team can guess a token's name
              before looking it up, and autocomplete in the editor does the rest.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Reference"
        description="How every category's tokens come together in one variable file."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">CSS Variables</h3>
            <CodeBlock
              language="css"
              code={`:root {
  /* Color */
  --color-primary-600: #2563EB;

  /* Radius */
  --radius-md: 8px;

  /* Shadow */
  --shadow-md: 0 4px 6px rgba(15,23,42,0.10);

  /* Motion */
  --duration-base: 200ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Usage</h3>
            <CodeBlock
              language="tsx"
              code={`<Button
  className="bg-blue-600 rounded-md shadow-md
             transition-all duration-200 ease-in-out"
>
  Continue
</Button>`}
            />
          </div>

        </div>
      </Section>

      <Section
        title="Do & Don't"
        description="Follow these guidelines to keep the token system reliable."
      >
        <DoDont
          dos={[
            {
              title: "Reference tokens, not raw values",
              description: "Always use a token instead of a hardcoded hex, pixel, or millisecond value.",
            },
            {
              title: "Keep naming consistent",
              description: "Follow the category-property-step pattern for every new token.",
            },
            {
              title: "Update at the token level",
              description: "Change a token once and let every component that uses it update together.",
            },
          ]}
          donts={[
            {
              title: "Don't create one-off values",
              description: "Avoid arbitrary values that don't map to an existing token.",
            },
            {
              title: "Don't skip the semantic layer",
              description: "Referencing a primitive directly in a component makes future theming harder.",
            },
            {
              title: "Don't duplicate tokens",
              description: "Check existing categories before adding a new token with the same purpose.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key token principles"
      >
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Tokens are the single source of truth for repeated design decisions.</li>
            <li>✓ Primitive → Semantic → Component is the intended reference order.</li>
            <li>✓ Naming stays predictable across every category.</li>
            <li>✓ Every category — Colors, Typography, Spacing, Radius, Shadow, Motion — follows the same structure.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}