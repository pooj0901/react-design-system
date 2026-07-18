import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";

export function ShadowPage() {
  return (
    <div className="space-y-16">

      <PageHeader
        badge="Design Tokens"
        title="Shadow"
        description="Shadow tokens create depth, establish elevation and improve the visual hierarchy of interface elements."
      />

      <Section
  title="Overview"
  description="Shadows indicate elevation and help users understand the relationship between interface elements."
>
  <div className="grid gap-6 md:grid-cols-3">

   
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md">
      <div className="mb-6 rounded-xl bg-slate-100 p-8">
        <div className="h-24 rounded-xl bg-white shadow-sm"></div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        Low Elevation
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Used for inputs, text fields, and subtle containers where only a small amount of elevation is needed.
      </p>
    </div>

   
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md">
      <div className="mb-6 rounded-xl bg-slate-100 p-8">
        <div className="h-24 rounded-xl bg-white shadow-md"></div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        Medium Elevation
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Used for cards, dropdown menus, and floating panels that should stand out from the page.
      </p>
    </div>

   
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md">
      <div className="mb-6 rounded-xl bg-slate-100 p-8">
        <div className="h-24 rounded-xl bg-white shadow-xl"></div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        High Elevation
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Used for modal dialogs, popovers, and overlays that require the highest visual emphasis.
      </p>
    </div>

  </div>
</Section>

      <Section
  title="Shadow Scale"
  description="Available elevation tokens used throughout the design system."
>
  <div className="grid gap-6 md:grid-cols-5">

    <TokenCard
      name="Shadow XS"
      value="shadow-xs"
      description="Inputs"
      previewClassName="h-40 bg-slate-100"
      preview={
  <div className="w-40 rounded-xl bg-white p-5 shadow-xs">
    <div className="h-3 w-20 rounded bg-slate-200" />
    <div className="mt-3 h-2 rounded bg-slate-100" />
    <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
  </div>
}
    />

    <TokenCard
      name="Shadow SM"
      value="shadow"
      description="Buttons"
      previewClassName="h-40 bg-slate-100"
      preview={
  <div className="w-40 rounded-xl bg-white p-5 shadow">
    <div className="h-3 w-20 rounded bg-slate-200" />
    <div className="mt-3 h-2 rounded bg-slate-100" />
    <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
  </div>
}
    />

    <TokenCard
      name="Shadow MD"
      value="shadow-md"
      description="Cards"
      previewClassName="h-40 bg-slate-100"
     preview={
  <div className="w-40 rounded-xl bg-white p-5 shadow-md">
    <div className="h-3 w-20 rounded bg-slate-200" />
    <div className="mt-3 h-2 rounded bg-slate-100" />
    <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
  </div>
}
    />

    <TokenCard
      name="Shadow LG"
      value="shadow-lg"
      description="Dropdown"
      previewClassName="h-40 bg-slate-100"
      preview={
  <div className="w-40 rounded-xl bg-white p-5 shadow-lg">
    <div className="h-3 w-20 rounded bg-slate-200" />
    <div className="mt-3 h-2 rounded bg-slate-100" />
    <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
  </div>
}
    />

    <TokenCard
      name="Shadow XL"
      value="shadow-xl"
      description="Modal"
      previewClassName="h-40 bg-slate-100"
      preview={
  <div className="w-40 rounded-xl bg-white p-5 shadow-xl">
    <div className="h-3 w-20 rounded bg-slate-200" />
    <div className="mt-3 h-2 rounded bg-slate-100" />
    <div className="mt-2 h-2 w-4/5 rounded bg-slate-100" />
  </div>
}
    />

  </div>
</Section>
            <Section
  title="Elevation Examples"
  description="Different shadow levels communicate hierarchy and depth across the interface."
>
  <div className="grid gap-6 lg:grid-cols-3">

   
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-5 text-lg font-semibold text-slate-900">
        Input Field
      </h3>

      <div className="rounded-xl bg-slate-100 p-8">
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
          Enter your email
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Low elevation keeps form controls subtle while maintaining clear separation from the background.
      </p>
    </div>

 
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-5 text-lg font-semibold text-slate-900">
        Card Component
      </h3>

      <div className="rounded-xl bg-slate-100 p-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h4 className="font-medium text-slate-900">
            Project Card
          </h4>

          <p className="mt-2 text-sm text-slate-500">
            Used to display grouped content.
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Medium elevation helps cards stand apart from the page while remaining visually balanced.
      </p>
    </div>

  
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-5 text-lg font-semibold text-slate-900">
        Modal Window
      </h3>

      <div className="rounded-xl bg-slate-100 p-8">
        <div className="rounded-xl bg-white p-6 shadow-xl">
          <h4 className="font-medium text-slate-900">
            Delete Project
          </h4>

          <p className="mt-2 text-sm text-slate-500">
            This action cannot be undone.
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        High elevation ensures dialogs and overlays remain the primary focus of the interface.
      </p>
    </div>

  </div>
</Section>

      <Section
        title="Common Usage"
        description="Recommended shadow tokens for common interface elements."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-4 font-semibold text-slate-900">
              Recommended
            </h3>

            <ul className="space-y-3 text-sm leading-7 text-slate-600">

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Inputs → shadow-sm
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Buttons → shadow
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Cards → shadow-md
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Dropdown → shadow-lg
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Modal → shadow-xl
              </li>

            </ul>

          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-4 font-semibold text-slate-900">
              Why Shadows?
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              Shadows provide depth and help users
              understand which elements are interactive,
              layered or temporarily floating above the interface.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Shadow Reference"
        description="Recommended usage for each elevation token."
      >

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

        <table className="w-full table-fixed">
  <thead className="bg-slate-50">
    <tr>
      <th className="w-48 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
        Token
      </th>

      <th className="w-44 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
        Tailwind
      </th>

      <th className="w-[520px] px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
        CSS Value
      </th>

      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
        Recommended Usage
      </th>
    </tr>
  </thead>

 <tbody className="bg-white">
  {[
    [
      "shadow-sm",
      "shadow-sm",
      "0 1px 2px rgba(0, 0, 0, 0.05)",
      "Cards, Inputs",
    ],
    [
      "shadow-default",
      "shadow",
      "0 1px 3px rgba(0, 0, 0, 0.08)",
      "Buttons",
    ],
    [
      "shadow-md",
      "shadow-md",
      "0 4px 6px rgba(0, 0, 0, 0.10)",
      "Card Hover",
    ],
    [
      "shadow-lg",
      "shadow-lg",
      "0 10px 15px rgba(0, 0, 0, 0.15)",
      "Dropdowns",
    ],
    [
      "shadow-xl",
      "shadow-xl",
      "0 20px 25px rgba(0, 0, 0, 0.20)",
      "Modals",
    ],
  ].map(([token, value, css, usage]) => (
    <tr
      key={token}
      className="border-t border-slate-100 hover:bg-slate-50"
    >
      <td className="px-6 py-4 font-medium text-slate-900">
        {token}
      </td>

      <td className="px-6 py-4">
        <code className="text-slate-600">{value}</code>
      </td>

      <td className="px-6 py-4">
        <code className="font-mono text-xs text-slate-600">
          {css}
        </code>
      </td>

      <td className="px-6 py-4 text-slate-600">
        {usage}
      </td>
    </tr>
  ))}
</tbody></table></div></Section>

            <Section
        title="Token Reference"
        description="Shadow tokens exposed through CSS variables and Tailwind utilities."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              CSS Variables
            </h3>

            <CodeBlock
              language="css"
              code={`:root {
  --shadow-xs: 0 1px 2px rgba(15,23,42,0.05);
  --shadow-sm: 0 1px 3px rgba(15,23,42,0.10);
  --shadow-md: 0 4px 6px rgba(15,23,42,0.10);
  --shadow-lg: 0 10px 15px rgba(15,23,42,0.12);
  --shadow-xl: 0 20px 25px rgba(15,23,42,0.15);
}`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Tailwind Utilities
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Card className="shadow-md">
  Content
</Card>

<Dropdown className="shadow-lg" />

<Modal className="shadow-xl" />`}
            />

          </div>

        </div>

      </Section>

      

      <Section
        title="Accessibility"
        description="Shadows should support usability, not replace contrast or clear boundaries."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Hierarchy
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use stronger shadows only for elements
              that should visually appear above others.
            </p>

          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Subtlety
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Shadows should enhance depth without
              becoming distracting or overly dramatic.
            </p>

          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Contrast
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Never rely on shadows alone. Use borders,
              spacing and color contrast where needed.
            </p>

          </div>

        </div>

      </Section>
            <Section
        title="Do & Don't"
        description="Follow these guidelines to maintain a consistent elevation system."
      >

        <DoDont
          dos={[
            {
              title: "Use elevation purposefully",
              description:
                "Increase shadow only when an element should appear above surrounding content.",
            },
            {
              title: "Keep shadows consistent",
              description:
                "Use the same shadow token for similar components across the interface.",
            },
            {
              title: "Combine with spacing",
              description:
                "Shadows work best when paired with adequate whitespace and clear layouts.",
            },
          ]}
          donts={[
            {
              title: "Don't overuse shadows",
              description:
                "Applying heavy shadows to every component reduces visual hierarchy.",
            },
            {
              title: "Don't mix arbitrary values",
              description:
                "Avoid custom box-shadow values that aren't part of the design system.",
            },
            {
              title: "Don't rely only on shadows",
              description:
                "Always combine shadows with borders, spacing and contrast where appropriate.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key shadow principles"
      >

        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">

          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>
              ✓ Use predefined elevation tokens.
            </li>

            <li>
              ✓ Increase elevation gradually.
            </li>

            <li>
              ✓ Use subtle shadows whenever possible.
            </li>

            <li>
              ✓ Reserve large shadows for overlays and modals.
            </li>

            <li>
              ✓ Keep elevation consistent across similar components.
            </li>

            <li>
              ✓ Never replace accessibility with shadows alone.
            </li>

          </ul>

        </div>

      </Section>

    </div>
  );
}