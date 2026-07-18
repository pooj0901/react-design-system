import { Search, Eye, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button/Button";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";


function ExampleCard({ label, children, note, noteTitle }: { label: string; children?: ReactNode; note?: string; noteTitle?: string }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
        <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {label}
        </span>
      </div>

      <div className="space-y-4 p-5">
        {children}
      </div>

      {note && (
        <div className="border-t border-slate-200 bg-slate-50/60 px-5 py-4">
          <p className="text-sm leading-6 text-slate-600">
            <span className="font-semibold text-slate-900">{noteTitle} </span>
            {note}
          </p>
        </div>
      )}
    </div>
  );
}

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <select
          defaultValue={value}
          className="w-full appearance-none rounded-[8px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option>{value}</option>
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

export function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="Inputs allow users to enter and edit text, numbers and other information."
    >

      <Section
        title="Overview"
        description="Inputs are one of the most common form controls used throughout applications."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Input fields enable users to provide
          information such as names, email
          addresses, passwords and search
          queries. They should remain clear,
          accessible and easy to use.
        </p>

      </Section>
<ComponentPreview
  title="Live Preview"
  description="Default input field."
>
  <div className="flex justify-center py-8">
    <div className="scale-125 origin-center">
      <Input
        label="Name"
        placeholder="Enter your name"
      />
    </div>
  </div>
</ComponentPreview>

      <div className="grid gap-6 lg:grid-cols-2">

        <Section
          title="Variants"
          description="Common input variations."
        >

          <div className="grid gap-6">

            <Input
              label="Default"
              placeholder="Enter text"
            />

            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={<Search size={18} />}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              rightIcon={<Eye size={18} />}
            />

            <Input
              label="Email"
              placeholder="john@example.com"
              helperText="We'll never share your email."
            />

          </div>

        </Section>

        <Section
          title="States"
          description="Input fields should clearly communicate their current state."
        >

          <div className="grid gap-6">

            <Input
              label="Default"
              placeholder="Enter your name"
            />

            <Input
              label="Disabled"
              placeholder="Disabled input"
              disabled
            />

            <Input
              label="Error"
              placeholder="john@example.com"
              error="Please enter a valid email address."
            />

            <Input
              label="Success"
              placeholder="john@example.com"
              helperText="Email verified successfully."
            />

          </div>

        </Section>

      </div>

     <div className="grid gap-6 lg:grid-cols-2">



  <Section
    title="Helper Text"
    description="Provide additional guidance when users need more context."
  >
    <div className="grid gap-6">

      <Input
        label="Username"
        placeholder="Enter username"
        helperText="Only letters, numbers and underscores are allowed."
      />

      <Input
        label="Website"
        placeholder="https://example.com"
        helperText="Include https:// before the domain."
      />

    </div>
  </Section>

 

  <Section
    title="Icons"
    description="Icons provide additional visual context and improve usability."
  >
    <div className="grid gap-6">

      <Input
        label="Search"
        placeholder="Search..."
        leftIcon={<Search size={18} />}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        rightIcon={<Eye size={18} />}
      />

      <Input
        label="Amount"
        placeholder="$0.00"
        leftIcon={<span className="font-medium">$</span>}
      />

    </div>
  </Section>

