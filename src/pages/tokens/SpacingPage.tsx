import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";


function MockListItem({
  label,
  sublabel,
  color,
}: {
  label: string;
  sublabel: string;
  color: "blue" | "green" | "purple";
}) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="flex h-14 items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-semibold ${colorMap[color]}`}
      >
        {label.charAt(0)}
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-slate-700">
          {label}
        </p>
        <p className="truncate text-xs text-slate-400">
          {sublabel}
        </p>
      </div>
    </div>
  );
}


function GapAnnotation({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-2 pl-1">
      <div className="h-full w-px border-l border-dashed border-slate-300" />
      <span className="text-[11px] font-medium text-slate-400">
        {label}
      </span>
    </div>
  );
}

export function SpacingPage() {
  return (
    <div className="space-y-12">

      <PageHeader
        badge="Design Tokens"
        title="Spacing"
        description="Spacing creates rhythm, improves readability and establishes consistent layouts throughout the design system."
      />

      <Section
        title="Overview"
        description="Our spacing system is based on an 8-point grid with smaller increments for fine adjustments."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <div className="mb-5 flex h-16 items-center justify-center rounded-lg bg-blue-100">
              <div className="h-2 w-10 rounded bg-blue-600"></div>
            </div>

            <h3 className="font-semibold">
              Consistency
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Uniform spacing creates predictable
              layouts across every screen.
            </p>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <div className="mb-5 flex h-16 items-center justify-center rounded-lg bg-green-100">
              <div className="h-8 w-8 rounded border-4 border-green-600"></div>
            </div>

            <h3 className="font-semibold">
              Alignment
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Proper spacing helps align related
              content and improves scanning.
            </p>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <div className="mb-5 flex h-16 items-center justify-center rounded-lg bg-purple-100">
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded bg-purple-500"></div>
                <div className="h-6 w-6 rounded bg-purple-500"></div>
              </div>
            </div>

            <h3 className="font-semibold">
              Rhythm
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Consistent spacing establishes visual
              rhythm throughout the interface.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Spacing Scale"
        description="Use predefined spacing tokens instead of arbitrary values."
      >

        <div className="grid gap-6 md:grid-cols-5">

          <TokenCard
            name="Space 1"
            value="4px"
            description="Extra Small"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-1 w-10 rounded bg-blue-600"></div>
              </div>
            }
          />

          <TokenCard
            name="Space 2"
            value="8px"
            description="Small"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-2 w-10 rounded bg-blue-600"></div>
              </div>
            }
          />

          <TokenCard
            name="Space 3"
            value="12px"
            description="Compact"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-3 w-10 rounded bg-blue-600"></div>
              </div>
            }
          />

          <TokenCard
            name="Space 4"
            value="16px"
            description="Default"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-4 w-10 rounded bg-blue-600"></div>
              </div>
            }
          />

          <TokenCard
            name="Space 5"
            value="20px"
            description="Comfortable"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-5 w-10 rounded bg-blue-600"></div>
              </div>
            }
          />
                    <TokenCard
            name="Space 6"
            value="24px"
            description="Section spacing"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-6 w-10 rounded bg-blue-600" />
              </div>
            }
          />

          <TokenCard
            name="Space 8"
            value="32px"
            description="Large spacing"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-8 w-10 rounded bg-blue-600" />
              </div>
            }
          />

          <TokenCard
            name="Space 10"
            value="40px"
            description="Page spacing"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 rounded bg-blue-600" />
              </div>
            }
          />

          <TokenCard
            name="Space 12"
            value="48px"
            description="Large sections"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-12 w-10 rounded bg-blue-600" />
              </div>
            }
          />

          <TokenCard
            name="Space 16"
            value="64px"
            description="Page layout"
            preview={
              <div className="flex items-center justify-center">
                <div className="h-16 w-10 rounded bg-blue-600" />
              </div>
            }
          />

        </div>

      </Section>

      <Section
        title="Vertical Spacing"
        description="Maintain consistent spacing between related content."
      >

        <div className="space-y-10">

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h3 className="text-2xl font-semibold">
              Dashboard Overview
            </h3>

            <p className="mt-4 text-slate-600">
              Consistent spacing improves readability
              and creates clear visual hierarchy.
            </p>

            <button className="mt-8 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">
              Get Started
            </button>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h3 className="mb-6 text-lg font-semibold">
              Stacked Elements
            </h3>

            <div className="flex flex-col">

              <MockListItem
                label="Revenue"
                sublabel="$48,200 this month"
                color="blue"
              />

              <GapAnnotation label="space-4 · 16px gap" />

              <MockListItem
                label="Active Users"
                sublabel="2,340 online now"
                color="green"
              />

              <GapAnnotation label="space-4 · 16px gap" />

              <MockListItem
                label="Conversion Rate"
                sublabel="4.2% this week"
                color="purple"
              />

            </div>

          </div>

        </div>

      </Section>

      <Section
        title="Grid Spacing"
        description="Use consistent gaps between cards and layout elements."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              New Project
            </p>
            <p className="text-xs text-slate-400">
              Start from scratch
            </p>
          </div>

          <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5.586l-2-2H4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              Team Folder
            </p>
            <p className="text-xs text-slate-400">
              12 shared files
            </p>
          </div>

          <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              Templates
            </p>
            <p className="text-xs text-slate-400">
              8 available
            </p>
          </div>

        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          space-6 · 24px gap between grid items
        </p>

      </Section>
            <Section
        title="Padding vs Margin"
        description="Understand when to use padding and margin to create consistent layouts."
      >

        <div className="grid gap-8 lg:grid-cols-2">

        

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <h3 className="mb-6 text-lg font-semibold">
              Padding
            </h3>

            <div className="rounded-[12px] bg-blue-100 p-8">

              <div className="rounded-[8px] bg-blue-600 p-6 text-center font-medium text-white">
                Content
              </div>

            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              Padding creates space inside a component,
              increasing breathing room between the content
              and its container.
            </p>

          </div>

      

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <h3 className="mb-6 text-lg font-semibold">
              Margin
            </h3>

            <div className="space-y-6 rounded-[12px] bg-slate-100 p-6">

              <div className="rounded-[8px] bg-blue-600 p-4 text-center text-white">
                Card One
              </div>

              <div className="rounded-[8px] bg-blue-600 p-4 text-center text-white">
                Card Two
              </div>

            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              Margin creates space outside an element,
              separating it from surrounding components.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Responsive Spacing"
        description="Spacing should scale appropriately across different screen sizes."
      >

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h3 className="mb-6 text-lg font-semibold">
              Desktop
            </h3>

            <div className="flex flex-col">

              <MockListItem
                label="Overview"
                sublabel="Summary panel"
                color="blue"
              />

              <GapAnnotation label="space-8 · 32px gap" />

              <MockListItem
                label="Analytics"
                sublabel="Detailed metrics"
                color="green"
              />

              <GapAnnotation label="space-8 · 32px gap" />

              <MockListItem
                label="Reports"
                sublabel="Export & share"
                color="purple"
              />

            </div>

            <p className="mt-6 text-sm text-slate-600">
              Larger layouts can afford more generous spacing.
            </p>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h3 className="mb-6 text-lg font-semibold">
              Mobile
            </h3>

            <div className="flex flex-col">

              <MockListItem
                label="Overview"
                sublabel="Summary panel"
                color="blue"
              />

              <GapAnnotation label="space-4 · 16px gap" />

              <MockListItem
                label="Analytics"
                sublabel="Detailed metrics"
                color="green"
              />

              <GapAnnotation label="space-4 · 16px gap" />

              <MockListItem
                label="Reports"
                sublabel="Export & share"
                color="purple"
              />

            </div>

            <p className="mt-6 text-sm text-slate-600">
              Reduce spacing on smaller screens while maintaining readability.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Layout Examples"
        description="Examples of spacing applied to common layouts."
      >

        <div className="space-y-8">

          <div className="rounded-[12px] border border-slate-200 bg-white p-10">

            <h3 className="text-2xl font-semibold">
              Settings
            </h3>

            <p className="mt-4 text-slate-600">
              Manage your account preferences.
            </p>

            <div className="mt-8 grid gap-6">

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Full name
                </label>
                <div className="flex h-11 items-center rounded-[8px] border border-slate-300 bg-white px-3 text-sm text-slate-400">
                  Jane Cooper
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Email address
                </label>
                <div className="flex h-11 items-center rounded-[8px] border border-slate-300 bg-white px-3 text-sm text-slate-400">
                  jane@company.com
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Password
                </label>
                <div className="flex h-11 items-center rounded-[8px] border border-slate-300 bg-white px-3 text-sm text-slate-400">
                  ••••••••••
                </div>
              </div>

            </div>

            <button className="mt-10 rounded-[12px] bg-blue-600 px-5 py-3 font-medium text-white">
              Save Changes
            </button>

          </div>

        </div>

      </Section>
            <Section
        title="Token Reference"
        description="Spacing tokens exposed through CSS variables and Tailwind utilities."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              CSS Variables
            </h3>

            <CodeBlock
              language="css"
              code={`:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Tailwind Utilities
            </h3>

            <CodeBlock
              language="tsx"
              code={`<div className="p-4">
  Card Content
</div>

<div className="space-y-6">
  <Card />
  <Card />
</div>

<section className="py-12">
  ...
</section>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Spacing Token Reference"
        description="Recommended usage for each spacing token."
      >

        <div className="overflow-hidden rounded-[24px] border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Token
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Value
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Usage
                </th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Space 1", "4px", "Fine adjustments"],
                ["Space 2", "8px", "Small gaps"],
                ["Space 3", "12px", "Compact layouts"],
                ["Space 4", "16px", "Default spacing"],
                ["Space 5", "20px", "Cards"],
                ["Space 6", "24px", "Sections"],
                ["Space 8", "32px", "Large layouts"],
                ["Space 10", "40px", "Page groups"],
                ["Space 12", "48px", "Major sections"],
                ["Space 16", "64px", "Page padding"],
              ].map(([token, value, usage]) => (

                <tr
                  key={token}
                  className="border-t border-slate-200"
                >

                  <td className="px-6 py-4 font-medium">
                    {token}
                  </td>

                  <td className="px-6 py-4">
                    <code>{value}</code>
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {usage}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Spacing plays an important role in usability and readability."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Readability
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Proper spacing improves reading speed and
              reduces cognitive load.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Touch Targets
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Leave enough spacing around interactive
              elements for comfortable touch interaction.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Visual Rhythm
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Consistent spacing establishes rhythm and
              improves scanability throughout the interface.
            </p>

          </div>

        </div>

      </Section>
            <Section
        title="Do & Don't"
        description="Follow these guidelines to maintain a consistent spacing system."
      >
        <DoDont
          dos={[
            {
              title: "Use spacing tokens",
              description:
                "Always use predefined spacing values instead of arbitrary pixel values.",
            },
            {
              title: "Maintain consistent rhythm",
              description:
                "Keep equal spacing between related elements to improve scanability.",
            },
            {
              title: "Increase spacing between sections",
              description:
                "Use larger spacing values to separate unrelated content and smaller values within groups.",
            },
          ]}
          donts={[
            {
              title: "Don't use random spacing",
              description:
                "Avoid mixing custom spacing values that aren't part of the design system.",
            },
            {
              title: "Don't crowd components",
              description:
                "Leave sufficient whitespace around cards, forms and interactive elements.",
            },
            {
              title: "Don't overuse whitespace",
              description:
                "Excessive spacing can disconnect related content and make layouts feel sparse.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key spacing principles"
      >

        <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>
              ✓ Use the predefined spacing scale.
            </li>

            <li>
              ✓ Prefer 8px increments for layouts.
            </li>

            <li>
              ✓ Keep spacing consistent across components.
            </li>

            <li>
              ✓ Use padding for internal spacing and margin for external spacing.
            </li>

            <li>
              ✓ Increase spacing to create clear visual hierarchy.
            </li>

            <li>
              ✓ Use spacing tokens instead of hard-coded pixel values.
            </li>

          </ul>

        </div>

      </Section>

    </div>
  );
}