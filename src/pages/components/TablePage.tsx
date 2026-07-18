import {
  ArrowUpDown,
  Search,
  ChevronDown,
  Plus,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { Table } from "../../components/ui/table";

import { ComponentPage } from "../../components/docs/ComponentPage";
import { ComponentPreview } from "../../components/docs/ComponentPreview";
import { Section } from "../../components/docs/Section";
import { CodeBlock } from "../../components/docs/CodeBlock";
import { PropsTable } from "../../components/docs/PropsTable";
import { DoDont } from "../../components/docs/DoDont";

type UserStatus = "Active" | "Pending" | "Inactive";

type User = {
  name: string;
  email: string;
  role: string;
  status: UserStatus;
};

const users: User[] = [
  {
    name: "John Anderson",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Designer",
    status: "Active",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Developer",
    status: "Pending",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Manager",
    status: "Inactive",
  },
];

type OrderStatus = "Processing" | "Shipped" | "Delivered" | "Cancelled";

type Order = {
  id: string;
  customer: string;
  items: string;
  amount: string;
  status: OrderStatus;
  date: string;
};

const orders: Order[] = [
  { id: "#ORD-2847", customer: "Priya Sharma", items: "MacBook Pro 14\"", amount: "₹1,89,990", status: "Processing", date: "Apr 4, 2026" },
  { id: "#ORD-2841", customer: "Rohan Mehra", items: "iPhone 15 Pro", amount: "₹1,29,900", status: "Shipped", date: "Apr 3, 2026" },
  { id: "#ORD-2835", customer: "Anita Rao", items: "AirPods Pro 2", amount: "₹24,900", status: "Delivered", date: "Apr 1, 2026" },
  { id: "#ORD-2826", customer: "Dev Patel", items: "iPad Air 5", amount: "₹59,900", status: "Cancelled", date: "Mar 28, 2026" },
];

const orderStatusStyles: Record<OrderStatus, string> = {
  Processing: "bg-amber-50 text-amber-700",
  Shipped: "bg-blue-50 text-blue-700",
  Delivered: "bg-emerald-50 text-emerald-700",
  Cancelled: "bg-rose-50 text-rose-700",
};

const userStatusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Inactive: "bg-slate-100 text-slate-500",
};

