import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";


type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigation = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Research",
        path: "/research",
      },
    ],
  },

  {
    title: "TOKENS",
    items: [
      {
        label: "Design Tokens",
        path: "/tokens",
      },
      {
        label: "Colors",
        path: "/colors",
      },
      {
        label: "Typography",
        path: "/typography",
      },
      {
        label: "Spacing",
        path: "/spacing",
      },
      {
        label: "Border Radius",
        path: "/radius",
      },
      {
        label: "Shadow",
        path: "/shadow",
      },
      {
        label: "Icons",
        path: "/icons",
      },
      {
        label: "Motion",
        path: "/motion",
      },
      {
        label: "Grid",
        path: "/grid",
      },
    ],
  },

  {
    title: "COMPONENTS",
    items: [
      {
        label: "Button",
        path: "/button",
      },
      {
        label: "Input",
        path: "/input",
      },
      {
        label: "Checkbox",
        path: "/checkbox",
      },
      {
        label: "Badge",
        path: "/badge",
      },
      {
        label: "Card",
        path: "/card",
      },
      {
        label: "Modal",
        path: "/modal",
      },
      {
        label: "Dropdown",
        path: "/dropdown",
      },
      {
        label: "Alert",
        path: "/alert",
      },
      {
        label: "Tooltip",
        path: "/tooltip",
      },
      {
        label: "Toast",
        path: "/toast",
      },
      {
        label: "Tabs",
        path: "/tabs",
      },
    ],
  },

  {
    title: "DOCUMENTATION",
    items: [
      {
        label: "Version History",
        path: "/versionhistory",
      },
    ],
  },
];


export function Sidebar({ isOpen, onClose }: SidebarProps) {
   const [search, setSearch] = useState("");

  return (
    <>
     
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

    <aside
  className={`
    fixed inset-y-0 left-0 z-50
    flex h-screen w-72 flex-col
    border-r border-slate-200 bg-white
    transition-transform duration-300 ease-in-out

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:relative
    lg:translate-x-0
    lg:h-screen
    lg:flex-shrink-0
  `}
>
        
       <div className="border-b border-slate-200 p-4 sm:p-5 lg:p-6">
          <div className="mb-5 flex items-center justify-between">
          <div className="min-w-0 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-blue-600 font-bold text-white">
                DS
              </div>

              <div className="min-w-0">
             <h1 className="truncate text-lg font-bold lg:text-xl">
                  Design System
                </h1>

                <p className="text-xs text-slate-500">
                  React Design System
                </p>
              </div>
            </div>

          
            <button
              onClick={onClose}
              className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

         <SearchBar
  value={search}
  onChange={setSearch}
/>

        </div>

      
  <nav className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6">
  {navigation
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0)
    .map((group) => (
      <div key={group.title} className="mb-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          {group.title}
        </h3>

        <div className="space-y-1">
          {group.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    ))}

  
  {navigation.every(
    (group) =>
      group.items.filter((item) =>
        item.label
          .toLowerCase()
          .includes(search.toLowerCase())
      ).length === 0
  ) && (
    <p className="py-8 text-center text-sm text-slate-500">
      No matching pages found.
    </p>
  )}
</nav>
      </aside>
    </>
  );
}