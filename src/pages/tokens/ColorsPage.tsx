import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";


function PaletteGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {children}
      </div>
      <div className="mt-8 border-t border-slate-200" />
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="space-y-12">

      <PageHeader
        badge="Design Tokens"
        title="Colors"
        description="Token-based system — never use raw hex values in components. Three groups: primary brand blues, neutral grays, and semantic status colors."
      />

      <Section
        title="Overview"
        description="Our color system is built around three categories of tokens."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="mb-4 h-12 w-12 rounded-[12px] bg-blue-600" />

            <h3 className="text-lg font-semibold">
              Primary
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Brand colors used for primary actions,
              links and interactive elements.
            </p>
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="mb-4 h-12 w-12 rounded-[12px] bg-slate-400" />

            <h3 className="text-lg font-semibold">
              Neutral
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Used for text, borders, surfaces,
              backgrounds and layout structure.
            </p>
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <div className="mb-4 flex gap-2">
              <div className="h-12 w-12 rounded-[12px] bg-green-500" />
              <div className="h-12 w-12 rounded-[12px] bg-red-500" />
            </div>

            <h3 className="text-lg font-semibold">
              Semantic
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Success, warning, error and info
              colors communicate system status.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Primary Palette"
        description="The primary palette represents the brand identity."
      >
        <PaletteGroup label="PRIMARY RAMP">

          <TokenCard
            name="primary-50"
            value="#EFF6FF"
            description="Focus ring bg"
          />

          <TokenCard
            name="primary-100"
            value="#DBEAFE"
            description="Subtle backgrounds"
          />

          <TokenCard
            name="primary-200"
            value="#BFDBFE"
            description="Borders"
          />

          <TokenCard
            name="primary-300"
            value="#93C5FD"
            description="Disabled states"
          />

<TokenCard
            name="primary-400"
            value="#60A5FA"
            description="Secondary actions"
          />

          <TokenCard
            name="primary-500"
            value="#3B82F6"
            description="Focus ring"
          />

          <TokenCard
            name="primary-600"
            value="#2563EB"
            description="Default state"
            highlight
          />

          <TokenCard
            name="primary-700"
            value="#1D4ED8"
            description="Hover"
          />

          <TokenCard
            name="primary-800"
            value="#1E40AF"
            description="Dark backgrounds"
          />

          <TokenCard
            name="primary-900"
            value="#1E3A8A"
            description="Pressed / highest emphasis"
          />

        </PaletteGroup>

      </Section>

      <Section
        title="Neutral Palette"
        description="Neutral colors provide the foundation for typography, surfaces and borders."
      >
        <PaletteGroup label="NEUTRAL GRAYS">

          <TokenCard
            name="gray-50"
            value="#F8FAFC"
            description="bg-subtle · Page background"
          />

          <TokenCard
            name="gray-100"
            value="#F1F5F9"
            description="bg-muted · Surface"
          />

          <TokenCard
            name="gray-200"
            value="#E2E8F0"
            description="Borders · Subtle border"
          />

          <TokenCard
            name="gray-300"
            value="#CBD5E1"
            description="Divider"
          />

          <TokenCard
            name="gray-400"
            value="#94A3B8"
            description="Text secondary · Placeholder"
          />

         <TokenCard
  name="gray-500"
  value="#6B7280"
  description="Secondary text · Icons · Labels"
/>

<TokenCard
  name="gray-600"
  value="#4B5563"
  description="Body text · Form labels"
/>

<TokenCard
  name="gray-700"
  value="#374151"
  description="Primary body text · Navigation"
/>

<TokenCard
  name="gray-800"
  value="#1F2937"
  description="Headings · High emphasis"
/>

<TokenCard
  name="gray-900"
  value="#111827"
  description="Display text · Maximum contrast"
