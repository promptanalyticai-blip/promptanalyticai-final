"use client";

import { useEffect, useState } from "react";
import { useDashboardTenant } from "../stat@/app/tech/state/context";
import { getTenantModes } from "@/core/tenant/modes";

export default function ModesWidget() {
  const { tenantId } = useDashboardTenant();
  const [modes, setModes] = useState<any>({});

  useEffect(() => {
    setModes(getTenantModes(tenantId));
  }, [tenantId]);

  const entries = Object.entries(modes ?? {});

  return (
    <div className="rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-950/60 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Modos activos</h3>
        <span className="text-[10px] rounded-full bg-slate-800 px-2 py-1 text-slate-300 border border-slate-700">
          WOW · DNIP · ADIP
        </span>
      </div>

      <p className="text-xs text-slate-400">Tenant: {tenantId}</p>

      <div className="grid grid-cols-2 gap-2">
        {entries.map(([mode, value]) => (
          <div
            key={mode}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-[11px] border ${
              value
                ? "bg-emerald-900/40 border-emerald-500/60 text-emerald-100"
                : "bg-slate-900/60 border-slate-700 text-slate-400"
            }`}
          >
            <span className="capitalize">{mode}</span>

            <span
              className={`inline-flex items-center rounded-full px-2 py-[2px] text-[10px] ${
                value ? "bg-emerald-500/80 text-slate-950" : "bg-slate-700 text-slate-200"
              }`}
            >
              {value ? "ON" : "OFF"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
