import type { ReactNode } from "react";

import {
  Heart,
  MoreHorizontal,
  ShoppingCart,
  Star,
} from "lucide-react";

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";


function ExampleTile({
  label,
  span = false,
  children,
}: {
  label: string;
  span?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={span ? "md:col-span-2" : ""}>
      <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400">
        {label.toUpperCase()}
      </p>

      {children}
    </div>
  );
}

export function CardPage() {
  return (
    <ComponentPage
      title="Card"
      description="Cards group related content and actions into flexible containers."
    >

      <Section
        title="Overview"
        description="Cards help organize information into digestible sections."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Cards are one of the most flexible layout
          components. They can contain images,
          headings, actions, statistics, forms,
          products and many other UI elements.
        </p>

      </Section>

      <ComponentPreview
        title="Live Preview"
        description="Basic card example."
      >

        <Card className="w-full max-w-sm p-5 sm:p-6">

          <h3 className="text-lg font-semibold">
            Project Overview
          </h3>

          <p className="mt-3 text-slate-600">
            Organize related information inside a
            clean container.
          </p>

          <Button className="mt-6">
            Learn More
          </Button>

        </Card>

      </ComponentPreview>

     <Section
        title="Examples"
        description="Common card patterns used throughout the product."
      >

        <div className="space-y-10">

          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Content Cards
            </p>

         <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2">
<ExampleTile label="Basic Card">
  <Card className="flex h-full flex-col rounded-[12px] p-5 sm:p-7">
    <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
      Design System
    </h3>

    <p className="mt-4 flex-1 leading-7 text-slate-600">
      Build consistent user interfaces using reusable components that improve
      scalability and developer experience.
    </p>
  </Card>
</ExampleTile>

             <ExampleTile label="Elevated Card">
  <Card className="flex h-full flex-col rounded-[12px] border border-slate-200 p-5 shadow-lg sm:p-7">
    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
      Premium Plan
    </h3>

    <p className="mt-4 flex-1 leading-7 text-slate-600">
      Unlock advanced analytics, unlimited projects and priority support.
    </p>

    <Button className="mt-8 w-full sm:w-fit">
      Upgrade
    </Button>
  </Card>
</ExampleTile>

             <ExampleTile label="Product Card">
  <Card className="overflow-hidden rounded-[12px]">

    <div className="h-40 bg-linear-to-br from-slate-100 to-slate-200" />

    <div className="space-y-6 p-5 sm:p-7">

      <div className="flex items-start justify-between gap-3">

        <div>
          <h3 className="text-lg font-semibold sm:text-xl">
            Wireless Headphones
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Premium Noise Cancellation
          </p>
        </div>

        <Heart
          size={20}
          className="shrink-0 cursor-pointer text-slate-400 transition-colors hover:text-red-500"
        />

      </div>

      <div className="flex gap-1">

        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < 4
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-300"
            }
          />
        ))}

      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">

        <span className="text-2xl font-bold sm:text-3xl">
          $199
        </span>

        <Button
          size="sm"
          leftIcon={<ShoppingCart size={16} />}
        >
          Buy Now
        </Button>

      </div>

    </div>

  </Card>
</ExampleTile>

             <ExampleTile label="Profile Card">
  <Card className="flex h-full flex-col items-center rounded-[12px] p-6 sm:p-8">

    <div className="mb-6 h-24 w-24 rounded-full bg-slate-300" />

    <h3 className="text-lg font-semibold sm:text-xl">
      John Anderson
    </h3>

    <p className="mt-2 text-slate-500">
      Senior Product Designer
    </p>

    <Button
      variant="outline"
      className="mt-8 w-full sm:w-fit"
    >
      View Profile
    </Button>

  </Card>