</div>
      <Section
        title="Examples"
        description="Real-world compositions showing how inputs, validation and helper content work together."
      >

        <div className="grid gap-6 md:grid-cols-2">

          <ExampleCard
            label="Login Form — Single Primary CTA"
            noteTitle="Error on blur:"
            note="Show errors only after the user leaves a field — not while they're actively typing. Reduces frustration."
          >

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First name *"
                placeholder="Enter Name"
              />
              <Input
                label="Last name *"
                placeholder="Enter Name"
              />
            </div>

            <Input
              label="Work email *"
              defaultValue="Priya"
              error="Must be at least 8 characters"
            />

            <Button fullWidth>
              Create account
            </Button>

            <p className="text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Button variant="link" size="sm">
                Sign up free
              </Button>
            </p>

          </ExampleCard>

          <ExampleCard
            label="Dashboard Search — Inline Input With Icon"
            noteTitle="Live search:"
            note="Debounce the onChange handler by 300ms to avoid an API call on every single keystroke."
          >

            <Input
              placeholder="Search users, projects, files..."
              leftIcon={<Search size={18} />}
            />

            <div className="space-y-3">

              <div className="flex items-center justify-between rounded-[8px] border border-slate-100 px-3 py-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                    PS
                  </span>
                  <span className="text-sm text-slate-700">
                    Priya Sharma
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-[lg] border border-slate-100 px-3 py-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-700">
                    RM
                  </span>
                  <span className="text-sm text-slate-700">
                    Rohit Mehra
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Pending
                </span>
              </div>

            </div>

          </ExampleCard>

          <div className="md:col-span-2">
            <ExampleCard label="Profile Settings — Full Form With All Input Types">

              <div className="grid gap-5 md:grid-cols-2">

                <div className="space-y-5">

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First name"
                      defaultValue="Priya"
                    />
                    <Input
                      label="Last name"
                      defaultValue="Sharma"
                    />
                  </div>

                  <Input
                    label="Email"
                    defaultValue="priya@acme.com"
                  />

                  <SelectField
                    label="Department"
                    value="Engineering"
                  />

                  <SelectField
                    label="Timezone"
                    value="Asia/Kolkata (IST, UTC+5:30)"
                  />

                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Bio
                  </label>
                  <textarea
                    defaultValue="Senior frontend engineer with 6 years building SaaS products."
                    rows={7}
                    className="w-full resize-y rounded-[8px] border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

            </ExampleCard>
          </div>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Inputs should be accessible, readable and easy to interact with."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Labels
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Every input should have a visible label
              so users understand the expected value.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Keyboard Support
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Users should be able to navigate
              between inputs using the keyboard
              and always see the focus indicator.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Error Messages
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Display clear validation messages
              that explain how users can fix
              incorrect input.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Input component."
      >

        <PropsTable
          props={[
            {
              name: "label",
              type: "string",
              defaultValue: "-",
              description: "Input label displayed above the field.",
            },
            {
              name: "placeholder",
              type: "string",
              defaultValue: "-",
              description: "Placeholder text shown when empty.",
            },
            {
              name: "type",
              type: `"text" | "email" | "password" | "number"`,
              defaultValue: `"text"`,
              description: "Defines the input type.",
            },
            {
              name: "size",
              type: `"sm" | "md" | "lg"`,
              defaultValue: `"md"`,
              description: "Controls the input size.",
            },
            {
              name: "disabled",
              type: "boolean",
              defaultValue: "false",
              description: "Disables user interaction.",
            },
            {
              name: "helperText",
              type: "string",
              defaultValue: "-",
              description: "Additional guidance displayed below the input.",
            },
            {
              name: "error",
              type: "string",
              defaultValue: "-",
              description: "Displays an error message and invalid state.",
            },
            {
              name: "leftIcon",
              type: "ReactNode",
              defaultValue: "-",
              description: "Icon displayed before the input text.",
            },
            {
              name: "rightIcon",
              type: "ReactNode",
              defaultValue: "-",
              description: "Icon displayed after the input text.",
            },
          ]}
        />

      </Section>


      <Section
        title="Code Examples"
        description="Import and use the Input component in your application."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Input } from "@/components/ui/input";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Usage
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Full Name"
  placeholder="John Doe"
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              With Helper Text
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Username"
  placeholder="Enter username"
  helperText="Only letters, numbers and underscores are allowed."
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Error State
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Email"
  placeholder="john@example.com"
  error="Please enter a valid email."
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Disabled
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Name"
  disabled
  placeholder="Disabled input"
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Input Sizes
            </h3>

            <CodeBlock
              language="tsx"
              code={`<>
  <Input
    size="sm"
    label="Small"
  />

  <Input
    size="md"
    label="Medium"
  />

  <Input
    size="lg"
    label="Large"
  />
</>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Left Icon
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Search"
  placeholder="Search..."
  leftIcon={<Search size={18} />}
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Right Icon
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  rightIcon={<Eye size={18} />}
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Complete Example
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Input
  label="Email Address"
  type="email"
  placeholder="john@example.com"
  helperText="We'll never share your email."
  leftIcon={<Search size={18} />}
/>`}
            />

          </div>

        </div>

      </Section>  

      <Section
        title="Do & Don't"
        description="Follow these best practices to create accessible and user-friendly input fields."
      >

        <DoDont
          dos={[
            {
              title: "Always use labels",
              description:
                "Provide clear labels so users understand the expected input.",
            },
            {
              title: "Use helper text wisely",
              description:
                "Add helper text when additional guidance improves completion.",
            },
            {
              title: "Show validation feedback",
              description:
                "Display meaningful error messages that explain how to resolve issues.",
            },
          ]}
          donts={[
            {
              title: "Don't rely on placeholders",
              description:
                "Placeholders should support labels, not replace them.",
            },
            {
              title: "Don't hide validation errors",
              description:
                "Users should immediately understand why an input is invalid.",
            },
            {
              title: "Don't overcrowd forms",
              description:
                "Keep layouts simple and group related fields together.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for designing effective input fields."
      >

       <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">
            <li>
              ✓ Every input should have a clear, descriptive label.
            </li>

            <li>
              ✓ Use helper text to guide users before errors occur.
            </li>

            <li>
              ✓ Display validation errors with clear explanations.
            </li>

            <li>
              ✓ Maintain consistent sizing and spacing across forms.
            </li>

            <li>
              ✓ Support keyboard navigation and visible focus states.
            </li>

            <li>
              ✓ Use icons only when they add meaning to the input.
            </li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}