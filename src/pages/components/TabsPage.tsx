import { useState } from "react";
import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";
import { LayoutGrid } from "lucide-react";

interface DemoTabsProps {
  tabs: string[];
  variant?: "underline" | "pill";
}

function DemoTabs({ tabs, variant }: DemoTabsProps) {
  const [active, setActive] = useState<number>(0);

  return (
    <div>
      <div className={variant === "pill" ? "flex gap-2" : "flex gap-6 border-b border-slate-200"}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={
              variant === "pill"
                ? `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === i ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`
                : `border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
                    active === i ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"
                  }`
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4 rounded-[12px] border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        Content for <span className="font-medium text-slate-900">{tabs[active]}</span>
      </div>
    </div>
  );
}

export function TabsPage() {
  return (
    <div className="space-y-16">

      <PageHeader
        badge="Components"
        title="Tabs"
        description="Switch between related views within the same context, without navigating to a new page."
      />

      <Section title="Overview" description="Two visual treatments, one interaction model underneath.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">
              <LayoutGrid className="h-7 w-7 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">Underline & Pill</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Two variants — underline for dense UIs, pill for standalone tab bars.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-50 text-2xl">
              ⌨️
            </div>
            <h3 className="font-semibold text-slate-900">Keyboard Navigable</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Arrow keys move between tabs without requiring a Tab keypress per item.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
              🔗
            </div>
            <h3 className="font-semibold text-slate-900">One Panel at a Time</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Only the active tab's content renders — everything else stays hidden, not just visually collapsed.
            </p>
          </div>
        </div>
      </Section>

      <div className="grid gap-6 lg:grid-cols-2">
  <Section
    title="Underline Variant"
    description="Click a tab — this is a live, working example."
  >
    <DemoTabs
      variant="underline"
      tabs={["Overview", "Activity", "Settings", "Billing"]}
    />
  </Section>

  <Section
    title="Pill Variant"
    description="Same interaction, different visual treatment."
  >
    <DemoTabs
      variant="pill"
      tabs={["Daily", "Weekly", "Monthly"]}
    />
  </Section>
</div>

<Section
  title="Usage Guidelines"
  description="When to use tabs versus separate pages."
>
  <div className="grid gap-6 lg:grid-cols-2">
    <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>

      <ul className="space-y-3 text-sm leading-7 text-slate-600">
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          2–6 tabs per group — more becomes a nav menu
        </li>

        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          Underline → dense, data-heavy interfaces
        </li>

        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          Pill → standalone filters, time ranges
        </li>

        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          Related views only — same object, different facets
        </li>
      </ul>
    </div>

    <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-4 font-semibold text-slate-900">
        Tabs vs. Separate Pages
      </h3>

      <p className="text-sm leading-7 text-slate-600">
        If a user might want to bookmark, share, or open a view in a new tab,
        it should be a real route — not a Tabs panel. Tabs are for views that
        only make sense together.
      </p>
    </div>
  </div>
</Section>

      <Section title="API Reference" description="Props exposed by the Tabs component.">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Prop</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Default</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["tabs", "string[]", "required"],
                ["variant", "'underline' | 'pill'", "'underline'"],
                ["defaultIndex", "number", "0"],
                ["onChange", "(index: number) => void", "undefined"],
              ].map(([prop, type, def]) => (
                <tr key={prop} className="border-t border-slate-100 transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4"><code className="font-medium text-slate-900">{prop}</code></td>
                  <td className="px-6 py-4"><code className="text-slate-600">{type}</code></td>
                  <td className="px-6 py-4"><code className="text-slate-500">{def}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Token Refrence" description="Basic implementation.">
        <CodeBlock
          language="tsx"
          code={`<Tabs
  variant="underline"
  tabs={["Overview", "Activity", "Settings"]}
  onChange={(index) => setActiveTab(index)}
/>`}
        />
      </Section>

      <Section
        title="Accessibility"
        description="Tabs follow a well-defined WAI-ARIA pattern — deviating from it breaks keyboard navigation."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Correct Roles</h3>
            <p className="text-sm leading-6 text-slate-600">
              <code>role="tablist"</code> on the container, <code>"tab"</code> on each button, <code>"tabpanel"</code> on the content.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ Arrow Key Navigation</h3>
            <p className="text-sm leading-6 text-slate-600">
              Left/Right (or Up/Down for vertical tabs) should move focus between tabs directly.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ aria-selected</h3>
            <p className="text-sm leading-6 text-slate-600">
              The active tab needs <code>aria-selected="true"</code> — visual styling alone isn't enough.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Do & Don't" description="Follow these guidelines to keep tabs predictable and accessible.">
        <DoDont
          dos={[
            { title: "Use real tab/tablist/tabpanel roles", description: "Don't build tabs out of plain divs with click handlers alone." },
            { title: "Support arrow key navigation", description: "Follow the standard WAI-ARIA Tabs keyboard pattern." },
            { title: "Keep labels short", description: "One or two words per tab, not full sentences." },
          ]}
          donts={[
            { title: "Don't use tabs for a linear wizard", description: "Sequential steps need a stepper, not tabs a user can jump between." },
            { title: "Don't hide tab content in the DOM only visually", description: "Inactive panels should be removed from the accessibility tree." },
            { title: "Don't exceed 6–7 tabs", description: "Beyond that, use a dropdown or restructure the navigation." },
          ]}
        />
      </Section>

      <Section title="Summary" description="Key tabs principles">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Use for related views of the same object, not separate destinations.</li>
            <li>✓ Follow the WAI-ARIA tablist/tab/tabpanel pattern exactly.</li>
            <li>✓ Support arrow-key navigation between tabs.</li>
            <li>✓ Keep the count between 2 and 6.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}