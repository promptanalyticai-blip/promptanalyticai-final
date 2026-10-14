//components/dashboard/DashboardShell.tsx
"use client";

import { ReactNode } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardTopbar from "@/components/DashboardTopbar";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { UserProvider } from "@/components/providers/UserProvider";

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="flex h-screen bg-gray-50">
          {/* SIDEBAR ENTERPRISE */}
          <DashboardSidebar />

          {/* CONTENEDOR PRINCIPAL */}
          <div className="flex flex-col flex-1 overflow-hidden">

            {/* TOPBAR ENTERPRISE */}
            <DashboardTopbar />

            {/* CONTENIDO */}
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
