//components/dashboard/DashboardShell.tsx
"use client";

import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardShell({ children }) {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
