import { Moon } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">


      <div>
        <p className="text-sm text-slate-500">
          Documentation
        </p>

        <h2 className="text-lg font-semibold">
          Design System
        </h2>
      </div>

     
      <div className="flex items-center gap-3">

        <button className="flex h-10 items-center gap-2 rounded-[12px] border border-slate-200 px-4 text-sm font-medium transition hover:bg-slate-100">
          <FaGithub size={18} />
          GitHub
        </button>

        <button className="flex h-10 items-center gap-2 rounded-[12px] border border-slate-200 px-4 text-sm font-medium transition hover:bg-slate-100">
          <FaFigma size={18} />
          Figma
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition hover:bg-slate-100">
          <Moon size={18} />
        </button>

      </div>

    </header>
  );
}