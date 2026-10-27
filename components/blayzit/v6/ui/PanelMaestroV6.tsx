"use client";

import SidebarV6 from "./SidebarV6";
import TopbarV6 from "./TopbarV6";

export default function PanelMaestroV6({ children }) {
  return (
    <div className="flex w-full min-h-screen overflow-auto bg-white">

      {/* Sidebar */}
      <SidebarV6 />

      {/* Contenido */}
      <div className="flex flex-col w-full min-h-screen overflow-auto">

        {/* Topbar */}
        <TopbarV6 />

        {/* Contenido principal */}
        <main className="w-full min-h-screen overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
