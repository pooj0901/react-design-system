

import type { ReactNode } from "react";
import { Badge } from "../../components/ui/badge";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";


function ExampleCard({ label, children }: { label: ReactNode; children?: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
        <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {label}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
}

function Dot({ className = "" }) {
  return (
    <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current ${className}`} />
  );
}

export function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      description="Badges communicate status, categories, counts and short labels."
    >

      <Section
        title="Overview"
        description="Badges provide concise information without interrupting the user experience."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Badges are small UI elements used to display
          status, categories, notifications and metadata.
          They help users quickly understand important
          information while maintaining a clean interface.
        </p>

      </Section>


      <div className="grid gap-6 lg:grid-cols-2">

        <Section
          title="Variants"
          description="Different badge styles for different contexts."
        >

          <div className="flex flex-wrap gap-3 sm:gap-4">

            <Badge variant="primary">
              Primary
            </Badge>

            <Badge variant="secondary">
              Secondary
            </Badge>

            <Badge variant="outline">
              Outline
            </Badge>

            <Badge variant="success">
              Success
            </Badge>

            <Badge variant="warning">
              Warning
            </Badge>

            <Badge variant="danger">
              Danger
            </Badge>

          </div>

        </Section>

        <Section
          title="Sizes"
          description="Badges are available in multiple sizes."
        >

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">

            <Badge size="sm">
              Small
            </Badge>

            <Badge size="md">
              Medium
            </Badge>

            <Badge size="lg">
              Large
            </Badge>

          </div>

        </Section>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Section
          title="Badges with Icons"
          description="Icons help users quickly recognize the meaning of a badge."
        >

          <div className="flex flex-wrap gap-3 sm:gap-4">

            <Badge
              variant="success"
            >
              ✓ Verified
            </Badge>

            <Badge
              variant="warning"
            >
              ⏱ Pending
            </Badge>

            <Badge
              variant="danger"
            >
              ⚠ Failed
            </Badge>

            <Badge
              variant="primary"
            >
              ★ Featured
            </Badge>

          </div>

        </Section>

        <Section
          title="Status Badges"
          description="Display the current state of an item or process."
        >

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="flex items-center justify-between gap-3 rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5">

              <span className="text-sm sm:text-base">User Account</span>

              <Badge variant="success">
                Active
              </Badge>

            </div>

            <div className="flex items-center justify-between gap-3 rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5">

              <span className="text-sm sm:text-base">Payment</span>

              <Badge variant="warning">
                Pending
              </Badge>

            </div>

            <div className="flex items-center justify-between gap-3 rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5">

              <span className="text-sm sm:text-base">Subscription</span>

              <Badge variant="danger">
                Expired
              </Badge>

            </div>

            <div className="flex items-center justify-between gap-3 rounded-[12px] border border-slate-200 bg-white p-4 sm:p-5">

              <span className="text-sm sm:text-base">Deployment</span>

              <Badge variant="primary">
                Running
              </Badge>

            </div>

          </div>

        </Section>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Section
          title="Notification Badges"
          description="Use badges to indicate unread notifications or counts."
        >

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">

            <div className="relative">

              <button className="rounded-[12px] border border-slate-300 px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base">
                Messages
              </button>

              <Badge
                variant="danger"
                size="sm"
                className="absolute -right-2 -top-2"
              >
                12
              </Badge>

            </div>

            <div className="relative">

              <button className="rounded-[12px] border border-slate-300 px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base">
                Inbox
              </button>

              <Badge
                variant="primary"
                size="sm"
                className="absolute -right-2 -top-2"
              >
                3
              </Badge>

            </div>

          </div>

        </Section>

        <Section
          title="Category Badges"
          description="Categorize content using concise labels."
        >

          <div className="flex flex-wrap gap-3 sm:gap-4">

            <Badge variant="outline">
              React
            </Badge>

            <Badge variant="outline">
              TypeScript
            </Badge>

            <Badge variant="outline">
              UI Design
            </Badge>

            <Badge variant="outline">
              Accessibility
            </Badge>

            <Badge variant="outline">
              Performance
            </Badge>

          </div>

        </Section>

      </div>

      <Section
        title="Examples"
        description="Real-world compositions showing how badges communicate status and metadata at a glance."
      >

        <div className="grid gap-6 lg:grid-cols-2">

          <ExampleCard label="E-commerce — Order Status Tracking">

            <div className="divide-y divide-slate-100">

              <div className="flex flex-col gap-2 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    #ORD-2847
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    MacBook Pro 14" · ₹1,89,900
                  </p>
                </div>
                <Badge variant="warning" size="sm" className="self-start sm:self-auto">
                  <Dot />
                  Processing
                </Badge>
              </div>

              <div className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    #ORD-2841
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    iPhone 15 Pro · ₹1,29,900
                  </p>
                </div>
                <Badge variant="primary" size="sm" className="self-start sm:self-auto">
                  <Dot />
                  Shipped
                </Badge>
              </div>

              <div className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    #ORD-2835
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    AirPods Pro · ₹24,900
                  </p>
                </div>
                <Badge variant="success" size="sm" className="self-start sm:self-auto">
                  <Dot />
                  Delivered
                </Badge>
              </div>

              <div className="flex flex-col gap-2 py-3.5 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    #ORD-2820
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    iPad Air · ₹59,900
                  </p>
                </div>
                <Badge variant="danger" size="sm" className="self-start sm:self-auto">
                  <Dot />
                  Cancel
                </Badge>
              </div>

            </div>

          </ExampleCard>

          <ExampleCard label="SaaS Admin — User Roles + Plan">

            <div className="divide-y divide-slate-100">

              <div className="flex flex-col gap-3 py-3.5 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-700">
                    PS
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">
                      Priya Sharma
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      priya@acme.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-11 sm:pl-0">
                  <Badge variant="primary" size="sm">
                    Admin
                  </Badge>
                  <Badge variant="outline" size="sm">
                    Pro
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                    RM
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">
                      Rohan Mhera
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      rohan@acme.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-11 sm:pl-0">
                  <Badge variant="secondary" size="sm">
                    Member
                  </Badge>
                  <Badge variant="success" size="sm">
                    Free
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3 py-3.5 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                    AR
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">
                      Anita Rao
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      anita@acme.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-11 sm:pl-0">
                  <Badge variant="outline" size="sm">
                    Viewer
                  </Badge>
                  <Badge variant="warning" size="sm">
                    Trial
                  </Badge>
                </div>
              </div>

            </div>

          </ExampleCard>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Badges should communicate information clearly without relying only on color."
      >

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-5 sm:p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Clear Meaning
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Badge text should explain the status or category
              without depending only on colors.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-5 sm:p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ High Contrast
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Ensure sufficient contrast between the badge
              background and text to meet accessibility standards.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-5 sm:p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Keep Labels Short
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use concise wording so badges remain easy
              to scan throughout the interface.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Badge component."
      >

        <div className="overflow-x-auto">
          <PropsTable
            props={[
              {
                name: "children",
                type: "ReactNode",
                defaultValue: "-",
                description: "Content displayed inside the badge.",
              },
              {
                name: "variant",
                type: `"primary" | "secondary" | "outline" | "success" | "warning" | "danger"`,
                defaultValue: `"primary"`,
                description: "Visual appearance of the badge.",
              },
              {
                name: "size",
                type: `"sm" | "md" | "lg"`,
                defaultValue: `"md"`,
                description: "Controls the overall badge size.",
              },
              {
                name: "leftIcon",
                type: "ReactNode",
                defaultValue: "-",
                description: "Optional icon displayed before the label.",
              },
              {
                name: "className",
                type: "string",
                defaultValue: "-",
                description: "Additional Tailwind CSS classes.",
              },
            ]}
          />
        </div>

      </Section>

      <Section
        title="Code Examples"
        description="Import and use the Badge component throughout your application."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Badge } from "@/components/ui/badge";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Usage
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Badge>
  New
</Badge>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Variants
            </h3>

            <CodeBlock
              language="tsx"
              code={`<>
  <Badge variant="primary">
    Primary
  </Badge>

  <Badge variant="success">
    Success
  </Badge>

  <Badge variant="warning">
    Warning
  </Badge>

  <Badge variant="danger">
    Error
  </Badge>
</>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Sizes
            </h3>

            <CodeBlock
              language="tsx"
              code={`<>
  <Badge size="sm">
    Small
  </Badge>

  <Badge size="md">
    Medium
  </Badge>

  <Badge size="lg">
    Large
  </Badge>
</>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Badge with Icon
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Badge
  variant="success"
  leftIcon={<CheckCircle size={14} />}
>
  Verified
</Badge>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Status Badge
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Badge variant="warning">
  Pending
</Badge>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Notification Badge
            </h3>

            <CodeBlock
              language="tsx"
              code={`<div className="relative">

  <button>Messages</button>

  <Badge
    variant="danger"
    size="sm"
  >
    12
  </Badge>

</div>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Follow these recommendations when using badges."

      >

        <DoDont
          dos={[
            {
              title: "Keep labels concise",
              description:
                "Use one or two words whenever possible.",
            },
            {
              title: "Use consistent colors",
              description:
                "Assign the same color to the same meaning throughout the application.",
            },
            {
              title: "Provide context",
              description:
                "Badges should always accompany related content.",
            },
          ]}
          donts={[
            {
              title: "Don't overuse badges",
              description:
                "Too many badges reduce visual hierarchy.",
            },
            {
              title: "Don't rely only on color",
              description:
                "Include text or icons so meaning isn't conveyed by color alone.",
            },
            {
              title: "Don't write long sentences",
              description:
                "Badges should remain compact and easy to scan.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for using badges consistently."

      >

         <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-5 sm:p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">


            <li>✓ Use badges for status, labels and metadata.</li>

            <li>✓ Keep badge text short and meaningful.</li>

            <li>✓ Use consistent colors across the design system.</li>

            <li>✓ Combine icons with labels when helpful.</li>

            <li>✓ Ensure sufficient color contrast.</li>

            <li>✓ Avoid using badges as primary actions.</li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}