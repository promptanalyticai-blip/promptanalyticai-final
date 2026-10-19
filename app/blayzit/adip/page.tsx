"use client";

import { useEffect, useState } from "react";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";

export default function ADIPPage() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    async function load() {
      const analysis = await runBlayzitIntelligence();
      setActions(analysis.actions || []);
    }
    load();
  }, []);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">
        ADIP · Motor de Automatización
      </h1>

      <p className="text-sm text-slate-700">
        Este panel muestra las acciones generadas por el motor ADIP.
      </p>

      <div className="flex flex-col gap-4">
        {actions.length === 0 && (
          <div className="text-sm text-slate-500">
            No hay acciones registradas en este momento.
          </div>
        )}

        {actions.map((a) => (
          <div
            key={a.id}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">
                {a.type}
              </span>
              <span className="text-xs text-slate-400">{a.timestamp}</span>
            </div>
            <p className="text-sm font-medium text-slate-900">{a.message}</p>
            <p className="text-xs mt-2 text-slate-600">
              Nivel: <span className="font-semibold">{a.level}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
