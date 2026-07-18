import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";

export function MotionPage() {
  return (
    <div className="space-y-16">

      <PageHeader
        badge="Design Tokens"
        title="Motion"
        description="Motion tokens define duration and easing curves that create fluid, purposeful animation throughout the interface."
      />

      <Section
        title="Overview"
        description="Motion is built from two primitives — how long something takes, and how it accelerates."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="group mb-5 flex h-20 items-center justify-center rounded-lg bg-slate-50">
              <div className="h-3 w-3 rounded-full bg-blue-600 transition-transform duration-300 ease-out group-hover:translate-x-8" />
            </div>
            <h3 className="font-semibold text-slate-900">Duration</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              How long a transition takes to complete, from 150ms micro-interactions to 500ms layout shifts.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="group mb-5 flex h-20 items-center justify-center rounded-lg bg-slate-50">
              <div className="h-3 w-3 rounded-full bg-blue-600 transition-transform duration-500 ease-in-out group-hover:translate-x-8" />
            </div>
            <h3 className="font-semibold text-slate-900">Easing</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The acceleration curve of a transition — how it starts, moves, and settles.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-emerald-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-5 flex h-20 items-center justify-center rounded-lg bg-slate-50 text-2xl">
              🎯
            </div>
            <h3 className="font-semibold text-slate-900">Purpose</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Every motion token exists to communicate state change, not to decorate.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Duration Scale"
        description="Available timing tokens, from instant feedback to full layout transitions. Each dot loops at its real duration below, so you can compare speed directly."
      >

        <style>{`
          @keyframes duration-demo {
            from { transform: translateX(0); }
            to { transform: translateX(2.75rem); }
          }
        `}</style>

        <div className="grid gap-5 md:grid-cols-4">

          <TokenCard
            name="Fast"
            value="150ms"
            description="Micro-interactions, hover states"
            preview={
              <div className="relative h-3 w-14">
                <div
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-600"
                  style={{ animation: "duration-demo 150ms ease-out infinite alternate" }}
                />
              </div>
            }
          />

          <TokenCard
            name="Base"
            value="200ms"
            description="Default transitions, dropdowns"
            highlight
            preview={
              <div className="relative h-3 w-14">
                <div
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-600"
                  style={{ animation: "duration-demo 200ms ease-out infinite alternate" }}
                />
              </div>
            }
          />

          <TokenCard
            name="Slow"
            value="300ms"
            description="Modals, panel transitions"
            preview={
              <div className="relative h-3 w-14">
                <div
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-600"
                  style={{ animation: "duration-demo 300ms ease-out infinite alternate" }}
                />
              </div>
            }
          />

          <TokenCard
            name="Slower"
            value="500ms"
            description="Page transitions, large layout shifts"
            preview={
              <div className="relative h-3 w-14">
                <div
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-600"
                  style={{ animation: "duration-demo 500ms ease-out infinite alternate" }}
                />
              </div>
            }
          />

        </div>

      </Section>

      <Section
        title="Easing Curves"
        description="How a transition accelerates between its start and end state."
      >

        <style>{`
          @keyframes easing-demo {
            from { transform: translateX(0); }
            to { transform: translateX(3.5rem); }
          }
        `}</style>

        <div className="grid gap-5 md:grid-cols-4">

          <TokenCard
            name="Linear"
            value="linear"
            description="Continuous motion, loaders"
            preview={
              <div className="relative h-2 w-16">
                <div
                  className="absolute left-0 top-0 h-2 w-2 rounded-full bg-blue-600"
                  style={{ animation: "easing-demo 1.4s linear infinite alternate" }}
                />
              </div>
            }
          />

          <TokenCard
            name="Ease In"
            value="cubic-bezier(0.4,0,1,1)"
            description="Elements exiting the screen"
            preview={
              <div className="relative h-2 w-16">
                <div
                  className="absolute left-0 top-0 h-2 w-2 rounded-full bg-blue-600"
                  style={{ animation: "easing-demo 1.4s cubic-bezier(0.4,0,1,1) infinite alternate" }}
                />
              </div>
            }
          />

          <TokenCard
            name="Ease Out"
            value="cubic-bezier(0,0,0.2,1)"
            description="Elements entering the screen"
            preview={
              <div className="relative h-2 w-16">
                <div
                  className="absolute left-0 top-0 h-2 w-2 rounded-full bg-blue-600"
                  style={{ animation: "easing-demo 1.4s cubic-bezier(0,0,0.2,1) infinite alternate" }}
                />
              </div>
            }
          />

          <TokenCard
            name="Ease In Out"
            value="cubic-bezier(0.4,0,0.2,1)"
            description="Default for most transitions"
            highlight
            preview={
              <div className="relative h-2 w-16">
                <div
                  className="absolute left-0 top-0 h-2 w-2 rounded-full bg-blue-600"
                  style={{ animation: "easing-demo 1.4s cubic-bezier(0.4,0,0.2,1) infinite alternate" }}
                />
              </div>
            }
          />

        </div>

      </Section>

      <Section
        title="Motion Examples"
        description="Hover each card to feel the difference between duration tokens."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-16 items-center justify-center rounded-lg bg-slate-50">
              <div className="h-8 w-8 rounded-md bg-blue-600 transition-transform duration-150 ease-out group-hover:scale-125" />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-900">150ms — Fast</p>
            <p className="mt-1 text-xs text-slate-500">Button press, toggle switch</p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-16 items-center justify-center rounded-lg bg-slate-50">
              <div className="h-8 w-8 rounded-md bg-blue-600 transition-transform duration-300 ease-in-out group-hover:scale-125" />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-900">300ms — Slow</p>
            <p className="mt-1 text-xs text-slate-500">Modal open, dropdown expand</p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-16 items-center justify-center rounded-lg bg-slate-50">
              <div className="h-8 w-8 rounded-md bg-blue-600 transition-transform duration-500 ease-in-out group-hover:scale-125" />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-900">500ms — Slower</p>
            <p className="mt-1 text-xs text-slate-500">Page transition, hero reveal</p>
          </div>

        </div>

      </Section>

      <Section
        title="Usage Guidelines"
        description="Match duration and easing to what the motion is communicating."
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Recommended</h3>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Hover / focus states → 150ms, ease-out
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Dropdowns / tooltips → 200ms, ease-in-out
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Modals / drawers → 300ms, ease-in-out
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Page transitions → 500ms, ease-in-out
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 font-semibold text-slate-900">Why Motion Tokens?</h3>
            <p className="text-sm leading-7 text-slate-600">
              Inconsistent animation timing makes an interface feel unpolished even when every
              other visual detail is correct. Shared duration and easing tokens keep motion
              feeling like one coherent system rather than a collection of one-off transitions.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Token Reference"
        description="Motion tokens exposed through CSS variables and Tailwind utilities."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">CSS Variables</h3>
            <CodeBlock
              language="css"
              code={`:root {
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;

  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Tailwind Utilities</h3>
            <CodeBlock
              language="tsx"
              code={`<Dropdown
  className="transition-all duration-200 ease-in-out"
/>

<Modal
  className="transition-opacity duration-300 ease-in-out"
/>

<Button
  className="transition-transform duration-150 ease-out
             active:scale-95"
/>`}
            />
          </div>

        </div>
      </Section>

      <Section
        title="Motion Reference"
        description="Recommended pairing of duration and easing for common interactions."
      >

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Interaction</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Easing</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["Hover / focus", "150ms", "ease-out"],
                ["Toggle / checkbox", "150ms", "ease-in-out"],
                ["Dropdown / tooltip", "200ms", "ease-in-out"],
                ["Modal / drawer", "300ms", "ease-in-out"],
                ["Page transition", "500ms", "ease-in-out"],
              ].map(([interaction, duration, easing]) => (
                <tr key={interaction} className="border-t border-slate-100 transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{interaction}</td>
                  <td className="px-6 py-4"><code className="text-slate-600">{duration}</code></td>
                  <td className="px-6 py-4"><code className="text-slate-600">{easing}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Accessibility"
        description="Motion should never be the only way information is communicated, and must respect user preference."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-emerald-700">✓ Reduced Motion</h3>
            <p className="text-sm leading-6 text-slate-600">
              Respect <code>prefers-reduced-motion</code> and fall back to instant or minimal transitions.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-blue-700">✓ No Motion-Only Meaning</h3>
            <p className="text-sm leading-6 text-slate-600">
              Pair animated state changes with a visible label, icon, or color shift.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-3 font-semibold text-amber-700">✓ Avoid Flashing</h3>
            <p className="text-sm leading-6 text-slate-600">
              Keep animations under 3 flashes per second to avoid triggering seizures.
            </p>
          </div>

        </div>
      </Section>

      <Section
        title="Do & Don't"
        description="Follow these guidelines to keep motion consistent and purposeful."
      >
        <DoDont
          dos={[
            {
              title: "Use motion tokens consistently",
              description: "Reuse the same duration/easing pair for the same type of interaction across the app.",
            },
            {
              title: "Respect reduced motion",
              description: "Always provide a reduced or instant fallback for users who request it.",
            },
            {
              title: "Animate with purpose",
              description: "Motion should clarify a state change, not just add movement.",
            },
          ]}
          donts={[
            {
              title: "Don't use arbitrary durations",
              description: "Avoid one-off values like 175ms or 420ms outside the token scale.",
            },
            {
              title: "Don't animate everything",
              description: "Overusing motion adds noise and slows down perceived performance.",
            },
            {
              title: "Don't rely on motion alone",
              description: "Always pair animated feedback with a static, accessible signal.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key motion principles"
      >
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />
          <ul className="relative space-y-3 text-blue-950">
            <li>✓ Use predefined duration and easing tokens.</li>
            <li>✓ Match timing to the size and importance of the change.</li>
            <li>✓ Default to ease-in-out for most transitions.</li>
            <li>✓ Always respect prefers-reduced-motion.</li>
            <li>✓ Keep motion purposeful, not decorative.</li>
          </ul>
        </div>
      </Section>

    </div>
  );
}