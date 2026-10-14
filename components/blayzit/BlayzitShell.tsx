// components/blayzit/BlayzitShell.tsx
"use client";

import DashboardSidebar from "@/components/core/DashboardSidebar";
import DashboardTopbar from "@/components/core/DashboardTopbar";

export default function BlayzitShell({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900">
      <DashboardSidebar />

      <div className="flex flex-col flex-1">
        <DashboardTopbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
