

import {
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { Modal } from "../../components/ui/modal";
import { useState, type ReactNode } from "react";
import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";


function ModalMock({
  title,
  description,
  size = "md",
  children,
}: {
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}) {
  const sizeMap = {
    sm: "max-w-xs",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div
      className={`w-full ${sizeMap[size]} rounded-[12px] bg-white p-6 shadow-xl`}
    >

      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>

        <button className="shrink-0 text-slate-400 hover:text-slate-600">
          <X size={18} />
        </button>

      </div>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}

    </div>
  );
}


function ModalExample({
  label,
  note,
  span = false,
  children,
}: {
  label: string;
  note?: ReactNode;
  span?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={span ? "md:col-span-2" : ""}>

      <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400">
        {label.toUpperCase()}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 rounded-[24px] bg-slate-800 p-10">
        {children}
      </div>

      {note && (
        <div className="mt-3 rounded-[12px] border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600">
          {note}
        </div>
      )}

    </div>
  );
}

export function ModalPage() {
   const [open, setOpen] = useState(false);
  return (
    <ComponentPage
      title="Modal"
      description="Modals display important information or require user interaction before returning to the main interface."
    >

      <Section
        title="Overview"
        description="Modals temporarily interrupt the current workflow to focus the user's attention."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Modals are commonly used for confirmations,
          forms, alerts and other focused interactions.
          They should be used sparingly and only when
          the user must complete or acknowledge an action.
        </p>

      </Section>

      <ComponentPreview
  title="Live Preview"
  description="Basic modal example."
>
  <Button onClick={() => setOpen(true)}  className="h-14 px-8 text-lg font-medium">
    Open Modal
  </Button>

 <Modal
  open={open}
  onOpenChange={setOpen}
  title="Delete Project"
>
    <p className="mb-6 text-slate-600">
      This action cannot be undone.
    </p>

    <div className="flex justify-end gap-3">
      <Button
        variant="outline"
        onClick={() => setOpen(false)}
      >
        Cancel
      </Button>

      <Button
        variant="danger"
        onClick={() => setOpen(false)}
      >
        Delete
      </Button>
    </div>
  </Modal>
</ComponentPreview>

      <Section
        title="Examples"
        description="Common modal patterns used throughout the product."
      >

        <div className="grid gap-8 md:grid-cols-2">

          <ModalExample
            label="Basic Modal"
            note={
              <>
                <strong>Basic modal:</strong> Standard dialog with title, description and actions.
              </>
            }
          >

            <ModalMock title="Delete Project">

              <p className="mb-4">This action cannot be undone.</p>

              <div className="flex justify-end gap-3">

                <Button variant="outline">Cancel</Button>

                <Button variant="danger">Delete</Button>

              </div>

            </ModalMock>

          </ModalExample>

          <ModalExample
            label="Confirmation Dialog"
            note={
              <>
                <strong>Confirmation dialog:</strong> Helps prevent destructive or irreversible actions.
              </>
            }
          >

            <ModalMock
              title="Delete Account"
              description="Are you sure you want to permanently delete your account? This action cannot be undone."
            >

              <div className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-4">

                <AlertTriangle
                  size={22}
                  className="mt-1 text-red-600"
                />

                <div>

                  <h3 className="font-semibold text-red-700">
                    Warning
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Deleting your account will permanently
                    remove all projects and personal data.
                  </p>

                </div>

              </div>

              <div className="mt-8 flex justify-end gap-3">

                <Button variant="outline">
                  Cancel
                </Button>

                <Button variant="danger">
                  Delete
                </Button>

              </div>

            </ModalMock>

          </ModalExample>

          <ModalExample
            label="Modal Sizes"
            span
            note={
              <>
                <strong>Modal sizes:</strong> Different modal widths for different content — small, medium and large.
              </>
            }
          >

            <ModalMock
              title="Small Modal"
              size="sm"
            >
              <p className="py-4 text-slate-500">Small modal content.</p>
            </ModalMock>

            <ModalMock
              title="Medium Modal"
              size="md"
            >
              <p className="py-4 text-slate-500">Medium modal content.</p>
            </ModalMock>

            <ModalMock
              title="Large Modal"
              size="lg"
            >
              <p className="py-4 text-slate-500">Large modal content.</p>
            </ModalMock>

          </ModalExample>

          <ModalExample
            label="Form Modal"
            note={
              <>
                <strong>Form modal:</strong> Commonly used to collect user information.
              </>
            }
          >

            <ModalMock
              title="Create New Project"
              description="Fill in the information below."
            >

              <div className="space-y-5">

                <input
                  className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  placeholder="Project Name"
                />

                <input
                  className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  placeholder="Client Name"
                />

                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3"
                  placeholder="Project Description"
                />

              </div>

              <div className="mt-8 flex justify-end gap-3">

                <Button variant="outline">
                  Cancel
                </Button>

                <Button>
                  Create Project
                </Button>

              </div>

            </ModalMock>

          </ModalExample>

          <ModalExample
            label="Information Modal"
            note={
              <>
                <strong>Information modal:</strong> Displays helpful information without requiring immediate action.
              </>
            }
          >

            <ModalMock
              title="Update Available"
            >

              <div className="flex gap-4">

                <CheckCircle
                  size={24}
                  className="mt-1 text-emerald-500"
                />

                <div>

                  <p className="text-slate-600">
                    Version 2.0 introduces improved
                    performance, accessibility updates
                    and new dashboard widgets.
                  </p>

                </div>

              </div>

              <div className="mt-8 flex justify-end">

                <Button>
                  Update Now
                </Button>

              </div>

            </ModalMock>

          </ModalExample>

          <ModalExample
            label="Scrollable Modal"
            note={
              <>
                <strong>Scrollable modal:</strong> Large amounts of content should scroll inside the modal rather than expanding beyond the viewport.
              </>
            }
          >

            <ModalMock
              title="Privacy Policy"
              size="lg"
            >

              <div className="max-h-72  space-y-4 overflow-y-auto pr-2">

                {Array.from({ length: 8 }).map((_, index) => (

                  <p
                    key={index}
                    className="leading-7 text-slate-600"
                  >
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Pellentesque habitant morbi
                    tristique senectus et netus
                    et malesuada fames ac turpis
                    egestas.
                  </p>

                ))}

              </div>

            </ModalMock>

          </ModalExample>

          <ModalExample
            label="Full-screen Modal"
            note={
              <>
                <strong>Full-screen modal:</strong> Ideal for onboarding flows, multi-step forms and document editing experiences on smaller devices.
              </>
            }
          >

            <div className="flex w-full max-w-md items-center gap-4 rounded-[8px] bg-white p-6">

              <Info
                className="text-blue-600"
                size={24}
              />

              <div>

                <h3 className="font-semibold">
                  Full-screen Experience
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Opens as a full-screen modal on
                  smaller devices.
                </p>

              </div>

            </div>

          </ModalExample>

        </div>

      </Section>

      <Section
        title="Accessibility"
        description="Modals should manage focus, keyboard interaction and screen reader support correctly."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Focus Management
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Move keyboard focus into the modal
              when it opens and return focus to
              the triggering element when it closes.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Keyboard Navigation
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Users should navigate inside the
              modal using the keyboard and close
              it using the Escape key.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Accessible Labels
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Every modal should include a clear
              title and description so screen
              readers understand its purpose.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Modal component."
      >

        <PropsTable
          props={[
            {
              name: "title",
              type: "string",
              defaultValue: "-",
              description: "Heading displayed at the top of the modal.",
            },
            {
              name: "description",
              type: "string",
              defaultValue: "-",
              description: "Supporting text displayed below the title.",
            },
            {
              name: "children",
              type: "ReactNode",
              defaultValue: "-",
              description: "Content rendered inside the modal.",
            },
            {
              name: "size",
              type: `"sm" | "md" | "lg" | "xl"`,
              defaultValue: `"md"`,
              description: "Controls the modal width.",
            },
            {
              name: "open",
              type: "boolean",
              defaultValue: "false",
              description: "Controls the modal visibility.",
            },
            {
              name: "onClose",
              type: "() => void",
              defaultValue: "-",
              description: "Called when the modal is dismissed.",
            },
            {
              name: "closeOnOverlayClick",
              type: "boolean",
              defaultValue: "true",
              description: "Closes the modal when clicking outside it.",
            },
          ]}
        />

      </Section>

     
            <Section
        title="Code Examples"
        description="Import and use the Modal component in different scenarios."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Modal } from "@/components/ui/modal";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Modal
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Modal
  title="Delete Project"
  description="This action cannot be undone."
>

  <Button variant="outline">
    Cancel
  </Button>

  <Button variant="danger">
    Delete
  </Button>

</Modal>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Controlled Modal
            </h3>

            <CodeBlock
              language="tsx"
              code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>
  Open Modal
</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Settings"
>
</Modal>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Confirmation Dialog
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Modal
  title="Delete Account"
>

  <Button variant="outline">
    Cancel
  </Button>

  <Button variant="danger">
    Delete
  </Button>

</Modal>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Form Modal
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Modal title="Create Project">

  <Input label="Project Name" />

  <Input label="Client" />

  <Button>
    Create
  </Button>

</Modal>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Large Modal
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Modal
  size="lg"
  title="Privacy Policy"
>

  ...

</Modal>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Best practices for creating clear and accessible modal dialogs."
      >

        <DoDont
          dos={[
            {
              title: "Focus on one task",
              description:
                "Each modal should help users complete a single action or decision.",
            },
            {
              title: "Provide clear actions",
              description:
                "Always include obvious primary and secondary actions.",
            },
            {
              title: "Support keyboard users",
              description:
                "Ensure focus trapping, Escape key support and logical tab order.",
            },
          ]}
          donts={[
            {
              title: "Don't stack multiple modals",
              description:
                "Opening several dialogs at once creates confusion and accessibility issues.",
            },
            {
              title: "Don't interrupt unnecessarily",
              description:
                "Reserve modals for important decisions or focused workflows.",
            },
            {
              title: "Don't hide the close option",
              description:
                "Users should always have a clear way to dismiss the modal.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for designing effective modal dialogs."
      >

       <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">


            <li>
              ✓ Use modals only for important interactions.
            </li>

            <li>
              ✓ Keep content focused on a single task.
            </li>

            <li>
              ✓ Always provide clear primary and secondary actions.
            </li>

            <li>
              ✓ Manage keyboard focus correctly.
            </li>

            <li>
              ✓ Support Escape key and overlay dismissal when appropriate.
            </li>

            <li>
              ✓ Ensure accessibility with semantic titles and descriptions.
            </li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}