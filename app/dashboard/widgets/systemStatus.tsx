//app/dashboard/widgets/systemStatus.tsx
"use client";

import { useEffect, useState } from "react";
import { useDashboardTenant } from "../state/context";
import { getSystemStatus } from "@/core/system/status";

export default function SystemStatusWidget() {
  const { tenantId } = useDashboardTenant();
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    getSystemStatus(tenantId).then(setStatus);
  }, [tenantId]);

  const color =
    status?.state === "critical"
      ? "bg-red-500/80 border-red-400"
      : status?.state === "recovering"
      ? "bg-sky-500/80 border-sky-400"
      : status?.state === "stable"
      ? "bg-emerald-500/80 border-emerald-400"
      : "bg-slate-600/80 border-slate-500";

  return (
    <div className="rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-950/60 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">Estado del Sistema</h3>
          <p className="text-xs text-slate-400">Tenant: {tenantId}</p>
        </div>

        <span className="text-[10px] rounded-full bg-slate-800 px-2 py-1 text-slate-300 border border-slate-700">
          Core
        </span>
      </div>

      <div className={`rounded-lg ${color} px-3 py-3 text-slate-50`}>
        <p className="text-xs uppercase tracking-wide font-semibold">
          {status?.state?.toUpperCase() ?? "UNKNOWN"}
        </p>
        <p className="text-xs mt-1 text-slate-100">{status?.detail}</p>
      </div>
    </div>
  );
}
