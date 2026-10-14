//app/dashboard/widgets/healing.tsx
"use client";

import { useEffect, useState } from "react";
import { useDashboardTenant } from "../state/context";
import { getAuditEvents } from "@/core/audit";

export default function HealingWidget() {
  const { tenantId } = useDashboardTenant();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const all = getAuditEvents();
    setItems(all.filter((ev) => ev.tenantId === tenantId && ev.event === "recovery"));
  }, [tenantId]);

  return (
    <div className="rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-950/60 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Auto‑sanación</h3>
        <span className="text-[10px] rounded-full bg-slate-800 px-2 py-1 text-slate-300 border border-slate-700">
          WOW AutoHealing
        </span>
      </div>

      <p className="text-xs text-slate-400">Tenant: {tenantId}</p>

      {items.length === 0 ? (
        <p className="text-xs text-slate-500">Sin eventos de recuperación registrados.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((ev) => (
            <li
              key={ev.id}
              className="rounded-lg bg-emerald-950/60 border border-emerald-600/70 px-3 py-2 text-xs text-emerald-100"
            >
              {ev.detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
