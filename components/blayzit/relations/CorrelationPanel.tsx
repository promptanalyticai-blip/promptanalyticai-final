"use client";

import type { CorrelationPair } from "./CorrelationEngine";

export default function CorrelationPanel({ pairs }: { pairs: CorrelationPair[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Correlaciones entre archivos
      </h2>

      {pairs.length === 0 ? (
        <p className="text-sm text-slate-600">
          No hay suficientes archivos para calcular correlaciones.
        </p>
      ) : (
        <div className="space-y-3">
          {pairs.map((p, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg p-4 space-y-2"
            >
              <p className="text-sm font-semibold text-slate-800">
                {p.a} ↔ {p.b}
              </p>

              <p className="text-xs text-slate-600">
                Correlación de riesgo: {(p.riskCorrelation * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-600">
                Correlación IA: {(p.aiCorrelation * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-600">
                Correlación de tamaño: {(p.sizeCorrelation * 100).toFixed(1)}%
              </p>

              {p.sharedTags.length > 0 && (
                <p className="text-xs text-slate-500">
                  Tags compartidos: {p.sharedTags.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
