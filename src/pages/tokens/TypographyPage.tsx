import { PageHeader } from "../../components/layout/PageHeader";
import { Section } from "../../components/docs/Section";
import { TokenCard } from "../../components/docs/TokenCard";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { DoDont } from "../../components/docs/DoDont";

export function TypographyPage() {
  return (
    <div className="space-y-12">

      <PageHeader
        badge="Design Tokens"
        title="Typography"
        description="Typography creates visual hierarchy, improves readability, and provides a consistent reading experience throughout the design system."
      />

      <Section
        title="Overview"
        description="The typography system defines font family, scale, weight, spacing and rhythm."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-3 text-3xl font-bold">
              Aa
            </h3>

            <h4 className="font-semibold">
              Font Family
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Inter is used throughout the design system for
              interfaces, documentation and components.
            </p>
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-3 text-3xl font-bold">
              16px
            </h3>

            <h4 className="font-semibold">
              Base Size
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              All typography scales from a 16px base using
              a consistent modular scale.
            </p>
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-3 text-3xl font-bold">
              1.5
            </h3>

            <h4 className="font-semibold">
              Line Height
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Comfortable spacing improves readability
              for long-form content.
            </p>
          </div>

        </div>

      </Section>

      <Section
        title="Font Family"
        description="Primary font used across the entire design system."
      >

        <TokenCard
          name="Inter"
          value="font-family"
          description="Modern sans-serif optimized for user interfaces."
          preview={
            <div className="flex h-full items-center justify-center text-4xl font-bold">
              The quick brown fox
            </div>
          }
        />

      </Section>

      <Section
        title="Type Scale"
        description="Consistent heading and body text sizes."
      >

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">

          <div className="mb-0 grid grid-cols-[140px_1fr_140px] gap-6 border-b border-slate-200 bg-slate-50 px-6 py-3 sm:grid-cols-[160px_1fr_180px]">
            <p className="text-xs font-semibold tracking-wider text-slate-400">
              LABEL
            </p>
            <p className="text-xs font-semibold tracking-wider text-slate-400">
              PREVIEW TEXT
            </p>
            <p className="text-right text-xs font-semibold tracking-wider text-slate-400">
              SPECS
            </p>
          </div>

          {[
            {
              label: "Display",
              specs: "36px / Bold",
              preview: (
                <h1 className="truncate text-5xl font-bold">
                  The quick brown fox
                </h1>
              ),
            },
            {
              label: "Heading 1",
              specs: "30px / Bold",
              preview: (
                <h1 className="truncate text-4xl font-bold">
                  The quick brown fox
                </h1>
              ),
            },
            {
              label: "Heading 2",
              specs: "24px / Semibold",
              preview: (
                <h2 className="truncate text-3xl font-semibold">
                  The quick brown fox
                </h2>
              ),
            },
            {
              label: "Heading 3",
              specs: "20px / Semibold",
              preview: (
                <h3 className="truncate text-2xl font-semibold">
                  The quick brown fox
                </h3>
              ),
            },
            {
              label: "Body",
              specs: "16px / Regular",
              preview: (
                <p className="truncate text-lg">
                  The quick brown fox jumps over the lazy dog
                </p>
              ),
            },
            {
              label: "Caption",
              specs: "12px / Regular",
              preview: (
                <p className="truncate">
                  The quick brown fox jumps over the lazy dog
                </p>
              ),
            },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              className={[
                "grid grid-cols-[140px_1fr_140px] items-center gap-6 px-6 py-5 sm:grid-cols-[160px_1fr_180px]",
                i !== arr.length - 1 ? "border-b border-slate-200" : "",
              ].join(" ")}
            >
              <p className="text-sm text-slate-500">
                {row.label}
              </p>

              <div className="min-w-0 overflow-hidden">
                {row.preview}
              </div>

              <p className="text-right text-sm text-slate-400">
                {row.specs}
              </p>
            </div>
          ))}

        </div>

      </Section>
            <Section
        title="Font Weights"
        description="Use font weights consistently to establish hierarchy."
      >
        <div className="grid gap-6 md:grid-cols-5">

          <TokenCard
            name="Regular"
            value="400"
            description="Body text"
            preview={
              <p className="text-2xl font-normal">
                Aa
              </p>
            }
          />

          <TokenCard
            name="Medium"
            value="500"
            description="Labels"
            preview={
              <p className="text-2xl font-medium">
                Aa
              </p>
            }
          />

          <TokenCard
            name="Semibold"
            value="600"
            description="Sub-headings"
            preview={
              <p className="text-2xl font-semibold">
                Aa
              </p>
            }
          />

          <TokenCard
            name="Bold"
            value="700"
            description="Headings"
            preview={
              <p className="text-2xl font-bold">
                Aa
              </p>
            }
          />

          <TokenCard
            name="Extra Bold"
            value="800"
            description="Display"
            preview={
              <p className="text-2xl font-extrabold">
                Aa
              </p>
            }
          />

        </div>
      </Section>

     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 w-full">
  <Section
    title="Line Heights"
    description="Line height improves readability and creates rhythm."
  >
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-lg font-semibold">
          Tight (1.2)
        </h3>

        <p className="max-w-3xl leading-tight text-slate-600">
          The quick brown fox jumps over the lazy dog.
          Typography should remain readable while
          maintaining a compact layout.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">
          Normal (1.5)
        </h3>

        <p className="max-w-3xl leading-7 text-slate-600">
          The quick brown fox jumps over the lazy dog.
          This is the recommended line height for most
          paragraphs in the design system.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">
          Relaxed (1.75)
        </h3>

        <p className="max-w-3xl leading-8 text-slate-600">
          Use relaxed spacing for documentation,
          articles and long-form reading experiences
          where readability is the highest priority.
        </p>
      </div>
    </div>
  </Section>

  <Section
    title="Letter Spacing"
    description="Letter spacing should be used carefully to improve clarity."
  >
    <div className="space-y-6">
      <div className="rounded-[12px] border border-slate-200 p-6">
        <h3 className="text-2xl font-bold tracking-tight">
          Tight Tracking
        </h3>

        <p className="mt-2 text-slate-500">
          tracking-tight
        </p>
      </div>

      <div className="rounded-[12px] border border-slate-200 p-6">
        <h3 className="text-2xl font-bold tracking-normal">
          Normal Tracking
        </h3>

        <p className="mt-2 text-slate-500">
          tracking-normal
        </p>
      </div>

      <div className="rounded-[12px] border border-slate-200 p-6">
        <h3 className="text-2xl font-bold tracking-wide">
          Wide Tracking
        </h3>

        <p className="mt-2 text-slate-500">
          tracking-wide
        </p>
      </div>
    </div>
  </Section>
</div>

      <Section
        title="Readability Guidelines"
        description="Typography should help users consume information effortlessly."
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-4 font-semibold">
              Recommended
            </h3>

            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li>• Maximum 70 characters per line.</li>
              <li>• Use consistent spacing.</li>
              <li>• Maintain sufficient contrast.</li>
              <li>• Prefer sentence case.</li>
            </ul>
          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">
            <h3 className="mb-4 font-semibold">
              Avoid
            </h3>

            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li>• Large paragraphs without spacing.</li>
              <li>• Excessive font weights.</li>
              <li>• Decorative fonts.</li>
              <li>• Low contrast text.</li>
            </ul>
          </div>

        </div>

      </Section>
            <Section
        title="Token Reference"
        description="Typography tokens exposed through CSS variables and Tailwind utilities."
      >
        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              CSS Variables
            </h3>

            <CodeBlock
              language="css"
              code={`:root {
  --font-family: "Inter", sans-serif;

  --text-display: 48px;
  --text-h1: 36px;
  --text-h2: 30px;
  --text-h3: 24px;
  --text-body-lg: 18px;
  --text-body: 16px;
  --text-caption: 14px;
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Tailwind Classes
            </h3>

            <CodeBlock
              language="tsx"
              code={`<h1 className="text-4xl font-bold">
  Heading
</h1>

<p className="text-base leading-7">
  Body Text
</p>

<span className="text-sm text-slate-500">
  Caption
</span>`}
            />
          </div>

        </div>

      </Section>

      <Section
        title="Typography Scale"
        description="Reference table for font sizes used throughout the design system."
      >

        <div className="overflow-hidden rounded-[24px] border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Token
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Size
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Weight
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Usage
                </th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Display", "48px", "700", "Hero headings"],
                ["Heading 1", "36px", "700", "Page titles"],
                ["Heading 2", "30px", "600", "Section titles"],
                ["Heading 3", "24px", "600", "Sub sections"],
                ["Body Large", "18px", "400", "Lead paragraphs"],
                ["Body", "16px", "400", "Default text"],
                ["Caption", "14px", "400", "Helper text"],
              ].map(([token, size, weight, usage]) => (
                <tr
                  key={token}
                  className="border-t border-slate-200"
                >
                  <td className="px-6 py-4 font-medium">
                    {token}
                  </td>

                  <td className="px-6 py-4">
                    <code>{size}</code>
                  </td>

                  <td className="px-6 py-4">
                    {weight}
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
        title="Typography Examples"
        description="Examples of typography in real user interface layouts."
      >

        <div className="space-y-8">

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h1 className="text-4xl font-bold">
              Dashboard Analytics
            </h1>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Monitor key performance indicators,
              analyze trends and make informed
              decisions using real-time insights.
            </p>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h2 className="text-3xl font-semibold">
              Team Members
            </h2>

            <p className="mt-3 text-slate-600">
              Invite teammates, assign roles and
              manage permissions.
            </p>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-8">

            <h3 className="text-2xl font-semibold">
              Recent Activity
            </h3>

            <p className="mt-3 text-slate-600">
              View the latest updates across
              projects and workspaces.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Responsive Typography"
        description="Typography should scale gracefully across different screen sizes."
      >

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <h3 className="mb-4 text-lg font-semibold">
              Desktop
            </h3>

            <div className="space-y-4">

              <h1 className="text-5xl font-bold">
                48px Display
              </h1>

              <h2 className="text-4xl font-bold">
                36px Heading
              </h2>

              <p className="leading-7 text-slate-600">
                Comfortable reading experience
                for large screens.
              </p>

            </div>

          </div>

          <div className="rounded-[12px] border border-slate-200 bg-white p-6">

            <h3 className="mb-4 text-lg font-semibold">
              Mobile
            </h3>

            <div className="space-y-4">

              <h1 className="text-3xl font-bold">
                30px Display
              </h1>

              <h2 className="text-2xl font-bold">
                24px Heading
              </h2>

              <p className="leading-7 text-slate-600">
                Optimized font sizes improve
                readability on smaller devices.
              </p>

            </div>

          </div>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Typography should remain readable across all screen sizes and devices."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Readability
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Maintain sufficient font size and
              line height for comfortable reading.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Contrast
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use accessible color contrast for
              all text against its background.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Consistency
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Keep font families, spacing and
              weights consistent across screens.
            </p>

          </div>

        </div>

      </Section>

      
            <Section
        title="Do & Don't"
        description="Follow these guidelines to keep typography consistent across the design system."
      >
        <DoDont
          dos={[
            {
              title: "Maintain a clear hierarchy",
              description:
                "Use headings, subheadings and body text consistently so users can easily scan content.",
            },
            {
              title: "Use consistent spacing",
              description:
                "Maintain appropriate spacing between headings, paragraphs and sections.",
            },
            {
              title: "Use readable line lengths",
              description:
                "Keep paragraphs between 45–75 characters per line whenever possible.",
            },
          ]}
          donts={[
            {
              title: "Don't mix font families",
              description:
                "Limit typography to the defined design tokens to maintain consistency.",
            },
            {
              title: "Don't overuse bold text",
              description:
                "Reserve bold weights for headings and important emphasis only.",
            },
            {
              title: "Don't use tiny text",
              description:
                "Avoid font sizes below 14px for interface text unless absolutely necessary.",
            },
          ]}
        />
      </Section>

      <Section
        title="Summary"
        description="Key typography principles"
      >

        <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">


            <li>
              ✓ Use Inter as the primary font family.
            </li>

            <li>
              ✓ Follow the predefined type scale.
            </li>

            <li>
              ✓ Maintain consistent font weights.
            </li>

            <li>
              ✓ Keep line heights comfortable for reading.
            </li>

            <li>
              ✓ Ensure accessible contrast and readable font sizes.
            </li>

            <li>
              ✓ Always use typography tokens instead of arbitrary values.
            </li>

          </ul>

        </div>

      </Section>

    </div>
  );
}