export function TablePage() {
  return (
    <ComponentPage
      title="Table"
      description="Tables organize structured information into rows and columns for easy comparison."
    >

      <Section
        title="Overview"
        description="Tables are ideal for displaying large collections of structured data."
      >

        <p className="max-w-3xl leading-7 text-slate-600">
          Tables help users compare information,
          scan records and perform actions on
          structured datasets. They should remain
          readable, responsive and accessible.
        </p>

      </Section>

      <ComponentPreview
        title="Live Preview"
        description="Basic data table."
      >

        <Table hoverable>

          <Table.Head>

            <Table.Row>

              <Table.Header>Name</Table.Header>

              <Table.Header>Email</Table.Header>

              <Table.Header>Role</Table.Header>

              <Table.Header>Status</Table.Header>

            </Table.Row>

          </Table.Head>

          <Table.Body>

            {users.map((user) => (

              <Table.Row key={user.email}>

                <Table.Cell>{user.name}</Table.Cell>

                <Table.Cell>{user.email}</Table.Cell>

                <Table.Cell>{user.role}</Table.Cell>

                <Table.Cell>
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${userStatusStyles[user.status]}`}
                  >
                    {user.status}
                  </span>
                </Table.Cell>

              </Table.Row>

            ))}

          </Table.Body>

        </Table>

      </ComponentPreview>

      <Section
        title="Basic Table"
        description="Simple table displaying structured information."
      >

        <Table>

          <Table.Head>

            <Table.Row>

              <Table.Header>Name</Table.Header>

              <Table.Header>Department</Table.Header>

              <Table.Header>Status</Table.Header>

            </Table.Row>

          </Table.Head>

          <Table.Body>

            <Table.Row>

              <Table.Cell>John</Table.Cell>

              <Table.Cell>Engineering</Table.Cell>

              <Table.Cell>Active</Table.Cell>

            </Table.Row>

            <Table.Row>

              <Table.Cell>Sarah</Table.Cell>

              <Table.Cell>Design</Table.Cell>

              <Table.Cell>Active</Table.Cell>

            </Table.Row>

            <Table.Row>

              <Table.Cell>Emily</Table.Cell>

              <Table.Cell>Marketing</Table.Cell>

              <Table.Cell>Pending</Table.Cell>

            </Table.Row>

          </Table.Body>

        </Table>

      </Section>

      <Section
        title="Striped Rows"
        description="Alternating row backgrounds improve readability in large datasets."
      >

        <Table striped>

          <Table.Head>

            <Table.Row>

              <Table.Header>Name</Table.Header>

              <Table.Header>Team</Table.Header>

              <Table.Header>Status</Table.Header>

            </Table.Row>

          </Table.Head>

          <Table.Body>

            {users.map((user) => (

              <Table.Row key={user.email}>

                <Table.Cell>{user.name}</Table.Cell>

                <Table.Cell>{user.role}</Table.Cell>

                <Table.Cell>{user.status}</Table.Cell>

              </Table.Row>

            ))}

          </Table.Body>

        </Table>

      </Section>

      <Section
        title="Hoverable Rows"
        description="Highlight rows on hover to improve discoverability."
      >

        <Table hoverable>

          <Table.Head>

            <Table.Row>

              <Table.Header>Name</Table.Header>

              <Table.Header>Email</Table.Header>

              <Table.Header>Role</Table.Header>

            </Table.Row>

          </Table.Head>

          <Table.Body>

            {users.map((user) => (

              <Table.Row key={user.email}>

                <Table.Cell>{user.name}</Table.Cell>

                <Table.Cell>{user.email}</Table.Cell>

                <Table.Cell>{user.role}</Table.Cell>

              </Table.Row>

            ))}

          </Table.Body>

        </Table>

      </Section>

      <Section
        title="Sortable Table"
        description="Allow users to sort information by clicking table headers."
      >

        <Table>

          <Table.Head>

            <Table.Row>

              <Table.Header>

                <button className="flex items-center gap-2">

                  Name

                  <ArrowUpDown size={16} />

                </button>

              </Table.Header>

              <Table.Header>

                <button className="flex items-center gap-2">

                  Role

                  <ArrowUpDown size={16} />

                </button>

              </Table.Header>

              <Table.Header>Status</Table.Header>

            </Table.Row>

          </Table.Head>

          <Table.Body>

            {users.map((user) => (

              <Table.Row key={user.email}>

                <Table.Cell>{user.name}</Table.Cell>

                <Table.Cell>{user.role}</Table.Cell>

                <Table.Cell>{user.status}</Table.Cell>

              </Table.Row>

            ))}

          </Table.Body>

        </Table>

      </Section>

      <Section
        title="Selectable Rows"
        description="Enable row selection for bulk actions."

      >

        <Table>

          <Table.Head>

            <Table.Row>

              <Table.Header>
                <input type="checkbox" />
              </Table.Header>

              <Table.Header>Name</Table.Header>

              <Table.Header>Email</Table.Header>

            </Table.Row>

          </Table.Head>

          <Table.Body>

            {users.map((user) => (

              <Table.Row key={user.email}>

                <Table.Cell>
                  <input type="checkbox" />
                </Table.Cell>

                <Table.Cell>{user.name}</Table.Cell>

                <Table.Cell>{user.email}</Table.Cell>

              </Table.Row>

            ))}

          </Table.Body>

        </Table>

      </Section>

      <Section
        title="Responsive Table"
        description="Wrap tables inside a horizontal container for smaller screens."
      >

        <div className="overflow-x-auto ">

          <Table>

            <Table.Head>

              <Table.Row>

                <Table.Header>Name</Table.Header>

                <Table.Header>Email</Table.Header>

                <Table.Header>Role</Table.Header>

                <Table.Header>Status</Table.Header>

                <Table.Header>Department</Table.Header>

                <Table.Header>Location</Table.Header>

              </Table.Row>

            </Table.Head>

            <Table.Body>

              {users.map((user) => (

                <Table.Row key={user.email}>

                  <Table.Cell>{user.name}</Table.Cell>

                  <Table.Cell>{user.email}</Table.Cell>

                  <Table.Cell>{user.role}</Table.Cell>

                  <Table.Cell>{user.status}</Table.Cell>

                  <Table.Cell>Engineering</Table.Cell>

                  <Table.Cell>New York</Table.Cell>

                </Table.Row>

              ))}

            </Table.Body>

          </Table>

        </div>

      </Section>

      <Section
        title="Table Toolbar"
        description="Combine search and actions above large datasets."
      >

       
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <Button
              variant="outline"
              leftIcon={<Search size={16} />}
            >
              Search
            </Button>

            <Button>
              Add User
            </Button>

          </div>

          <Table>

            <Table.Head>

              <Table.Row>

                <Table.Header>Name</Table.Header>

                <Table.Header>Role</Table.Header>

                <Table.Header>Status</Table.Header>

              </Table.Row>

            </Table.Head>

            <Table.Body>

              {users.map((user) => (

                <Table.Row key={user.email}>

                  <Table.Cell>{user.name}</Table.Cell>

                  <Table.Cell>{user.role}</Table.Cell>

                  <Table.Cell>{user.status}</Table.Cell>

                </Table.Row>

              ))}

            </Table.Body>

          </Table>

        

      </Section>

      <Section
        title="Examples"
        description="Realistic compositions combining Table with filters, actions and pagination."
      >

        
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            E-commerce Admin — Orders Table with Filters
          </p>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" rightIcon={<ChevronDown size={14} />}>
                Status
              </Button>
              <Button variant="outline" rightIcon={<ChevronDown size={14} />}>
                Date
              </Button>
              <Button leftIcon={<Plus size={14} />}>
                Export
              </Button>
            </div>

          </div>

          <Table hoverable>

            <Table.Head>
              <Table.Row>
                <Table.Header>Order ID</Table.Header>
                <Table.Header>Customer</Table.Header>
                <Table.Header>Items</Table.Header>
                <Table.Header>Amount</Table.Header>
                <Table.Header>Status</Table.Header>
                <Table.Header>Date</Table.Header>
                <Table.Header>Action</Table.Header>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {orders.map((order) => (
                <Table.Row key={order.id}>
                  <Table.Cell>
                    <span className="font-mono text-xs text-blue-600">{order.id}</span>
                  </Table.Cell>
                  <Table.Cell>{order.customer}</Table.Cell>
                  <Table.Cell>{order.items}</Table.Cell>
                  <Table.Cell>{order.amount}</Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${orderStatusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </Table.Cell>
                  <Table.Cell>{order.date}</Table.Cell>
                  <Table.Cell>
                    <Button variant="outline">View</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

          </Table>

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">Showing 4 of 247 orders</p>
            <div className="flex items-center gap-2">
              <Button variant="outline">← Prev</Button>
              <Button variant="outline">Next →</Button>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-400">
            <span className="font-semibold text-slate-500">Patterns:</span>{" "}
            Table.Header → filter bar + export button. Table.Body → rows with status badge. Footer → pagination controls.
          </p>

       

      </Section>

      <Section
        title="Accessibility"
        description="Tables should remain readable, navigable and understandable for all users."
      >

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-[12px] border border-emerald-200 bg-emerald-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-emerald-700">
              ✓ Semantic Structure
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Use semantic table elements so
              assistive technologies correctly
              interpret rows, columns and headers.
            </p>

          </div>

          <div className="rounded-[12px] border border-blue-200 bg-blue-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-blue-700">
              ✓ Keyboard Navigation
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Interactive tables should support
              keyboard navigation for sorting,
              selection and row actions.
            </p>

          </div>

          <div className="rounded-[12px] border border-amber-200 bg-amber-50 p-6 shadow-sm transition-shadow hover:shadow-md">

            <h3 className="mb-3 font-semibold text-amber-700">
              ✓ Responsive Layout
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Large datasets should remain usable
              on smaller screens using horizontal
              scrolling or responsive layouts.
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Props"
        description="Public API of the Table component."
      >

        <PropsTable
          props={[
            {
              name: "children",
              type: "ReactNode",
              defaultValue: "-",
              description: "Table content including header, body and rows.",
            },
            {
              name: "striped",
              type: "boolean",
              defaultValue: "false",
              description: "Displays alternating row backgrounds.",
            },
            {
              name: "hoverable",
              type: "boolean",
              defaultValue: "false",
              description: "Highlights rows when hovered.",
            },
            {
              name: "responsive",
              type: "boolean",
              defaultValue: "true",
              description: "Allows horizontal scrolling on smaller screens.",
            },
            {
              name: "className",
              type: "string",
              defaultValue: "-",
              description: "Additional Tailwind CSS classes.",
            },
          ]}
        />

      </Section>

     

      <Section
        title="Code Examples"
        description="Import and use the Table component in common data display scenarios."
      >

        <div className="space-y-8">

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Import
            </h3>

            <CodeBlock
              language="tsx"
              code={`import { Table } from "@/components/ui/table";`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Basic Table
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Table>

  <Table.Head>

    <Table.Row>

      <Table.Header>Name</Table.Header>

      <Table.Header>Email</Table.Header>

    </Table.Row>

  </Table.Head>

  <Table.Body>

    <Table.Row>

      <Table.Cell>John</Table.Cell>

      <Table.Cell>john@example.com</Table.Cell>

    </Table.Row>

  </Table.Body>

</Table>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Striped Rows
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Table striped>

  ...

</Table>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Hoverable Rows
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Table hoverable>

  ...

</Table>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Sortable Header
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Table.Header>

  <button className="flex items-center gap-2">

    Name

    <ArrowUpDown size={16} />

  </button>

</Table.Header>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Selectable Rows
            </h3>

            <CodeBlock
              language="tsx"
              code={`<Table.Row>

  <Table.Cell>

    <input type="checkbox" />

  </Table.Cell>

</Table.Row>`}
            />

          </div>

          <div>

            <h3 className="mb-4 text-lg font-semibold">
              Responsive Table
            </h3>

            <CodeBlock
              language="tsx"
              code={`<div className="overflow-x-auto">

  <Table>

    ...

  </Table>

</div>`}
            />

          </div>

        </div>

      </Section>

      <Section
        title="Do & Don't"
        description="Follow these best practices when displaying structured data."
      >

        <DoDont
          dos={[
            {
              title: "Use meaningful column headers",
              description:
                "Help users quickly understand the information in each column.",
            },
            {
              title: "Keep data aligned",
              description:
                "Use consistent alignment to improve readability across rows.",
            },
            {
              title: "Support sorting and filtering",
              description:
                "Provide tools to help users navigate large datasets efficiently.",
            },
          ]}
          donts={[
            {
              title: "Don't overload tables",
              description:
                "Avoid displaying unnecessary columns or excessive information.",
            },
            {
              title: "Don't hide important actions",
              description:
                "Frequently used actions should remain visible and easy to access.",
            },
            {
              title: "Don't ignore mobile users",
              description:
                "Ensure large tables remain usable on smaller screens.",
            },
          ]}
        />

      </Section>

      <Section
        title="Summary"
        description="Key principles for designing effective data tables."
      >

        <div className="relative overflow-hidden rounded-[12px] border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50 to-slate-50 p-6">

          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/40 to-slate-200/40 blur-2xl" />

          <ul className="relative space-y-3 text-blue-950">

            <li>
              ✓ Use semantic table elements for accessibility.
            </li>

            <li>
              ✓ Keep column headers concise and descriptive.
            </li>

            <li>
              ✓ Support sorting, selection and responsive layouts.
            </li>

            <li>
              ✓ Maintain consistent spacing and alignment.
            </li>

            <li>
              ✓ Highlight interactive rows and actions clearly.
            </li>

            <li>
              ✓ Optimize tables for both desktop and mobile devices.
            </li>

          </ul>

        </div>

      </Section>

    </ComponentPage>
  );
}