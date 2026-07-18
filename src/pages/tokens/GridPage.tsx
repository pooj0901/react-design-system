import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";

export function GridPage() {
  return (
    <div className="space-y-16">

      <PageHeader
        badge="Design Tokens"
        title="Grid"
        description="A 12-column responsive grid with defined breakpoints keeps layouts consistent across every screen size."
      />

      <Section
        title="Overview"
        description="The grid system is built from three primitives — columns, breakpoints and gutters."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 grid h-16 grid-cols-12 gap-1 rounded-lg bg-slate-50 p-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="rounded-sm bg-blue-500/40" />
              ))}
            </div>
            <h3 className="font-semibold text-slate-900">Columns</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A 12-column grid that content spans and aligns against.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 items-center justify-center rounded-lg bg-slate-50">
              <span className="font-mono text-xs text-slate-500 sm:hidden">&lt; 640px</span>
              <span className="hidden font-mono text-xs text-slate-500 sm:inline md:hidden">sm · 640px</span>
              <span className="hidden font-mono text-xs text-slate-500 md:inline lg:hidden">md · 768px</span>
              <span className="hidden font-mono text-xs text-slate-500 lg:inline xl:hidden">lg · 1024px</span>
              <span className="hidden font-mono text-xs text-slate-500 xl:inline 2xl:hidden">xl · 1280px</span>
              <span className="hidden font-mono text-xs text-slate-500 2xl:inline">2xl · 1536px</span>
            </div>
            <h3 className="font-semibold text-slate-900">Breakpoints</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Resize the window — this label updates live with your current breakpoint.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-16 items-center justify-center gap-2 rounded-lg bg-slate-50 p-2">
              <div className="h-full w-8 rounded-sm bg-emerald-400/50" />
              <div className="h-full w-8 rounded-sm bg-emerald-400/50" />
              <div className="h-full w-8 rounded-sm bg-emerald-400/50" />
            </div>
            <h3 className="font-semibold text-slate-900">Gutters</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fixed spacing between columns that scales with layout density.
            </p>
            <p className="mt-2 font-mono text-[11px] text-slate-400">gap-6 · 24px</p>
          </div>

        </div>

      </Section>

      <Section
        title="12-Column Grid"
        description="Every layout aligns to this base structure. Column spans compose from here."
      >

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex h-14 items-center justify-center rounded-lg bg-blue-50 font-mono text-[11px] text-blue-600"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            This is the base grid every layout on this page aligns to — the same 12 columns
            you'll see the sidebar and cards span against in the{" "}
            <span className="font-medium text-slate-700">Real-World Example</span> below.
          </p>
        </div>

      </Section>

      <Section
        title="Breakpoint Scale"
        description="Available responsive breakpoints, matching Tailwind's default scale."
      >

        <div className="grid gap-5 md:grid-cols-5">

          <TokenCard
            name="SM"
            value="640px"
            description="Mobile landscape"
            preview={<span className="font-mono text-xs text-slate-500">sm:</span>}
          />

          <TokenCard
            name="MD"
            value="768px"
            description="Tablet"
            preview={<span className="font-mono text-xs text-slate-500">md:</span>}
          />

          <TokenCard
            name="LG"
            value="1024px"
            description="Laptop"
            highlight
            preview={<span className="font-mono text-xs text-slate-500">lg:</span>}
          />

          <TokenCard
            name="XL"
            value="1280px"
            description="Desktop"
            preview={<span className="font-mono text-xs text-slate-500">xl:</span>}
          />

          <TokenCard
            name="2XL"
            value="1536px"
            description="Large desktop"
            preview={<span className="font-mono text-xs text-slate-500">2xl:</span>}
          />

        </div>

      </Section>

      <Section
        title="Container Widths"
        description="Maximum content width at each breakpoint — separate from breakpoints themselves. A breakpoint marks when the layout changes; a container width caps how wide content grows once it does."
      >

        <div className="grid gap-5 md:grid-cols-5">

          <TokenCard
            name="Container SM"
            value="640px"
            description="Max width at sm"
            preview={<div className="h-2 w-8 rounded-full bg-blue-500" />}
          />

          <TokenCard
            name="Container MD"
            value="768px"
            description="Max width at md"
            preview={<div className="h-2 w-10 rounded-full bg-blue-500" />}
          />

          <TokenCard
            name="Container LG"
            value="1024px"
            description="Max width at lg"
            highlight
            preview={<div className="h-2 w-12 rounded-full bg-blue-500" />}
          />

          <TokenCard
            name="Container XL"
            value="1280px"
            description="Max width at xl"
            preview={<div className="h-2 w-14 rounded-full bg-blue-500" />}
          />

          <TokenCard
            name="Container 2XL"
            value="1536px"
            description="Max width at 2xl"
            preview={<div className="h-2 w-16 rounded-full bg-blue-500" />}
          />

        </div>

      </Section>

      <Section
        title="Responsive Example"
        description="This card grid reflows live from 1 to 3 columns as the breakpoint changes."
      >

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Card One", "Card Two", "Card Three"].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-sm font-medium text-slate-900">{label}</p>
              <p className="mt-1 font-mono text-[11px] text-slate-400">
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Real-World Example"
        description="A dashboard layout shown on mobile and desktop, so you can see how the same regions map to different column spans at each breakpoint."
      >

        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-start">

        
          <div className="flex flex-col items-center">

            <div
              className="relative w-[300px] overflow-hidden rounded-[44px] border-[10px] border-slate-900 bg-slate-900 shadow-2xl"
              style={{ aspectRatio: "9 / 19.5" }}
            >

           
              <div className="absolute -left-[10px] top-24 h-8 w-[3px] rounded-l bg-slate-700" />
              <div className="absolute -left-[10px] top-36 h-12 w-[3px] rounded-l bg-slate-700" />
              <div className="absolute -right-[10px] top-32 h-16 w-[3px] rounded-r bg-slate-700" />

            
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-slate-50">

             
                <div className="absolute left-1/2 top-0 z-30 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

               
                <div className="z-20 flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-slate-900">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span className="h-2 w-3 rounded-[2px] border border-slate-900" />
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden px-4 pb-4 pt-3">

               
                  <div className="pointer-events-none absolute inset-x-4 top-3 bottom-4 z-0 grid grid-cols-4 gap-1.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="rounded-sm bg-blue-500/10 ring-1 ring-blue-500/20" />
                    ))}
                  </div>

               
                  <div className="relative z-10 grid auto-rows-min grid-cols-4 gap-2">
                    <div className="col-span-4 rounded-md bg-slate-900 px-3 py-2 text-[10px] font-medium text-white">
                      Dashboard
                    </div>
                    <div className="col-span-4 rounded-md bg-slate-100 px-3 py-3 text-[10px] font-mono text-slate-500">
                      Sidebar — span 4 / 4
                    </div>
                    <div className="col-span-4 rounded-md bg-blue-50 px-3 py-4 text-[10px] font-mono text-blue-600">
                      Main content — span 4 / 4
                    </div>
                    {["Card A", "Card B"].map((c) => (
                      <div
                        key={c}
                        className="col-span-4 rounded-md border border-slate-200 bg-white px-3 py-3 text-[10px] text-slate-500"
                      >
                        {c} — span 4 / 4
                      </div>
                    ))}
                  </div>

                </div>

              </div>

            </div>

            <p className="mt-3 text-xs font-medium text-slate-500">Mobile · &lt; 640px</p>
            <p className="font-mono text-[11px] text-slate-400">4-column grid — everything spans all 4 columns</p>

          </div>

        
          <div className="flex flex-col items-center">

            <div
              className="mx-auto flex w-full max-w-[920px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
              style={{ aspectRatio: "16 / 10" }}
            >

          
              <div className="flex shrink-0 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 rounded bg-white px-3 py-1 font-mono text-[10px] text-slate-400">
                  app.example.com/dashboard
                </span>
              </div>

              <div className="relative flex-1 overflow-hidden">

             
                <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-12 gap-2 p-5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="rounded-sm bg-blue-500/10 ring-1 ring-blue-500/20" />
                  ))}
                </div>

               
                <div className="relative z-10 grid h-full grid-cols-12 grid-rows-[auto_1fr] items-stretch gap-2 p-5">

                  <div className="col-span-12 rounded-md bg-slate-900 px-4 py-2.5 text-xs font-medium text-white">
                    Dashboard
                  </div>

                  <div className="col-span-3 h-full rounded-md bg-slate-100 px-4 py-4 text-xs font-mono text-slate-500">
                    Sidebar — span 3 / 12
                  </div>

                  <div className="col-span-9 flex h-full flex-col gap-2">

                    <div className="rounded-md bg-blue-50 px-4 py-6 text-xs font-mono text-blue-600">
                      Main content — span 9 / 12
                    </div>

                    <div className="grid flex-1 grid-cols-3 gap-2">
                      {["Card A", "Card B", "Card C"].map((c) => (
                        <div
                          key={c}
                          className="flex min-h-[64px] items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-6 text-xs text-slate-500"
                        >
                          {c} — span 4 / 12
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <p className="mt-3 text-xs font-medium text-slate-500">Desktop · 1024px and up</p>
            <p className="font-mono text-[11px] text-slate-400">
              Sidebar spans 3, main content spans 9, cards split 3 ways within it
            </p>

          </div>

        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-6 text-slate-600">
            The sidebar and card regions don't change what they <em>are</em> between breakpoints —
            only how many grid columns they occupy. Below <code className="text-slate-800">lg</code>,
            everything collapses to a 4-column mobile grid where every region spans full width; from{" "}
            <code className="text-slate-800">lg</code> up, the grid expands to 12 columns and the
            sidebar locks to 3 while main content takes the remaining 9, matching the spans in the{" "}
            <span className="font-medium text-slate-800">Grid Reference</span> table below.
          </p>
        </div>

      </Section>

      <Section
        title="Grid Reference"
        description="Recommended column span for common layout regions — the fastest lookup if you already know what you're building."
      >

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Region</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Column Span</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Breakpoint</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["Sidebar", "3 / 12", "md and up"],
                ["Main content", "9 / 12", "md and up"],
                ["Form panel", "6 / 12", "lg and up"],
                ["Card grid item", "4 / 12", "lg and up"],
                ["Full-width section", "12 / 12", "all"],
              ].map(([region, span, breakpoint]) => (
                <tr key={region} className="border-t border-slate-100 transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{region}</td>
                  <td className="px-6 py-4"><code className="text-slate-600">{span}</code></td>
                  <td className="px-6 py-4 text-slate-600">{breakpoint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Usage Guidelines"
        description="Build layouts against the 12-column grid instead of arbitrary widths."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Forms & detail panels → span 6–8 columns
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Sidebars → span 3–4 columns
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Full-width sections → span all 12
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Card grids → 1 col mobile, 2–3 at md/lg
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Why a Grid System?</h3>
            <p className="text-sm leading-7 text-slate-600">
              A shared column and breakpoint system means every page reflows the same way at
              the same widths, instead of every screen inventing its own responsive behavior.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Token Reference"
        description="Grid tokens exposed through CSS variables and Tailwind utilities."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">CSS Variables</h3>
            <CodeBlock
              language="css"
              code={`:root {
  --grid-columns: 12;
  --grid-gutter: 24px;

  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Tailwind Utilities</h3>
            <CodeBlock
              language="tsx"
              code={`<div className="grid grid-cols-1 gap-6
                sm:grid-cols-2
                lg:grid-cols-3">
  <Card />
  <Card />
  <Card />
</div>

<div className="mx-auto max-w-7xl px-6">
  Container
</div>`}
            />
          </div>

        </div>
      </Section>

      <Section
        title="Accessibility"
        description="Grid layouts must remain usable when content is resized or reflowed."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Reflow</h3>
            <p className="text-sm leading-6 text-slate-600">
              Content must reflow to a single column at 320px width without horizontal scrolling (WCAG 1.4.10).
            </p>
          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ Source Order</h3>
            <p className="text-sm leading-6 text-slate-600">
              Visual column order shouldn't diverge from DOM order — screen readers follow the DOM.
            </p>
          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ Zoom Support</h3>
            <p className="text-sm leading-6 text-slate-600">
              Layouts must stay usable at 400% browser zoom, not just on small viewports.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Do & Don't"
        description="Follow these guidelines to keep layouts predictable across breakpoints."
      >
        <DoDont
          dos={[
            {
              title: "Design mobile-first",
              description: "Start with the single-column layout, then add columns at larger breakpoints.",
            },
            {
              title: "Align to the 12-column grid",
              description: "Use column spans that divide evenly into 12 instead of arbitrary widths.",
            },
            {
              title: "Keep gutters consistent",
              description: "Use the same gutter token for grids of the same density.",
            },
          ]}
          donts={[
            {
              title: "Don't hardcode pixel widths",
              description: "Avoid fixed-width columns that break the responsive grid.",
            },
            {
              title: "Don't skip breakpoints",
              description: "Test the layout at every defined breakpoint, not just mobile and desktop.",
            },
            {
              title: "Don't reorder visually only",
              description: "Avoid CSS-only reordering that breaks keyboard and screen-reader navigation order.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key grid principles"
      >
      <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Build every layout on the 12-column grid.</li>
            <li>✓ Design mobile-first, then add columns at larger breakpoints.</li>
            <li>✓ Keep gutters consistent within a layout density.</li>
            <li>✓ Test reflow and zoom, not just viewport width.</li>
            <li>✓ Never let visual order diverge from DOM order.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}