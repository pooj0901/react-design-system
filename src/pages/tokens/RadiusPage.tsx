import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";

export function RadiusPage() {
  return (
    <div className="space-y-16">

      <PageHeader
        badge="Design Tokens"
        title="Border Radius"
        description="Border radius tokens create consistent corner styles throughout the interface."
      />

      <Section
        title="Overview"
        description="Use predefined radius tokens to maintain visual consistency."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-slate-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            <div className="mb-5 flex h-20 items-center justify-center rounded bg-blue-600 text-white">
              None
            </div>

            <h3 className="font-semibold text-slate-900">
              Sharp
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Used for tables and data-heavy layouts.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-indigo-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            <div className="mb-5 flex h-20 items-center justify-center rounded-lg bg-blue-600 text-white">
              Medium
            </div>

            <h3 className="font-semibold text-slate-900">
              Default
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recommended radius for most UI components.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 border-l-4 border-l-violet-400 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            <div className="mb-5 flex h-20 items-center justify-center rounded-full bg-blue-600 text-white">
              Full
            </div>

            <h3 className="font-semibold text-slate-900">
              Pill
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Used for avatars, chips and pills.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Radius Scale"
        description="Available border radius tokens."
      >

        <div className="grid gap-5 md:grid-cols-4">

          <TokenCard
            name="None"
            value="0px"
            description="No radius"
            preview={
              <div className="h-14 w-14 bg-blue-600" />
            }
          />

          <TokenCard
            name="XS"
            value="2px"
            description="Tiny radius"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 2 }}
              />
            }
          />

          <TokenCard
            name="SM"
            value="4px"
            description="Small"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 4 }}
              />
            }
          />

<TokenCard
            name="MD"
            value="6px"
            description="Default"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 6 }}
              />
            }
          />

          <TokenCard
            name="MD"
            value="8px"
            description="Icons"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 8 }}
              />
            }
          />
                    <TokenCard
            name="LG"
            value="12px"
            description="Large cards"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 12 }}
              />
            }
          />

          <TokenCard
            name="XL"
            value="16px"
            description="Dialogs & panels"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 16 }}
              />
            }
          />

          <TokenCard
            name="2XL"
            value="24px"
            description="Large containers"
            preview={
              <div
                className="h-14 w-14 bg-blue-600"
                style={{ borderRadius: 24 }}
              />
            }
          />

          <TokenCard
            name="Full"
            value="9999px"
            description="Avatar & pills"
            preview={
              <div
                className="h-14 w-24 bg-blue-600"
                style={{ borderRadius: 9999 }}
              />
            }
          />

        </div>

      </Section>

      <Section
        title="Component Examples"
        description="Examples of radius tokens applied to common interface components."
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="text-lg font-semibold text-slate-900">
              Profile Card
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Multiple radius tokens working together in a real interface.
            </p>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
                  DS
                </div>

                <div>

                  <h4 className="font-semibold text-slate-900">
                    Design System
                  </h4>

                  <p className="text-sm text-slate-500">
                    UI Component Library
                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-3">

                <div className="rounded-[8px] border border-slate-200 bg-white px-4 py-3">
                  Email Address
                </div>

                <div className="rounded-[8px] border border-slate-200 bg-white px-4 py-3">
                  Role
                </div>

              </div>

              <button className="mt-6 w-full rounded-[8px] bg-blue-600 py-3 font-medium text-white">
                View Profile
              </button>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">

  <h3 className="text-lg font-semibold text-slate-900">
    Card Radius Scale
  </h3>

  <p className="mt-1 text-sm text-slate-500">
    Larger containers use progressively larger corner radii.
  </p>

  <div className="mt-8 space-y-5">

    <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-900">
        Small Card
      </p>

      <p className="mt-1 text-sm text-slate-500">
        rounded-md (8px)
      </p>
    </div>

    <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-900">
        Standard Card
      </p>

      <p className="mt-1 text-sm text-slate-500">
        rounded-xl (16px)
      </p>
    </div>

    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-900">
        Large Panel
      </p>

      <p className="mt-1 text-sm text-slate-500">
        rounded-2xl (24px)
      </p>
    </div>

  </div>



        </div>  </div>

      </Section>


            <Section
        title="Token Reference"
        description="Border radius tokens exposed through CSS variables and Tailwind utilities."
      >

        <div className="grid gap-8 lg:grid-cols-2">

          <div>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              CSS Variables
            </h3>

            <CodeBlock
              language="css"
              code={`:root {
  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Tailwind Utilities
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button className="rounded-md">
  Continue
</Button>

<Card className="rounded-xl">
  Content
</Card>

<Avatar className="rounded-full" />`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Radius Reference"
        description="Recommended usage for each radius token."
      >

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Token
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Value
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Recommended Usage
                </th>

              </tr>

            </thead>

            <tbody className="bg-white">

              {[
                ["None", "0px", "Tables"],
                ["XS", "2px", "Small elements"],
                ["SM", "4px", "Compact controls"],
                ["MD", "8px", "Buttons & Inputs"],
                ["LG", "12px", "Cards"],
                ["XL", "16px", "Dialogs"],
                ["2XL", "24px", "Hero sections"],
                ["Full", "9999px", "Avatars & Pills"],
              ].map(([token, value, usage]) => (

                <tr
                  key={token}
                  className="border-t border-slate-100 transition-colors hover:bg-slate-50"
                >

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-3">
                      <span
                        className="h-5 w-5 shrink-0 border border-slate-300 bg-blue-600"
                        style={{ borderRadius: value }}
                      />
                      <span className="font-medium text-slate-900">
                        {token}
                      </span>
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <code className="text-slate-600">{value}</code>
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
        description="Border radius contributes to visual clarity and recognizable interaction patterns."
      >

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Consistency
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use the same radius token for similar
              components throughout the product.
            </p>

          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Recognition
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Rounded corners help users quickly
              identify interactive elements.
            </p>

          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Harmony
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Consistent corner radius creates a
              cohesive and polished interface.
            </p>

          </div>

        </div>

      </Section>
            <Section
        title="Do & Don't"
        description="Follow these guidelines to maintain a consistent border radius system."
      >
        <DoDont
          dos={[
            {
              title: "Use radius tokens",
              description:
                "Always use predefined radius values from the design system.",
            },
            {
              title: "Match similar components",
              description:
                "Buttons, inputs and cards should use consistent corner styles.",
            },
            {
              title: "Increase radius gradually",
              description:
                "Use larger radius values only for larger surfaces like dialogs and hero cards.",
            },
          ]}
          donts={[
            {
              title: "Don't mix random radius values",
              description:
                "Avoid arbitrary values like 7px or 13px that aren't defined as tokens.",
            },
            {
              title: "Don't over-round everything",
              description:
                "Using excessive rounding on every component weakens visual hierarchy.",
            },
            {
              title: "Don't combine multiple radius styles",
              description:
                "Keep radius consistent within a single interface or product.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key border radius principles"
      >

        <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-indigo-50 to-violet-50 p-6">

          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-200/40 to-violet-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-indigo-950">

            <li>
              ✓ Use design tokens for every component.
            </li>

            <li>
              ✓ 8px is the default radius for interactive controls.
            </li>

            <li>
              ✓ 12–16px works well for cards and dialogs.
            </li>

            <li>
              ✓ Use Full radius for pills, badges and avatars.
            </li>

            <li>
              ✓ Keep corner styles consistent across the product.
            </li>

            <li>
              ✓ Avoid custom radius values outside the design system.
            </li>

          </ul>

        </div>

      </Section>

    </div>
  );
}