/>

        </PaletteGroup>

      </Section>

      <Section
        title="Semantic Colors"
        description="Semantic colors communicate feedback and status throughout the interface."
      >
        <PaletteGroup label="SEMANTIC COLORS">

          <TokenCard
            name="success-500"
            value="#10B981"
            description="Active, saved · Successful actions"
          />

          <TokenCard
            name="warning-500"
            value="#F59E0B"
            description="Pending, caution · Warnings"
          />

          <TokenCard
            name="danger-500"
            value="#EF4444"
            description="Error, delete · Errors & destructive actions"
          />

          <TokenCard
            name="info-500"
            value="#3B82F6"
            description="Informational"
          />

        </PaletteGroup>

      </Section>

      <Section
        title="Usage Guidelines"
        description="Use colors consistently to create clear visual hierarchy and improve usability."
      >
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Primary Colors
            </h3>

            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li>• Primary buttons</li>
              <li>• Active navigation</li>
              <li>• Links</li>
              <li>• Focus states</li>
              <li>• Selected items</li>
            </ul>
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Neutral Colors
            </h3>

            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li>• Backgrounds</li>
              <li>• Cards</li>
              <li>• Borders</li>
              <li>• Typography</li>
              <li>• Dividers</li>
            </ul>
          </div>

        </div>
      </Section>

      <Section
        title="Accessibility"
        description="Colors should always maintain sufficient contrast for readability."
      >

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Contrast
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Maintain a minimum contrast ratio of
              <strong> 4.5:1 </strong>
              for normal text and
              <strong> 3:1 </strong>
              for large text.
            </p>
          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Semantic Meaning
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Don't rely on color alone. Always combine
              colors with icons, labels or helper text.
            </p>
          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">
            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Consistency
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Every semantic color should represent
              the same meaning across the entire
              application.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Examples"
        description="Example usage of semantic colors in common UI elements."
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <button className="rounded-[12px] bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Primary Button
            </button>

            <p className="mt-5 text-sm text-slate-600">
              Use the primary color for the most important
              call-to-action on a page.
            </p>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3 rounded-[12px] border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
  <svg
    className="h-5 w-5 shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0L4.296 10.21a1 1 0 111.415-1.414l2.921 2.921 6.543-6.543a1 1 0 011.415 0z"
      clipRule="evenodd"
    />
  </svg>

  Payment completed successfully.
</div>

<div className="mt-4 flex items-center gap-3 rounded-[12px] border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
  <svg
    className="h-5 w-5 shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
      clipRule="evenodd"
    />
  </svg>

  Something went wrong.
</div>
          </div>

        </div>

      </Section>

      <Section
        title="Token Reference"
        description="Reference values for CSS variables and Tailwind utility classes."
      >
        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              CSS Variables
            </h3>

            <CodeBlock
              language="css"
              code={`:root {
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Tailwind Classes
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button className="bg-blue-600 hover:bg-blue-700">
  Continue
</Button>

<div className="border border-slate-200">
  Card
</div>

<p className="text-slate-600">
  Body text
</p>`}
            />
          </div>

        </div>
      </Section>

      <Section
        title="Color Scale"
        description="Recommended usage for each step of the primary palette."
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
                ["50", "#EFF6FF", "Background tint"],
                ["100", "#DBEAFE", "Subtle backgrounds"],
                ["200", "#BFDBFE", "Borders"],
                ["300", "#93C5FD", "Disabled"],
                ["400", "#60A5FA", "Secondary"],
                ["500", "#3B82F6", "Primary"],
                ["600", "#2563EB", "Hover"],
                ["700", "#1D4ED8", "Pressed"],
                ["800", "#1E40AF", "Dark UI"],
                ["900", "#1E3A8A", "Highest emphasis"],
              ].map(([name, value, usage]) => (
                <tr
                  key={name}
                  className="border-t border-slate-200"
                >
                  <td className="px-6 py-4 font-medium">
                    Primary {name}
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
  title="Do & Don't"
  description="Best practices for applying color tokens consistently across the interface."
>
  <DoDont
    dos={[
      {
        title: "Use semantic colors",
        description:
          "Apply success, warning, and error colors to communicate status and feedback consistently.",
      },
      {
        title: "Maintain sufficient contrast",
        description:
          "Ensure text and UI elements have enough contrast to remain readable and accessible.",
      },
      {
        title: "Use color tokens consistently",
        description:
          "Always use predefined design tokens instead of hardcoded color values.",
      },
    ]}
    donts={[
      {
        title: "Don't rely only on color",
        description:
          "Pair colors with icons, labels, or text so information is accessible to everyone.",
      },
      {
        title: "Don't introduce random colors",
        description:
          "Avoid using custom hex values that aren't part of the design system.",
      },
      {
        title: "Don't overuse accent colors",
        description:
          "Reserve primary and semantic colors for important actions and meaningful emphasis.",
      },
    ]}
  />
</Section>

      <Section
        title="Summary"
        description="Key takeaways"
      >
       <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Use design tokens instead of hard-coded colors.</li>
            <li>✓ Maintain accessibility with sufficient contrast.</li>
            <li>✓ Use semantic colors only for their intended purpose.</li>
            <li>✓ Keep the color palette consistent across all components.</li>
            <li>✓ Follow the documented color scale for predictable UI.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}