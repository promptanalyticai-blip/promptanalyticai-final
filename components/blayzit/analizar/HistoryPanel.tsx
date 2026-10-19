"use client";

import { useAnalysisHistory } from "./useAnalysisHistory";

export default function HistoryPanel() {
  const { history, loading } = useAnalysisHistory();

  if (loading) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-sm text-slate-500">Cargando historial de análisis…</p>
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-sm text-slate-500">
          Aún no hay análisis registrados en el historial.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">
        Historial de análisis
      </h2>
      <div className="space-y-2">
        {history.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between text-xs text-slate-700"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{item.file_name}</span>
              <span className="text-slate-400">
                {item.file_type} · {(item.file_size / 1024).toFixed(1)} KB
              </span>
            </div>
            <div className="text-right">
              <span className="block">
                Riesgo: {(item.risk_level * 100).toFixed(0)}%
              </span>
              <span className="text-slate-400">
                {new Date(item.created_at).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
