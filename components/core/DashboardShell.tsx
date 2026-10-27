"use client";

import SidebarV6 from "@/components/blayzit/v6/ui/SidebarV6";
import HeaderV6 from "@/components/blayzit/v6/ui/HeaderV6";
import FooterV6 from "@/components/blayzit/v6/ui/FooterV6";

export function DashboardShell({ children }) {
  return (
    <div className="min-h-screen w-full flex bg-[#F7FAFC] text-slate-800">

      {/* Sidebar */}
      <SidebarV6 />

      {/* Contenido */}
      <div className="flex-1 flex flex-col">

        <HeaderV6 />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-10 py-12">

            {/* CONTENEDOR WOW */}
            <div className="rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10 border border-slate-100">
              {children}
            </div>

          </div>
        </main>

        <FooterV6 />
      </div>
    </div>
  );
}
