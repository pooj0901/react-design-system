import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";
import { Info } from "lucide-react";

function DemoTooltip({ label, position }: { label: string; position: string }) {
  const posClasses = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
  }[position];

  return (
   <div className="group relative inline-flex">
  <button className="rounded-[12px] border border-slate-200 bg-white px-8 py-4 text-base font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md">
    Hover me
  </button>

  <div
    className={`pointer-events-none absolute z-10 whitespace-nowrap rounded-[12px] bg-slate-900 px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 ${posClasses}`}
  >
    {label}
  </div>
</div>
  );
}

export function TooltipPage() {
  return (
    <div className="space-y-16">

      <PageHeader
        badge="Components"
        title="Tooltip"
        description="A small contextual label that appears on hover or focus to explain an element without taking up permanent space."
      />

      <Section
        title="Overview"
        description="Tooltips supplement, they never replace, a visible label."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50">
              <Info className="h-7 w-7 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-slate-900">4 Placements</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Top, bottom, left, right — positioned to stay clear of the trigger.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-violet-50 text-2xl">
              ⏱
            </div>
            <h3 className="font-semibold text-slate-900">Hover & Focus</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Triggers on both mouse hover and keyboard focus — never on touch tap alone.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
              💬
            </div>
            <h3 className="font-semibold text-slate-900">Short Text Only</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              One short phrase. Longer explanations belong in a popover, not a tooltip.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Placements"
        description="Hover each button — these are live, working tooltips."
      >

        <div className="flex flex-wrap items-center justify-center gap-16 rounded-[12px] border border-slate-200 bg-slate-50 p-12">
          <DemoTooltip label="Tooltip on top" position="top" />
          <DemoTooltip label="Tooltip on right" position="right" />
          <DemoTooltip label="Tooltip on bottom" position="bottom" />
          <DemoTooltip label="Tooltip on left" position="left" />
        </div>

      </Section>

      <Section
        title="Usage Guidelines"
        description="When a tooltip helps, and when it just adds friction."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Icon-only buttons → explain the action</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Truncated text → show the full value</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Disabled controls → explain why disabled</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />Abbreviations → spell out the full term</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Why Not Always?</h3>
            <p className="text-sm leading-7 text-slate-600">
              Tooltips hide information by default — anything critical to completing a task
              shouldn't live only in a tooltip, since it's invisible until someone hovers.
            </p>
          </div>

        </div>
      </Section>

      <Section title="API Reference" description="Props exposed by the Tooltip component.">
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
                ["label", "string", "required"],
                ["position", "'top' | 'right' | 'bottom' | 'left'", "'top'"],
                ["delay", "number (ms)", "150"],
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
          code={`<Tooltip label="Delete this item" position="top">
  <IconButton icon={<Trash2 />} />
</Tooltip>`}
        />
      </Section>

      <Section
        title="Accessibility"
        description="Tooltips are one of the easiest components to accidentally make keyboard- and screen-reader-inaccessible."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Focus-Triggered Too</h3>
            <p className="text-sm leading-6 text-slate-600">
              Must appear on keyboard focus, not just mouse hover (WCAG 1.4.13).
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ Dismissible</h3>
            <p className="text-sm leading-6 text-slate-600">
              Escape key should dismiss the tooltip without moving focus off the trigger.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ Linked via ARIA</h3>
            <p className="text-sm leading-6 text-slate-600">
              Connect trigger and tooltip with <code>aria-describedby</code>, not visual proximity alone.
            </p>
          </div>

        </div>
      </Section>

      <Section title="Do & Don't" description="Follow these guidelines to keep tooltips genuinely helpful.">
        <DoDont
          dos={[
            { title: "Trigger on hover and focus", description: "Keyboard users need the same information mouse users get." },
            { title: "Keep it to one short phrase", description: "If it needs a sentence, it's not a tooltip anymore." },
            { title: "Position to avoid clipping", description: "Flip placement automatically near viewport edges." },
          ]}
          donts={[
            { title: "Don't hide essential information", description: "Required context shouldn't live only in a tooltip." },
            { title: "Don't rely on touch alone", description: "Touch has no hover state — provide a tap-triggered fallback." },
            { title: "Don't nest interactive content", description: "Tooltips shouldn't contain buttons or links." },
          ]}
        />
      </Section>

      <Section title="Summary" description="Key tooltip principles">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Trigger on hover and keyboard focus, always both.</li>
            <li>✓ One short phrase — never essential content.</li>
            <li>✓ Escape dismisses without losing focus.</li>
            <li>✓ Linked to its trigger with aria-describedby.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}