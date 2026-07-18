import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  Bell,
  Download,
} from "lucide-react";

import { Button } from "../../components/ui/button";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";


function Dropdown({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleOpen() {
    if (!open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
    setOpen((prev) => !prev);
  }

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-block"
        onClick={toggleOpen}
      >
        {trigger}
      </div>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            style={{ position: "absolute", top: coords.top, left: coords.left }}
            className="z-50 min-w-[200px] rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg"
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
}

function DropdownItem({
  children,
  leftIcon,
  variant,
  disabled,
}: {
  children: ReactNode;
  leftIcon?: ReactNode;
  variant?: "danger";
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
        disabled
          ? "cursor-not-allowed text-slate-300"
          : variant === "danger"
          ? "text-red-600 hover:bg-red-50"
          : "text-slate-700 hover:bg-slate-100",
      ].join(" ")}
    >
      {leftIcon}
      {children}
    </button>
  );
}

function DropdownLabel({ children }: { children: ReactNode }) {
  return (
    <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
      {children}
    </p>
  );
}

Dropdown.Item = DropdownItem;
Dropdown.Label = DropdownLabel;


function DropdownExample({ label, note, children }: { label: string; note?: ReactNode; children: ReactNode }) {
  return (

    <div className="relative flex h-full flex-col rounded-[12px] border border-slate-200 bg-white">
      <div className="rounded-t-[12px] border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
        <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {label}
        </span>
      </div>
 
      <div className="flex flex-1 flex-col items-start justify-center gap-4 p-4 sm:p-5">
        {children}
      </div>
 
      {note && (
        <div className="mt-auto rounded-b-[12px] border-t border-slate-100 bg-slate-50/60 px-4 py-3 text-sm leading-6 text-slate-600 sm:px-5">
          {note}
        </div>
      )}
    </div>
  );
}

