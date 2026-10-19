"use client";

import { useEffect, useState } from "react";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";

export default function DNIPPage() {
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    async function load() {
      const analysis = await runBlayzitIntelligence();
      setDecisions(analysis.decisions || []);
    }
    load();
  }, []);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">
        DNIP · Motor de Decisiones
      </h1>

      <p className="text-sm text-slate-700">
        Este panel muestra las decisiones generadas por el motor DNIP.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {decisions.length === 0 && (
          <div className="col-span-2 text-sm text-slate-500">
            No hay decisiones activas en este momento.
          </div>
        )}

        {decisions.map((d) => (
          <div
            key={d.id}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">
                {d.type}
              </span>
              <span className="text-xs text-slate-400">{d.timestamp}</span>
            </div>
            <p className="text-sm font-medium text-slate-900">{d.message}</p>
            <p className="text-xs mt-2 text-slate-600">
              Nivel: <span className="font-semibold">{d.level}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
