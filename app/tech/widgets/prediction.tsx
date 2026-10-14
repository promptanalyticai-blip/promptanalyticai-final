//app//dashboard/widgets/prediction.tsx
"use client";

import { useEffect, useState } from "react";
import { useDashboardTenant } from "../state/context";
import { wowPredictiveEngine } from "@/lib/wow-predictive-engine";

export default function PredictionWidget() {
  const { tenantId } = useDashboardTenant();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    wowPredictiveEngine.predict(tenantId, { type: "predict" });

    setItems([
      { id: 1, label: "Riesgo moderado en próximos días" },
      { id: 2, label: "Oportunidad de optimización en cache" }
    ]);
  }, [tenantId]);

  return (
    <div className="rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-950/60 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Predicción ligera</h3>
        <span className="text-[10px] rounded-full bg-slate-800 px-2 py-1 text-slate-300 border border-slate-700">
          WOW Predictive
        </span>
      </div>

      <p className="text-xs text-slate-400">Tenant: {tenantId}</p>

      <ul className="space-y-2">
        {items.map((p) => (
          <li
            key={p.id}
            className="flex items-start gap-2 rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-200"
          >
            <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{p.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