export function DropdownPage() {
  return (
    <ComponentPage
      title="Dropdown"
      description="Dropdowns display a list of actions or options in a compact and accessible menu."
    >

      <Section
        title="Overview"
        description="Dropdowns help organize actions while saving screen space."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Dropdown menus reveal additional options
          only when needed. They are commonly used
          for navigation, user menus, filters and
          contextual actions.
        </p>

      </Section>

     
 <Section
        title="Examples"
        description="Common dropdown patterns used throughout the product."
      >
 
        <div className="space-y-10">
 
          <div>
 
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Structure & Variants
            </p>
 
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
 
              <DropdownExample
                label="Basic Dropdown"
                note={"Basic dropdown: Simple action menu."}
              >
 
                <Dropdown
                  trigger={
                    <Button
                      variant="outline"
                      rightIcon={<ChevronDown size={16} />}
                    >
                      Actions
                    </Button>
                  }
                >
 
                  <Dropdown.Item>
                    Edit
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Duplicate
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Delete
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
              <DropdownExample
                label="Variants"
                note={
                  <>
                    <strong className="text-slate-900">Variants:</strong> Dropdowns can contain different categories of actions.
                  </>
                }
              >
 
                <div className="flex flex-wrap items-center gap-4">
 
                  <Dropdown
                    trigger={
                      <Button>
                        Menu
                      </Button>
                    }
                  >
 
                    <Dropdown.Item>
                      Dashboard
                    </Dropdown.Item>
 
                    <Dropdown.Item>
                      Analytics
                    </Dropdown.Item>
 
                    <Dropdown.Item>
                      Reports
                    </Dropdown.Item>
 
                  </Dropdown>
 
                  <Dropdown
                    trigger={
                      <Button variant="secondary">
                        Secondary
                      </Button>
                    }
                  >
 
                    <Dropdown.Item>
                      Option One
                    </Dropdown.Item>
 
                    <Dropdown.Item>
                      Option Two
                    </Dropdown.Item>
 
                  </Dropdown>
 
                </div>
 
              </DropdownExample>
 
              <DropdownExample
                label="Menu with Icons"
                note={
                  <>
                    <strong className="text-slate-900">Menu with icons:</strong> Icons improve recognition and scanning speed.
                  </>
                }
              >
 
                <Dropdown
                  trigger={
                    <Button
                      rightIcon={<ChevronDown size={16} />}
                    >
                      Downloads
                    </Button>
                  }
                >
 
                  <Dropdown.Item
                    leftIcon={<Download size={16} />}
                  >
                    Download PDF
                  </Dropdown.Item>
 
                  <Dropdown.Item
                    leftIcon={<Download size={16} />}
                  >
                    Download ZIP
                  </Dropdown.Item>
 
                  <Dropdown.Item
                    leftIcon={<Download size={16} />}
                  >
                    Export CSV
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
              <DropdownExample
                label="Disabled Items"
                note={
                  <>
                    <strong className="text-slate-900">Disabled items:</strong> Unavailable actions should be clearly disabled.
                  </>
                }
              >
 
                <Dropdown
                  trigger={
                    <Button
                      rightIcon={<ChevronDown size={16} />}
                    >
                      File
                    </Button>
                  }
                >
 
                  <Dropdown.Item>
                    New File
                  </Dropdown.Item>
 
                  <Dropdown.Item disabled>
                    Rename
                  </Dropdown.Item>
 
                  <Dropdown.Item disabled>
                    Move
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Delete
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
            </div>
 
          </div>
 
          <div>
 
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Real-World Patterns
            </p>
 
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
 
              <DropdownExample
                label="User Menu"
                note={
                  <>
                    <strong className="text-slate-900">User menu:</strong> Dropdowns are commonly used for user profile actions.
                  </>
                }
              >
 
                <Dropdown
                  trigger={
                    <Button
                      rightIcon={<ChevronDown size={16} />}
                    >
                      John Doe
                    </Button>
                  }
                >
 
                  <Dropdown.Item
                    leftIcon={<User size={16} />}
                  >
                    Profile
                  </Dropdown.Item>
 
                  <Dropdown.Item
                    leftIcon={<Settings size={16} />}
                  >
                    Settings
                  </Dropdown.Item>
 
                  <Dropdown.Item
                    leftIcon={<Bell size={16} />}
                  >
                    Notifications
                  </Dropdown.Item>
 
                  <hr className="my-1 border-t border-slate-200" />
 
                  <Dropdown.Item
                    leftIcon={<LogOut size={16} />}
                    variant="danger"
                  >
                    Sign Out
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
              <DropdownExample
                label="Navigation Menu"
                note={
                  <>
                    <strong className="text-slate-900">Navigation menu:</strong> Use dropdowns to organize navigation links.
                  </>
                }
              >
 
                <Dropdown
                  trigger={
                    <Button
                      variant="outline"
                      rightIcon={<ChevronDown size={16} />}
                    >
                      Products
                    </Button>
                  }
                >
 
                  <Dropdown.Item>
                    Design System
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    UI Components
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Templates
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Resources
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
              <DropdownExample
                label="Action Menu"
                note={
                  <>
                    <strong className="text-slate-900">Action menu:</strong> Display contextual actions related to a specific item.
                  </>
                }
              >
 
                <Dropdown
                  trigger={
                    <Button
                      variant="ghost"
                      rightIcon={<ChevronDown size={16} />}
                    >
                      Actions
                    </Button>
                  }
                >
 
                  <Dropdown.Item>
                    Edit
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Duplicate
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Share
                  </Dropdown.Item>
 
                  <hr className="my-1 border-t border-slate-200" />
 
                  <Dropdown.Item
                    variant="danger"
                  >
                    Delete
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
              <DropdownExample
                label="Grouped Menu"
                note={
                  <>
                    <strong className="text-slate-900">Grouped menu:</strong> Separate related actions using groups and dividers.
                  </>
                }
              >
 
                <Dropdown
                  trigger={
                    <Button
                      variant="secondary"
                      rightIcon={<ChevronDown size={16} />}
                    >
                      Account
                    </Button>
                  }
                >
 
                  <Dropdown.Label>
                    Account
                  </Dropdown.Label>
 
                  <Dropdown.Item>
                    Profile
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Billing
                  </Dropdown.Item>
 
                  <hr className="my-1 border-t border-slate-200" />
 
                  <Dropdown.Label>
                    Workspace
                  </Dropdown.Label>
 
                  <Dropdown.Item>
                    Members
                  </Dropdown.Item>
 
                  <Dropdown.Item>
                    Settings
                  </Dropdown.Item>
 
                  <hr className="my-1 border-t border-slate-200" />
 
                  <Dropdown.Item
                    variant="danger"
                  >
                    Delete Workspace
                  </Dropdown.Item>
 
                </Dropdown>
 
              </DropdownExample>
 
            </div>
 
          </div>
 
        </div>
 
      </Section>
 

      <Section
        title="Accessibility"
        description="Dropdown menus should be fully accessible using keyboard and screen readers."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Keyboard Navigation
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Users should open menus with the keyboard,
              move between items using arrow keys and
              activate items with Enter or Space.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Focus Management
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Focus should move into the menu when it
              opens and return to the trigger after
              the menu closes.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Clear Labels
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Every menu item should have meaningful
              labels so users immediately understand
              each available action.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Dropdown component."
      >

        <PropsTable
          props={[
            {
              name: "trigger",
              type: "ReactNode",
              defaultValue: "-",
              description: "Element used to open the dropdown menu.",
            },
            {
              name: "children",
              type: "ReactNode",
              defaultValue: "-",
              description: "Dropdown content including items and groups.",
            },
            {
              name: "placement",
              type: `"top" | "bottom" | "left" | "right"`,
              defaultValue: `"bottom"`,
              description: "Controls where the dropdown appears.",
            },
            {
              name: "open",
              type: "boolean",
              defaultValue: "false",
              description: "Controls the visibility of the dropdown.",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              defaultValue: "-",
              description: "Called whenever the dropdown opens or closes.",
            },
            {
              name: "disabled",
              type: "boolean",
              defaultValue: "false",
              description: "Disables the dropdown trigger.",
            },
          ]}
        />

      </Section>

    
            <Section
        title="Code Examples"
        description="Import and use the Dropdown component in different scenarios."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Dropdown } from "@/components/ui/dropdown";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Dropdown
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Dropdown
  trigger={<Button>Options</Button>}
>

  <Dropdown.Item>
    Profile
  </Dropdown.Item>

  <Dropdown.Item>
    Settings
  </Dropdown.Item>

</Dropdown>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              User Menu
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Dropdown
  trigger={<Button>John Doe</Button>}
>

  <Dropdown.Item
    leftIcon={<User size={16} />}
  >
    Profile
  </Dropdown.Item>

  <Dropdown.Item
    leftIcon={<Settings size={16} />}
  >
    Settings
  </Dropdown.Item>

  <Dropdown.Item
    variant="danger"
    leftIcon={<LogOut size={16} />}
  >
    Sign Out
  </Dropdown.Item>

</Dropdown>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Grouped Menu
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Dropdown>

  <Dropdown.Label>
    Account
  </Dropdown.Label>

  <Dropdown.Item>
    Profile
  </Dropdown.Item>

  <Dropdown.Divider />

  <Dropdown.Label>
    Workspace
  </Dropdown.Label>

  <Dropdown.Item>
    Members
  </Dropdown.Item>

</Dropdown>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Controlled Dropdown
            </h3>

            <CodeBlock
              language="tsx"
              code={`const [open, setOpen] = useState(false);

<Dropdown
  open={open}
  onOpenChange={setOpen}
  trigger={<Button>Menu</Button>}
>

  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>

</Dropdown>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Best practices for designing clear and accessible dropdown menus."
      >

        <DoDont
          dos={[
            {
              title: "Group related actions",
              description:
                "Organize similar actions together using labels and dividers.",
            },
            {
              title: "Use concise labels",
              description:
                "Keep menu items short and easy to scan.",
            },
            {
              title: "Support keyboard navigation",
              description:
                "Ensure menus work correctly with keyboard interaction.",
            },
          ]}
          donts={[
            {
              title: "Don't overload menus",
              description:
                "Avoid very long dropdowns with dozens of options.",
            },
            {
              title: "Don't hide critical actions",
              description:
                "Frequently used actions should remain easily discoverable.",
            },
            {
              title: "Don't mix unrelated actions",
              description:
                "Separate different categories with labels or dividers.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for designing effective dropdown menus."
      >

        <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">
 <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>
              ✓ Organize related actions into logical groups.
            </li>

            <li>
              ✓ Keep labels concise and meaningful.
            </li>

            <li>
              ✓ Support keyboard and screen reader accessibility.
            </li>

            <li>
              ✓ Use icons only when they improve recognition.
            </li>

            <li>
              ✓ Clearly separate destructive actions.
            </li>

            <li>
              ✓ Keep menus focused and easy to scan.
            </li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}