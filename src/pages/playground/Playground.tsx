import { useState } from "react";
import {
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { ComponentPage } from "../../components/docs/ComponentPage";
import { Section } from "../../components/docs/Section";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Card } from "../../components/ui/card";


import type { BadgeProps } from "../../components/ui/badge";

export function PlaygroundPage() {
  const [component, setComponent] = useState("button");

 const [variant, setVariant] = useState<
  "primary" | "secondary" | "outline" | "ghost" | "danger"
>("primary");

  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const [disabled, setDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const [leftIcon, setLeftIcon] = useState(false);

  const [rightIcon, setRightIcon] = useState(false);

const [copied, setCopied] = useState(false);
const [placeholder, setPlaceholder] =
  useState("Enter your name...");

const [label, setLabel] =
  useState("Accept Terms & Conditions");

const [checked, setChecked] =
  useState(false);

  const [theme, setTheme] =
  useState("light");

const [device, setDevice] =
  useState("desktop");

const [background, setBackground] =
  useState("default");

function resetControls() {
  setComponent("button");

  setVariant("primary");

  setSize("md");

  setDisabled(false);

  setLoading(false);

  setLeftIcon(false);

  setRightIcon(false);

  setPlaceholder("Enter your name...");

  setLabel("Accept Terms & Conditions");

  setChecked(false);
}

const generatedCode =
  component === "button"
    ? `<Button
  variant="${variant}"
  size="${size}"
  ${disabled ? "disabled" : ""}
  ${loading ? "loading" : ""}
>
  Continue
</Button>`
    : component === "badge"
    ? `<Badge variant="${variant}">
  New
</Badge>`
    : component === "input"
    ? `<Input
  placeholder="Enter your name..."
/>`
    : component === "checkbox"
    ? `<Checkbox
  label="Accept Terms & Conditions"
/>`
    : `<Card>
  <h3>Design System</h3>
</Card>`;
async function handleCopy() {
  await navigator.clipboard.writeText(generatedCode);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}
const previewWidth =
  device === "mobile"
    ? "max-w-[375px]"
    : device === "tablet"
    ? "max-w-[768px]"
    : "w-full";

const previewBackground =
  background === "default"
    ? "bg-slate-50"
    : background === "white"
    ? "bg-white"
    : background === "dark"
    ? "bg-slate-900"
    : "bg-blue-50";

  return (
    <ComponentPage
      title="Playground"
      description="Interactively customize components and generate production-ready code."
    >
      <Section
        title="Interactive Playground"
        description="Modify component properties and preview changes instantly."
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5">

  <h2 className="text-xl font-semibold">
    Playground Toolbar
  </h2>

  <div className="flex flex-wrap gap-3">

    <Button
      variant="outline"
      onClick={resetControls}
    >
      Reset
    </Button>

  </div>

</div>
        <div className="grid gap-8 xl:grid-cols-[340px_1fr]">

<div>

  <label className="mb-2 block text-sm font-medium">
    Theme
  </label>

  <select
  value={theme}
  onChange={(e) => setTheme(e.target.value)}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

</div>
<div>

  <label className="mb-2 block text-sm font-medium">
    Preview Device
  </label>

 <select
  value={device}
  onChange={(e) => setDevice(e.target.value)}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="desktop">Desktop</option>
  <option value="tablet">Tablet</option>
  <option value="mobile">Mobile</option>
</select>
</div>
<div>

  <label className="mb-2 block text-sm font-medium">
    Preview Background
  </label>

  <select
  value={background}
  onChange={(e) => setBackground(e.target.value)}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="default">Slate</option>
  <option value="white">White</option>
  <option value="blue">Blue</option>
  <option value="dark">Dark</option>
</select>
</div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-semibold">
              Controls
            </h2>

            <div className="space-y-7">

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Component
                </label>

                <select
  value={component}
  onChange={(e) => setComponent(e.target.value)}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="button">Button</option>
  <option value="badge">Badge</option>
  <option value="input">Input</option>
  <option value="checkbox">Checkbox</option>
  <option value="card">Card</option>
</select>

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Variant
                </label>

                <select
  value={variant}
 onChange={(e) =>
  setVariant(
    e.target.value as
      | "primary"
      | "secondary"
      | "outline"
      | "ghost"
      | "danger"
  )
}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
  <option value="outline">Outline</option>
  <option value="ghost">Ghost</option>
 
</select>

              </div>
  {component === "button" && (
              <div>

                <label className="mb-2 block text-sm font-medium">
                  Size
                </label>

                <select
  value={size}
 onChange={(e) =>
  setSize(
    e.target.value as
      | "sm"
      | "md"
      | "lg"
  )
}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="sm">Small</option>
  <option value="md">Medium</option>
  <option value="lg">Large</option>
</select>

              </div>
)}
{component === "input" && (

<div>

  <label className="mb-2 block text-sm font-medium">
    Placeholder
  </label>

  <input
    value={placeholder}
    onChange={(e) => setPlaceholder(e.target.value)}
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />

</div>

)}
{component === "checkbox" && (

<div>

  <label className="mb-2 block text-sm font-medium">
    Label
  </label>

  <input
    value={label}
    onChange={(e) => setLabel(e.target.value)}
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />

</div>

)}
{component === "checkbox" && (

<label className="flex items-center justify-between">

  <span>
    Checked
  </span>

  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
  />

</label>

)}
            </div>

          </div>
<div className="border-t border-slate-200 pt-6">

  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
    States
  </h3>

  <div className="space-y-4">

    <label className="flex items-center justify-between">

      <span className="text-sm">
        Disabled
      </span>

      <input
        type="checkbox"
        checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        className="h-4 w-4"
      />

    </label>
{component === "button" && (

    <label className="flex items-center justify-between">

      <span className="text-sm">
        Loading
      </span>

      <input
        type="checkbox"
        checked={loading}
        onChange={(e) => setLoading(e.target.checked)}
        className="h-4 w-4"
      />

    </label>
)}
  </div>

</div>
{component === "button" && (

<div className="border-t border-slate-200 pt-6">

  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
    Icons
  </h3>

  <div className="space-y-4">

    <label className="flex items-center justify-between">

      <span className="text-sm">
        Left Icon
      </span>

      <input
        type="checkbox"
        checked={leftIcon}
        onChange={(e) => setLeftIcon(e.target.checked)}
        className="h-4 w-4"
      />

    </label>

    <label className="flex items-center justify-between">

      <span className="text-sm">
        Right Icon
      </span>

      <input
        type="checkbox"
        checked={rightIcon}
        onChange={(e) => setRightIcon(e.target.checked)}
        className="h-4 w-4"
      />

    </label>

  </div>
</div>)}
        

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

           <h2 className="mb-8 text-xl font-semibold">
  Live Preview
</h2>

<div
  className={`flex min-h-100 items-center justify-center rounded-xl border border-dashed border-slate-300 p-8 transition-all ${previewBackground}`}
>
  <div
    className={`${previewWidth} ${
      theme === "dark"
        ? "rounded-xl bg-slate-900 p-8"
        : ""
    }`}
  >

    {component === "button" && (

      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        leftIcon={
          leftIcon
            ? <ArrowRight size={16} />
            : undefined
        }
        rightIcon={
          rightIcon
            ? <ArrowRight size={16} />
            : undefined
        }
      >
        Continue
      </Button>

    )}

    {component === "badge" && (
      <Badge
  variant={variant as BadgeProps["variant"]}
>
        New
      </Badge>
    )}

    {component === "input" && (
      <Input
        placeholder={placeholder}
        disabled={disabled}     
      />
    )}

    {component === "checkbox" && (
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
      />
    )}

    {component === "card" && (
      <Card className="w-80 p-6">

        <h3 className="text-lg font-semibold">
          Design System
        </h3>

        <p className="mt-3 text-slate-600">
          Reusable component preview.
        </p>

      </Card>
    )}

 </div>



{(component === "button" || component === "badge") && (

  <div>

    <label className="mb-2 block text-sm font-medium">
      Variant
    </label>

    <select
  value={variant}
  onChange={(e) => setVariant(e.target.value as "primary" | "secondary" | "outline" | "ghost" | "danger")}
  className="w-full rounded-lg border border-slate-300 px-4 py-2"
>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
  <option value="outline">Outline</option>
  <option value="ghost">Ghost</option>
  <option value="danger">Danger</option>

</select>

  </div>

)}
  

</div>
<Button
  variant="outline"
  className="w-full"
  onClick={resetControls}
>
  Reset Controls
</Button>
          </div>

        </div>

      </Section>
<Section
  title="Generated JSX"
  description="Copy the generated JSX for the current component."
>

  <div className="overflow-hidden rounded-2xl border border-slate-200">

    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

      <h3 className="font-semibold">
        JSX Output
      </h3>

      <Button
        size="sm"
        variant="outline"
        onClick={handleCopy}
      >

        {copied ? (
          <>

            <Check
              size={16}
              className="mr-2"
            />

            Copied

          </>
        ) : (
          <>

            <Copy
              size={16}
              className="mr-2"
            />

            Copy Code

          </>
        )}

      </Button>

    </div>

    <pre className="overflow-x-auto bg-slate-950 p-6">

      <code className="text-sm leading-7 text-slate-100">

        {generatedCode}

      </code>

    </pre>

  </div>

</Section>
<Section
  title="Keyboard Shortcuts"
  description="Useful shortcuts while working in the playground."
>

  <div className="grid gap-4 md:grid-cols-2">

    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span>Copy Code</span>
        <kbd className="rounded border bg-slate-100 px-2 py-1 text-xs">
          Ctrl + C
        </kbd>
      </div>
    </div>

    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span>Reset Playground</span>
        <kbd className="rounded border bg-slate-100 px-2 py-1 text-xs">
          Ctrl + R
        </kbd>
      </div>
    </div>

  </div>

</Section>
<Section
  title="Accessibility"
  description="Checklist before using a component in production."
>

  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">

    <ul className="space-y-4">

      <li>✅ Keyboard Accessible</li>

      <li>✅ Visible Focus State</li>

      <li>✅ WCAG Color Contrast</li>

      <li>✅ Screen Reader Friendly</li>

      <li>✅ Responsive Layout</li>

    </ul>

  </div>

</Section>
<Section
  title="Component Information"
  description="Information about the selected component."
>

  <div className="rounded-xl border border-slate-200 bg-white p-6">

    <h3 className="mb-4 text-xl font-semibold">

      {component.charAt(0).toUpperCase() +
        component.slice(1)}

    </h3>

    <p className="leading-7 text-slate-600">

      {component === "button" &&
        "Buttons trigger actions or events."}

      {component === "badge" &&
        "Badges communicate status and labels."}

      {component === "input" &&
        "Inputs collect user data."}

      {component === "checkbox" &&
        "Checkboxes allow multiple selections."}

      {component === "card" &&
        "Cards group related content together."}

    </p>

  </div>

</Section>
<Section
  title="Playground Statistics"
  description="Current playground configuration."
>

  <div className="grid gap-6 md:grid-cols-4">

    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <p className="text-sm text-slate-500">
        Component
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {component}
      </h3>

    </div>

    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <p className="text-sm text-slate-500">
        Variant
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {variant}
      </h3>

    </div>

    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <p className="text-sm text-slate-500">
        Size
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {size}
      </h3>

    </div>

    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <p className="text-sm text-slate-500">
        Theme
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {theme}
      </h3>

    </div>

  </div>

</Section>
<Section
  title="Developer Tips"
  description="Recommendations when using the design system."
>

  <div className="rounded-xl bg-blue-50 p-6">

    <ul className="space-y-3 text-slate-700">

      <li>• Prefer reusable components over custom implementations.</li>

      <li>• Maintain consistent spacing and typography.</li>

      <li>• Keep accessibility enabled by default.</li>

      <li>• Reuse variants instead of creating one-off styles.</li>

      <li>• Keep generated code clean and production-ready.</li>

    </ul>

  </div>

</Section>
    </ComponentPage>
  );
}