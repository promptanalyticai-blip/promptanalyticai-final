"use client";

import { ReactNode } from "react";

import DashboardSidebar from "@/components/core/DashboardSidebar";
import DashboardTopbar from "@/components/core/DashboardTopbar";

import { ThemeProvider } from "@/app/core/providers/ThemeProvider";
import { UserProvider } from "@/core/providers/UserProvider";

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="flex h-screen bg-slate-950 text-slate-200">
          <DashboardSidebar />

          <div className="flex flex-col flex-1 overflow-hidden">
            <DashboardTopbar />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