</ExampleTile>

            </div>

          </div>

          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Application Patterns
            </p>

          <div className="grid items-start gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">

              <ExampleTile
                label="Dashboard Card"
              >

                <Card className="flex h-full flex-col p-5 sm:p-6">

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h3 className="text-lg font-semibold">
                        Team Activity
                      </h3>

                      <p className="mt-2 text-slate-500">
                        Recent updates from your workspace.
                      </p>

                    </div>

                    <button className="shrink-0">

                      <MoreHorizontal />

                    </button>

                  </div>

                  <div className="mt-8 space-y-4">

                    <div className="flex justify-between">

                      <span>Completed Tasks</span>

                      <strong>86</strong>

                    </div>

                    <div className="flex justify-between">

                      <span>Open Issues</span>

                      <strong>14</strong>

                    </div>

                    <div className="flex justify-between">

                      <span>Deployments</span>

                      <strong>9</strong>

                    </div>

                  </div>

                </Card>

              </ExampleTile>

              <ExampleTile
                label="Card Actions"
              >

                <Card className="flex h-full flex-col p-5 sm:p-6">

                  <h3 className="text-lg font-semibold">
                    Project Proposal
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Review the proposal before sending it
                    to stakeholders.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <Button>
                      Approve
                    </Button>

                    <Button variant="outline">
                      Edit
                    </Button>

                    <Button variant="ghost">
                      Cancel
                    </Button>

                  </div>

                </Card>

              </ExampleTile>

              <ExampleTile
                label="Loading Card"
              >

                <Card className="flex h-full flex-col p-5 sm:p-6">

                  <div className="animate-pulse">

                    <div className="h-6 w-2/3 rounded bg-slate-200" />

                    <div className="mt-5 h-4 w-full rounded bg-slate-200" />

                    <div className="mt-3 h-4 w-4/5 rounded bg-slate-200" />

                    <div className="mt-8 h-10 w-32 rounded bg-slate-200" />

                  </div>

                </Card>

              </ExampleTile>

            </div>

          </div>

          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Full-Width Layouts
            </p>

            <div className="space-y-10">

              <div>

                <p className="mb-4 text-sm font-medium text-slate-600">
                  Statistics Card
                </p>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">

                  <Card className="flex h-full flex-col p-5 sm:p-6">

                    <p className="text-sm text-slate-500">
                      Revenue
                    </p>

                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                      $24,500
                    </h2>

                    <p className="mt-2 text-sm text-emerald-600">
                      +18% this month
                    </p>

                  </Card>

                  <Card className="flex h-full flex-col p-5 sm:p-6">

                    <p className="text-sm text-slate-500">
                      Users
                    </p>

                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                      14,250
                    </h2>

                    <p className="mt-2 text-sm text-emerald-600">
                      +320 today
                    </p>

                  </Card>

                  <Card className="flex h-full flex-col p-5 sm:p-6">

                    <p className="text-sm text-slate-500">
                      Orders
                    </p>

                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                      1,284
                    </h2>

                    <p className="mt-2 text-sm text-red-500">
                      -4% yesterday
                    </p>

                  </Card>

                </div>

              </div>

              <div>

                <p className="mb-4 text-sm font-medium text-slate-600">
                  Interactive Cards
                </p>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">

                  <Card className="flex h-full cursor-pointer flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">

                    <h3 className="text-lg font-semibold">
                      Analytics Dashboard
                    </h3>

                    <p className="mt-3 text-slate-600">
                      View detailed reports and performance metrics.
                    </p>

                    <Button
                      variant="link"
                      className="mt-5 px-0"
                    >
                      Open Dashboard
                    </Button>

                  </Card>

                  <Card className="flex h-full cursor-pointer flex-col p-5 transition-all duration-300 hover:shadow-xl sm:p-6">

                    <h3 className="text-lg font-semibold">
                      New Feature
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Discover recently released functionality.
                    </p>

                    <Button
                      variant="primary"
                      className="mt-5 w-full sm:w-fit"
                    >
                      Learn More
                    </Button>

                  </Card>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Cards should organize content clearly and support accessible interaction."
      >

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Semantic Structure
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use proper headings, paragraphs and buttons
              inside cards so screen readers understand
              the content hierarchy.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Keyboard Support
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Interactive cards should remain keyboard
              accessible with visible focus indicators.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Clear Hierarchy
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Separate headings, body content and actions
              using spacing and typography instead of
              decorative elements alone.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Card component."
      >

        <PropsTable
          props={[
            {
              name: "children",
              type: "ReactNode",
              defaultValue: "-",
              description: "Content rendered inside the card.",
            },
            {
              name: "className",
              type: "string",
              defaultValue: "-",
              description: "Additional Tailwind CSS classes.",
            },
            {
              name: "onClick",
              type: "() => void",
              defaultValue: "-",
              description: "Click handler for interactive cards.",
            },
          ]}
        />

      </Section>

            <Section
        title="Code Examples"
        description="Import and compose the Card component in different layouts."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Card } from "@/components/ui/card";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Card
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Card className="p-6">

  <h3>Project Overview</h3>

  <p>
    Build reusable UI components.
  </p>

</Card>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Card with Button
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Card className="p-6">

  <h3>Premium Plan</h3>

  <p>
    Unlock advanced features.
  </p>

  <Button>
    Upgrade
  </Button>

</Card>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Statistics Card
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Card className="p-6">

  <p>Revenue</p>

  <h2>$24,500</h2>

  <p>+18% this month</p>

</Card>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Interactive Card
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Card
  className="
    cursor-pointer
    transition-all
    hover:shadow-xl
  "
>

  <h3>Dashboard</h3>

</Card>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Loading Skeleton
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Card>

  <div className="animate-pulse">

    <div className="h-6 w-40 rounded bg-slate-200" />

    <div className="mt-4 h-4 w-full rounded bg-slate-200" />

    <div className="mt-3 h-4 w-3/4 rounded bg-slate-200" />

  </div>

</Card>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Best practices for designing flexible card layouts."
      >

        <DoDont
          dos={[
            {
              title: "Group related content",
              description:
                "Keep information that belongs together inside the same card.",
            },
            {
              title: "Maintain consistent spacing",
              description:
                "Use predictable padding and alignment throughout every card.",
            },
            {
              title: "Place actions consistently",
              description:
                "Position buttons and actions in the same location across similar cards.",
            },
          ]}
          donts={[
            {
              title: "Don't overload cards",
              description:
                "Avoid placing excessive content inside a single card.",
            },
            {
              title: "Don't mix unrelated actions",
              description:
                "Keep actions relevant to the card's content.",
            },
            {
              title: "Don't create inconsistent layouts",
              description:
                "Cards should follow the same spacing and visual hierarchy.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for designing reusable card layouts."
      >

       <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-linear-to-br from-blue-50 via-blue-50 to-slate-50 p-6">

          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-linear-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>
              ✓ Cards organize related information into reusable containers.
            </li>

            <li>
              ✓ Maintain consistent padding and spacing.
            </li>

            <li>
              ✓ Keep actions aligned and predictable.
            </li>

            <li>
              ✓ Support keyboard interaction for clickable cards.
            </li>

            <li>
              ✓ Use hierarchy instead of decorative elements.
            </li>

            <li>
              ✓ Compose cards using existing design system components.
            </li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}