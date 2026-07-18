import { Button } from "../../components/ui/button/Button";
import type { ReactNode } from "react";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";

import {
  ArrowRight,
  Check,
  ChevronDown,
  LayoutGrid,
  List,
  Plus,
  Settings,
  Trash2,
  Upload,
} from "lucide-react";


type ShowcaseProps = {
  children: ReactNode;
  className?: string;
};

function Showcase({ children, className = "" }: ShowcaseProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 py-2 sm:gap-5 ${className}`}
    >
      {children}
    </div>
  );
}


type ExampleCardProps = {
  label: string;
  children: ReactNode;
  note: ReactNode;
  noteTitle: ReactNode;
};

function ExampleCard({ label, children, note, noteTitle }: ExampleCardProps) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
        <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {label}
        </span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {children}
      </div>

      <div className="border-t border-slate-200 bg-slate-50/60 px-4 py-4 sm:px-5">
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">{noteTitle} </span>
          {note}
        </p>
      </div>
    </div>
  );
}

export function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="Buttons allow users to perform actions, submit forms and navigate through the interface."
    >

      <Section
        title="Overview"
        description="Buttons communicate actions and should clearly indicate what happens when clicked."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Buttons are one of the most frequently used
          components in a design system. They should
          provide clear visual hierarchy, accessible
          interaction states and consistent styling.
        </p>

      </Section>

      <ComponentPreview
  title="Live Preview"
  description="Primary button example."
>
  <Showcase className="justify-center">
    <Button className="h-14 px-8 text-lg font-semibold">
      Continue
    </Button>
  </Showcase>
</ComponentPreview>

      <div className="grid gap-8 lg:grid-cols-2">

 

  <Section
    title="Variants"
    description="Available button variants."
  >
    <Showcase>
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="danger">
        Danger
      </Button>
    </Showcase>
  </Section>

 

  <Section
    title="Sizes"
    description="Choose the appropriate size based on context and importance."
  >
    <Showcase>
      <Button size="sm">
        Small
      </Button>

      <Button size="md">
        Medium
      </Button>

      <Button size="lg">
        Large
      </Button>
    </Showcase>
  </Section>



  <Section
    title="Buttons with Icons"
    description="Icons provide additional visual meaning to actions."
  >
    <Showcase>
      <Button leftIcon={<Plus size={18} />}>
        Add User
      </Button>

      <Button rightIcon={<ArrowRight size={18} />}>
        Continue
      </Button>


      <Button
        variant="danger"
        leftIcon={<Trash2 size={18} />}
      >
        Delete
      </Button>

      <Button
        size="icon"
        leftIcon={<Settings size={18} />}
      />
    </Showcase>
  </Section>



  <Section
    title="Loading State"
    description="Use loading buttons while an action is processing."
  >
    <Showcase>
      <Button loading>
        Saving...
      </Button>

      <Button
        loading
        variant="secondary"
      >
        Loading
      </Button>
    </Showcase>
  </Section>



  <Section
    title="Disabled State"
    description="Disabled buttons indicate unavailable actions."
  >
    <Showcase>
      <Button disabled>
        Disabled
      </Button>

      <Button
        disabled
        variant="secondary"
      >
        Secondary
      </Button>

      <Button
        disabled
        variant="outline"
      >
        Outline
      </Button>
    </Showcase>
  </Section>



  <Section
    title="Full Width"
    description="Use full-width buttons in forms and mobile layouts."
  >
    <div className="w-full max-w-sm py-2">
      <Button fullWidth>
        Continue
      </Button>
    </div>
  </Section>

</div>

      <Section
        title="Examples"
        description="Real-world compositions showing how variants and hierarchy work together in common UI patterns."
      >

        <div className="grid gap-6 md:grid-cols-2">

          <ExampleCard
            label="Login Form — Single Primary CTA"
            noteTitle="Why primary only?"
            note="One clear action on a login page — no competing buttons confuse the user about what to do next."
          >

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                readOnly
                defaultValue="priya@acme.com"
                className="w-full rounded-[12px] border border-slate-300 px-3 py-2 text-sm text-slate-700"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                readOnly
                type="password"
                defaultValue="password"
                className="w-full rounded-[12px] border border-slate-300 px-3 py-2 text-sm text-slate-700"
              />
            </div>

            <div className="text-right">
              <Button variant="link" size="sm">
                Forgot password?
              </Button>
            </div>

            <Button fullWidth>
              Sign in to account
            </Button>

            <p className="text-center text-sm text-slate-500">
              No account?{" "}
              <Button variant="link" size="sm">
                Sign up free
              </Button>
            </p>

          </ExampleCard>

          <ExampleCard
            label="Delete Confirmation — Danger + Secondary Pair"
            noteTitle="Why danger?"
            note="Destructive actions need a visually distinct button so users pause and consciously decide before clicking."
          >

            <div>
              <h4 className="mb-1 font-semibold text-slate-900">
                Delete workspace?
              </h4>
              <p className="text-sm leading-6 text-slate-600">
                This will permanently delete <span className="font-semibold">Project Alpha</span> and
                all 42 files. Cannot be undone.
              </p>
            </div>

            <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end sm:gap-3">
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button variant="danger" className="w-full sm:w-auto">
                Yes, delete forever
              </Button>
            </div>

          </ExampleCard>

          <ExampleCard
            label="File Toolbar — Mixed Variants for Hierarchy"
            noteTitle="Visual hierarchy:"
            note="Primary = main action. Secondary = secondary actions. Ghost = low-priority view toggles."
          >

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Button size="sm" leftIcon={<Plus size={16} />}>
                New file
              </Button>
              <Button size="sm" variant="outline" leftIcon={<Upload size={16} />}>
                Upload
              </Button>
              <Button size="sm" variant="ghost" leftIcon={<LayoutGrid size={16} />}>
                Grid
              </Button>
              <Button size="sm" variant="ghost" leftIcon={<List size={16} />}>
                List
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Button size="sm" variant="outline" rightIcon={<ChevronDown size={14} />}>
                Filter
              </Button>
              <Button size="sm" variant="outline" rightIcon={<ChevronDown size={14} />}>
                Sort: Date
              </Button>
            </div>

          </ExampleCard>

          <ExampleCard
            label="Settings Form — Save vs Discard Pattern"
            noteTitle="Ghost vs Primary:"
            note="Ghost for discard (low urgency, reversible). Primary for save (the intended, desired action)."
          >

            <h4 className="font-semibold text-slate-900">
              Email notifications
            </h4>

            <div className="space-y-3">

              {[
                { label: "Weekly digest", checked: true },
                { label: "Security alerts", checked: false },
                { label: "Product updates", checked: true },
              ].map((item) => (
                <label
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded border ${
                      item.checked
                        ? "border-blue-600 bg-blue-600"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {item.checked && (
                      <Check size={12} className="text-white" strokeWidth={3} />
                    )}
                  </span>
                  {item.label}
                </label>
              ))}

            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end sm:gap-3">
              <Button variant="ghost" className="w-full sm:w-auto">
                Discard changes
              </Button>
              <Button className="w-full sm:w-auto">
                Save preferences
              </Button>
            </div>

          </ExampleCard>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Buttons should be easy to identify, operate and understand."
      >

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-5 sm:p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Clear Labels
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use action-oriented text like
              "Save", "Continue" or "Delete"
              so users immediately understand
              what the button does.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-5 sm:p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Keyboard Support
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Buttons must remain focusable
              and display a visible focus state
              for keyboard navigation.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-5 sm:p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Color Contrast
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Maintain sufficient contrast
              between button text and its
              background to satisfy WCAG.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Button component."
      >

        <div className="overflow-x-auto">
          <PropsTable
            props={[
              {
                name: "variant",
                type: `"primary" | "secondary" | "outline" | "ghost" | "success" | "danger" | "link"`,
                defaultValue: `"primary"`,
                description: "Visual appearance of the button.",
              },
              {
                name: "size",
                type: `"xs" | "sm" | "md" | "lg" | "xl" | "icon"`,
                defaultValue: `"md"`,
                description: "Controls the button size.",
              },
              {
                name: "disabled",
                type: "boolean",
                defaultValue: "false",
                description: "Disables user interaction.",
              },
              {
                name: "loading",
                type: "boolean",
                defaultValue: "false",
                description: "Displays a loading state.",
              },
              {
                name: "fullWidth",
                type: "boolean",
                defaultValue: "false",
                description: "Expands button to full width.",
              },
              {
                name: "leftIcon",
                type: "ReactNode",
                defaultValue: "-",
                description: "Icon displayed before the label.",
              },
              {
                name: "rightIcon",
                type: "ReactNode",
                defaultValue: "-",
                description: "Icon displayed after the label.",
              },
              {
                name: "onClick",
                type: "() => void",
                defaultValue: "-",
                description: "Click event handler.",
              },
              {
                name: "children",
                type: "ReactNode",
                defaultValue: "-",
                description: "Button content.",
              },
            ]}
          />
        </div>

      </Section>

  

      <Section
        title="Code Examples"
        description="Import and use the Button component in your application."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Button } from "@/components/ui/button/Button";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Usage
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button>
  Continue
</Button>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Variants
            </h3>

            <CodeBlock
              language="tsx"
              code={`<>
  <Button>Primary</Button>

  <Button variant="secondary">
    Secondary
  </Button>

  <Button variant="outline">
    Outline
  </Button>

  <Button variant="ghost">
    Ghost
  </Button>

  <Button variant="success">
    Success
  </Button>

  <Button variant="danger">
    Danger
  </Button>
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
  <Button size="xs">XS</Button>
  <Button size="sm">SM</Button>
  <Button size="md">MD</Button>
  <Button size="lg">LG</Button>
  <Button size="xl">XL</Button>
</>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Loading State
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button loading>
  Saving...
</Button>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Disabled State
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button disabled>
  Continue
</Button>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Icons
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button
  leftIcon={<Plus size={18} />}
>
  Add User
</Button>

<Button
  rightIcon={<ArrowRight size={18} />}
>
  Continue
</Button>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Full Width
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Button fullWidth>
  Continue
</Button>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Follow these best practices to create clear and accessible button interactions."
      >

        <DoDont
          dos={[
            {
              title: "Use clear action labels",
              description:
                "Buttons should clearly describe the action they perform, such as 'Save', 'Continue' or 'Delete'.",
            },
            {
              title: "Use one primary action",
              description:
                "Only one button should have primary emphasis within a section or dialog.",
            },
            {
              title: "Show loading feedback",
              description:
                "Display a loading state while asynchronous actions are in progress.",
            },
          ]}
          donts={[
            {
              title: "Don't use vague labels",
              description:
                "Avoid labels like 'Click Here' or 'Submit Now' without context.",
            },
            {
              title: "Don't disable without explanation",
              description:
                "If a button is disabled, explain why or indicate what is required to enable it.",
            },
            {
              title: "Don't overload the interface",
              description:
                "Too many primary buttons compete for attention and weaken visual hierarchy.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for using buttons consistently."
      >

      <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-5 sm:p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>✓ Use the correct variant for the action.</li>

            <li>✓ Keep button labels short and action-oriented.</li>

            <li>✓ Maintain consistent sizing throughout the application.</li>

            <li>✓ Use loading and disabled states when appropriate.</li>

            <li>✓ Ensure buttons are keyboard accessible and have visible focus styles.</li>

            <li>✓ Prefer design system props over custom styling whenever possible.</li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}