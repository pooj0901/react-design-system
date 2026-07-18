import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button/Button";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";


function ExampleCard({ label, children, footer }: { label: ReactNode; children?: ReactNode; footer?: ReactNode }) {
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

      {footer && (
        <div className="px-5 pb-5">
          {footer}
        </div>
      )}
    </div>
  );
}


function IndeterminateCheckbox({
  label,
  checked,
  indeterminate,
  onChange,
}: {
  label: ReactNode;
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const isActive = checked || indeterminate;

  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700">
      <span className="relative flex h-4 w-4 items-center justify-center">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="absolute inset-0 h-4 w-4 cursor-pointer opacity-0"
        />
        <span
          className={`pointer-events-none flex h-4 w-4 items-center justify-center rounded border ${
            isActive ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
          }`}
        >
          {indeterminate ? (
            <span className="h-[2px] w-2 rounded-full bg-white" />
          ) : checked ? (
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
              <path
                d="M3.5 8.5L6.5 11.5L12.5 4.5"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </span>
      </span>
      {label}
    </label>
  );
}

export function CheckboxPage() {
  // Live preview
  const [checked, setChecked] = useState(false);

  // States section
  const [sUnchecked, setSUnchecked] = useState(false);
  const [sChecked, setSChecked] = useState(true);
  const [sError, setSError] = useState(false);

  // Common patterns — Settings
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  // Common patterns — Permissions
  const [readAccess, setReadAccess] = useState(true);
  const [writeAccess, setWriteAccess] = useState(false);
  const [deleteAccess, setDeleteAccess] = useState(false);

  // Labels & Description
  const [productUpdates, setProductUpdates] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  // Checkbox Groups — Preferred Technologies
  const [techReact, setTechReact] = useState(false);
  const [techNext, setTechNext] = useState(true);
  const [techVue, setTechVue] = useState(false);
  const [techAngular, setTechAngular] = useState(false);

  // Example — Onboarding
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [agreePrivacy, setAgreePrivacy] = useState(true);
  const [agreeTips, setAgreeTips] = useState(false);
  const canSubmit = agreeTerms && agreePrivacy;

  // Example — Product Filter: Category
  const [catSmartphones, setCatSmartphones] = useState(true);
  const [catLaptops, setCatLaptops] = useState(true);
  const [catTablets, setCatTablets] = useState(false);
  const [catAccessories, setCatAccessories] = useState(false);

  // Example — Product Filter: Brands (parent = indeterminate demo)
  const [brandApple, setBrandApple] = useState(true);
  const [brandSamsung, setBrandSamsung] = useState(true);
  const [brandOnePlus, setBrandOnePlus] = useState(false);

  const brandsCheckedCount = [brandApple, brandSamsung, brandOnePlus].filter(Boolean).length;
  const allBrandsChecked = brandsCheckedCount === 3;
  const allBrandsIndeterminate = brandsCheckedCount > 0 && brandsCheckedCount < 3;

  const toggleAllBrands = () => {
    const nextValue = !allBrandsChecked;
    setBrandApple(nextValue);
    setBrandSamsung(nextValue);
    setBrandOnePlus(nextValue);
  };

  return (
    <ComponentPage
      title="Checkbox"
      description="Checkboxes allow users to select one or more options from a list."
    >

      <Section
        title="Overview"
        description="Checkboxes are used when users can select multiple independent options."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Checkboxes let users make binary choices such
          as enabling settings, accepting terms or selecting
          multiple items. They should always include a clear
          label and provide obvious checked, unchecked and
          disabled states.
        </p>

      </Section>

    <ComponentPreview
  title="Live Preview"
  description="Interactive checkbox example."
>
  <div className="flex justify-center py-10 scale-125 origin-center">
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="Accept Terms & Conditions"
      description="You must accept before continuing."
    />
  </div>
</ComponentPreview>


      <div className="grid gap-6 overflow-hidden lg:grid-cols-2">

        <Section
          title="States"
          description="Different checkbox states available in the design system."
        >

          <div className="space-y-6">

            <Checkbox
              checked={sUnchecked}
              onChange={(e) => setSUnchecked(e.target.checked)}
              label="Unchecked"
            />

            <Checkbox
              checked={sChecked}
              onChange={(e) => setSChecked(e.target.checked)}
              label="Checked"
            />

            <Checkbox
              disabled
              label="Disabled"
            />

            <Checkbox
              checked
              disabled
              label="Checked & Disabled"
            />

            <Checkbox
              checked={sError}
              onChange={(e) => setSError(e.target.checked)}
              error="This field is required."
              label="Error State"
            />

          </div>

        </Section>

        <Section
          title="Common Patterns"
          description="Typical checkbox use cases across applications."
        >

          <div className="space-y-6">

            <div className="rounded-[12px] border border-slate-200 bg-white p-6">

              <h3 className="mb-4 text-lg font-semibold">
                Settings
              </h3>

              <div className="space-y-4">

                <Checkbox
                  checked={notifEnabled}
                  onChange={(e) => setNotifEnabled(e.target.checked)}
                  label="Enable Notifications"
                />

                <Checkbox
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  label="Dark Mode"
                />

                <Checkbox
                  checked={autoSave}
                  onChange={(e) => setAutoSave(e.target.checked)}
                  label="Auto Save"
                />

              </div>

            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-6">

              <h3 className="mb-4 text-lg font-semibold">
                Permissions
              </h3>

              <div className="space-y-4">

                <Checkbox
                  checked={readAccess}
                  onChange={(e) => setReadAccess(e.target.checked)}
                  label="Read Access"
                />

                <Checkbox
                  checked={writeAccess}
                  onChange={(e) => setWriteAccess(e.target.checked)}
                  label="Write Access"
                />

                <Checkbox
                  checked={deleteAccess}
                  onChange={(e) => setDeleteAccess(e.target.checked)}
                  label="Delete Access"
                />

              </div>

            </div>

          </div>

        </Section>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Section
          title="Labels & Description"
          description="Checkboxes should include clear labels and optional supporting text."
        >

          <div className="space-y-6">

            <Checkbox
              checked={productUpdates}
              onChange={(e) => setProductUpdates(e.target.checked)}
              label="Receive Product Updates"
              description="We'll send occasional emails about new features."
            />

            <Checkbox
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              label="Subscribe to Newsletter"
              description="Receive weekly product news and updates."
            />

          </div>

        </Section>

        <Section
          title="Checkbox Groups"
          description="Use checkbox groups when users can select multiple options."
        >

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Preferred Technologies
            </h3>

            <div className="space-y-4">

              <Checkbox
                checked={techReact}
                onChange={(e) => setTechReact(e.target.checked)}
                label="React"
              />

              <Checkbox
                checked={techNext}
                onChange={(e) => setTechNext(e.target.checked)}
                label="Next.js"
              />

              <Checkbox
                checked={techVue}
                onChange={(e) => setTechVue(e.target.checked)}
                label="Vue"
              />

              <Checkbox
                checked={techAngular}
                onChange={(e) => setTechAngular(e.target.checked)}
                label="Angular"
              />

            </div>

          </div>

        </Section>

      </div>

      <Section
        title="Examples"
        description="Real-world compositions showing how checkboxes drive form gating and multi-select filters."
      >

       <div className="grid gap-6 overflow-hidden lg:grid-cols-2">

          <ExampleCard
            label="Onboarding — Terms Agreement"
            footer={
              <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-sm font-semibold text-slate-900">
                  Gate the CTA:
                </p>
                <ul className="space-y-1 text-sm leading-6 text-slate-600">
                  <li>• Keep the submit button disabled until required checkboxes are checked.</li>
                  <li>• Prevents incomplete form submission.</li>
                </ul>
              </div>
            }
          >

            <div className="space-y-3">
              <Checkbox
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                label="I agree to the Terms of Service."
              />
              <Checkbox
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                label="I agree to the Privacy Policy."
              />
              <Checkbox
                checked={agreeTips}
                onChange={(e) => setAgreeTips(e.target.checked)}
                label="Send me product tips and news."
              />
            </div>

            <Button fullWidth disabled={!canSubmit}>
              Create my account
            </Button>

          </ExampleCard>

          <ExampleCard
            label="Product Filter — Indeterminate Selection"
            footer={
              <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-900">
                  <span className="font-semibold text-slate-900">Indeterminate: </span>
                  Use when a parent checkbox has some but not all children selected.
                </p>
              </div>
            }
          >

            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">
                Category
              </p>
              <div className="space-y-3">
                <Checkbox
                  checked={catSmartphones}
                  onChange={(e) => setCatSmartphones(e.target.checked)}
                  label="Smartphones (142)"
                />
                <Checkbox
                  checked={catLaptops}
                  onChange={(e) => setCatLaptops(e.target.checked)}
                  label="Laptops (89)"
                />
                <Checkbox
                  checked={catTablets}
                  onChange={(e) => setCatTablets(e.target.checked)}
                  label="Tablets (37)"
                />
                <Checkbox
                  checked={catAccessories}
                  onChange={(e) => setCatAccessories(e.target.checked)}
                  label="Accessories (204)"
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <p className="mb-3 text-sm font-medium text-slate-700">
                Brands
              </p>
              <div className="space-y-3">
                <IndeterminateCheckbox
                  label={`All brands (${brandsCheckedCount}/3)`}
                  checked={allBrandsChecked}
                  indeterminate={allBrandsIndeterminate}
                  onChange={toggleAllBrands}
                />
                <Checkbox
                  checked={brandApple}
                  onChange={(e) => setBrandApple(e.target.checked)}
                  label="Apple"
                />
                <Checkbox
                  checked={brandSamsung}
                  onChange={(e) => setBrandSamsung(e.target.checked)}
                  label="Samsung"
                />
                <Checkbox
                  checked={brandOnePlus}
                  onChange={(e) => setBrandOnePlus(e.target.checked)}
                  label="OnePlus"
                />
              </div>
            </div>

            <Button fullWidth>
              Create my account
            </Button>

          </ExampleCard>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Checkboxes should be easy to understand and accessible to all users."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Clear Labels
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Every checkbox should have a descriptive
              label explaining exactly what will happen
              when it is selected.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Keyboard Support
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Users should be able to navigate using
              the Tab key and toggle checkboxes using
              the Space key.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Group Related Options
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Keep related checkboxes together and
              provide headings to improve readability.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Checkbox component."
      >

        <PropsTable
          props={[
            {
              name: "label",
              type: "string",
              defaultValue: "-",
              description: "Text displayed beside the checkbox.",
            },
            {
              name: "description",
              type: "string",
              defaultValue: "-",
              description: "Additional helper text shown below the label.",
            },
            {
              name: "checked",
              type: "boolean",
              defaultValue: "false",
              description: "Controls whether the checkbox is checked.",
            },
            {
              name: "disabled",
              type: "boolean",
              defaultValue: "false",
              description: "Disables interaction with the checkbox.",
            },
            {
              name: "error",
              type: "string",
              defaultValue: "-",
              description: "Displays a validation error message.",
            },
            {
              name: "onChange",
              type: "(checked: boolean) => void",
              defaultValue: "-",
              description: "Called whenever the checked state changes.",
            },
          ]}
        />

      </Section>


      <Section
        title="Code Examples"
        description="Import and use the Checkbox component in your application."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Checkbox } from "@/components/ui/checkbox";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Usage
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Checkbox
  label="Accept Terms & Conditions"
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Checked
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Checkbox
  checked
  label="Remember me"
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Disabled
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Checkbox
  disabled
  label="Receive Notifications"
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Error State
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Checkbox
  label="Accept Terms"
  error="You must accept the terms to continue."
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              With Description
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Checkbox
  label="Subscribe"
  description="Receive product news and feature updates."
/>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Checkbox Group
            </h3>

            <CodeBlock
              language="tsx"
              code={`<>
  <Checkbox label="React" />

  <Checkbox
    checked
    label="Next.js"
  />

  <Checkbox label="Vue" />

  <Checkbox label="Angular" />
</>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Controlled Checkbox
            </h3>

            <CodeBlock
              language="tsx"
              code={`const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Enable Notifications"
/>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Best practices for designing and implementing checkboxes."
      >

        <DoDont
          dos={[
            {
              title: "Use descriptive labels",
              description:
                "Clearly explain what the checkbox controls or enables.",
            },
            {
              title: "Group related options",
              description:
                "Organize multiple checkboxes under meaningful section headings.",
            },
            {
              title: "Provide immediate feedback",
              description:
                "Reflect checked, unchecked and disabled states clearly.",
            },
          ]}
          donts={[
            {
              title: "Don't use checkboxes for exclusive choices",
              description:
                "Use radio buttons when users should select only one option.",
            },
            {
              title: "Don't hide validation errors",
              description:
                "Display validation messages close to the checkbox.",
            },
            {
              title: "Don't use vague wording",
              description:
                "Labels should describe the option without ambiguity.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for designing effective checkbox components."
      >

      <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>
              ✓ Use checkboxes for independent multiple selections.
            </li>

            <li>
              ✓ Always provide clear and descriptive labels.
            </li>

            <li>
              ✓ Keep related checkboxes grouped together.
            </li>

            <li>
              ✓ Display disabled and error states consistently.
            </li>

            <li>
              ✓ Ensure keyboard accessibility and visible focus states.
            </li>

            <li>
              ✓ Maintain consistent spacing and alignment throughout forms.
            </li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}