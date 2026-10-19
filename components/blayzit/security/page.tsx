"use client";

import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { extractRiskDecisions } from "@/components/blayzit/security/DNIPSecurityBridge";

export default function SeguridadPage() {
  const { decisions } = runBlayzitIntelligence();
  const riesgos = extractRiskDecisions(decisions);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold text-red-600">
        Seguridad del Sistema
      </h1>

      <div className="flex flex-col gap-4">
        {riesgos.length === 0 && (
          <p className="text-sm text-slate-500">
            No hay decisiones de riesgo activas.
          </p>
        )}

        {riesgos.map((r) => (
          <div
            key={r.id}
            className="
              bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm
            "
          >
            <p className="text-sm font-semibold text-red-700">{r.message}</p>
            <p className="text-xs text-red-600 mt-1">
              Nivel: {r.level.toUpperCase()}
            </p>
            <p className="text-xs text-red-500">{r.timestamp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
