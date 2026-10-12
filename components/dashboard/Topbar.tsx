"use client";

import TenantSelector from "@/app/dashboard/state/TenantSelector";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">
          DNIP Dashboard
        </h2>
        <p className="text-sm text-slate-400">
          Decision & Intelligence Processing
        </p>
      </div>

      <TenantSelector />
    </header>
  );
}
