import { FaGithub, FaFigma } from "react-icons/fa";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

type TopbarProps = {
  onMenuClick: () => void;
};

const pageTitles: Record<string, string> = {
  "/": "Home",

  "/research": "Research",

  "/tokens": "Design Tokens",
  "/colors": "Colors",
  "/typography": "Typography",
  "/spacing": "Spacing",
  "/radius": "Border Radius",
  "/shadow": "Shadow",
  "/icons": "Icons",
  "/motion": "Motion",
  "/grid": "Grid",

  "/button": "Button",
  "/input": "Input",
  "/checkbox": "Checkbox",
  "/badge": "Badge",
  "/card": "Card",
  "/modal": "Modal",
  "/dropdown": "Dropdown",
  "/alert": "Alert",
  "/tooltip": "Tooltip",
  "/toast": "Toast",
  "/tabs": "Tabs",

  "/versionhistory": "Version History",
};

export function Topbar({ onMenuClick }: TopbarProps) {
  const { pathname } = useLocation();

  const currentPage = pageTitles[pathname] ?? "Documentation";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6 lg:px-8">
     
      <div className="flex items-center gap-4">
      
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Documentation
          </p>

          <h2 className="text-lg font-semibold text-slate-900">
            {currentPage}
          </h2>
        </div>
      </div>

    
      <div className="flex items-center gap-2 md:gap-3">
        <a
          href="https://github.com/pooj0901"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-center rounded-lg border border-slate-200 px-3 transition hover:bg-slate-100 md:gap-2 md:px-4"
        >
          <FaGithub size={18} />
          <span className="hidden md:inline text-sm font-medium">
            GitHub
          </span>
        </a>

        <a
          href="https://www.figma.com/design/q3ND2vCKyM6q9ckcTkCd1E/Design-Systems?node-id=392-2&t=3eeIRiZMSmXrxYRf-1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center justify-center rounded-lg border border-slate-200 px-3 transition hover:bg-slate-100 md:gap-2 md:px-4"
        >
          <FaFigma size={18} />
          <span className="hidden md:inline text-sm font-medium">
            Figma
          </span>
        </a>
      </div>
    </header>
  );
}