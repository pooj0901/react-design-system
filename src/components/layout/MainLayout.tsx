import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Topbar } from "./Topbar";

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
  <Sidebar
    isOpen={sidebarOpen}
    onClose={() => setSidebarOpen(false)}
  />

  <div className="flex min-w-0 flex-1 flex-col">
    <Topbar onMenuClick={() => setSidebarOpen(true)} />

    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <Outlet />
    </main>
  </div>
</div>
  );
}

export default MainLayout;