//app/dashboard/components/WOWLayout.tsx
"use client";

import { getHybridWOW } from "@/lib/wow-hybrid";
import WOWNavbar from "./WOWNavbar";
import WOWBreadcrumbs from "./WOWBreadcrumbs";
import WOWFooter from "./WOWFooter";

export default function WOWLayout({ level, role, children }: any) {
  const wow = getHybridWOW(level.level, role);

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-700 
        ${wow.theme === "gradient-blue-soft" ? "bg-gradient-to-br from-blue-50 to-blue-200" : ""}
        ${wow.theme === "gradient-blue-gray" ? "bg-gradient-to-br from-gray-50 to-blue-200" : ""}
        ${wow.theme === "gradient-dark-blue" ? "bg-gradient-to-br from-blue-900 to-blue-700" : ""}
      `}
    >
      {/* NAVBAR */}
      <WOWNavbar wow={wow} user={{ role, level }} />

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside
          className={`w-64 p-6 border-r border-white/20 
            ${wow.tone === "executive" ? "text-yellow-300" : ""}
            ${wow.tone === "operational" ? "text-green-300" : ""}
            ${wow.tone === "technical" ? "text-indigo-300" : ""}
            ${wow.tone === "light" ? "text-blue-700" : ""}
          `}
        >
          <h2 className="text-2xl font-bold mb-6">Menú</h2>

          <nav className="space-y-4">
            {wow.permissions.canViewDNIP && (
              <a href="/dnip" className="block hover:opacity-80">DNIP</a>
            )}

            {wow.permissions.canViewADIP && (
              <a href="/adip" className="block hover:opacity-80">ADIP</a>
            )}

            {wow.permissions.canViewBlayzit && (
              <a href="/blayzit" className="block hover:opacity-80">BLAYZIT Admin</a>
            )}

            <a href="/dashboard" className="block hover:opacity-80">Dashboard</a>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-10">
          <WOWBreadcrumbs wow={wow} path={typeof window !== "undefined" ? window.location.pathname : ""} />
          {children}
        </main>
      </div>

      {/* FOOTER */}
      <WOWFooter wow={wow} />
    </div>
  );
}
