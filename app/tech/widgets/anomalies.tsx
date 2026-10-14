"use client";

import { useEffect, useState } from "react";
import { useDashboardTenant } from "../stat@/app/tech/state/context";
import { getAuditEvents } from "@/core/audit";

export default function AnomaliesWidget() {
  const { tenantId } = useDashboardTenant();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const all = getAuditEvents();
    setItems(all.filter((ev) => ev.tenantId === tenantId && ev.event === "anomaly"));
  }, [tenantId]);

  return (
    <div className="rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-950/60 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Anomalías</h3>
        <span className="text-[10px] rounded-full bg-slate-800 px-2 py-1 text-slate-300 border border-slate-700">
          DNIP Signals
        </span>
      </div>

      <p className="text-xs text-slate-400">Tenant: {tenantId}</p>

      {items.length === 0 ? (
        <p className="text-xs text-slate-500">Sin anomalías registradas.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((a) => (
            <li
              key={a.id}
              className="rounded-lg bg-red-950/60 border border-red-600/70 px-3 py-2 text-xs text-red-100"
            >
              {a.detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
