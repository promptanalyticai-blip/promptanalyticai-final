"use client";

import { useState } from "react";
import { useAnalysisHistory } from "./useAnalysisHistory";

export default function HistoryAdvanced() {
  const { history } = useAnalysisHistory();
  const [query, setQuery] = useState("");

  const filtered = history.filter((item) =>
    item.file_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Historial avanzado
      </h2>

      <input
        type="text"
        placeholder="Buscar archivo..."
        className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-2">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between text-xs text-slate-700"
          >
            <span className="font-semibold">{item.file_name}</span>
            <span className="text-slate-400">
              {(item.file_size / 1024).toFixed(1)} KB · Riesgo{" "}
              {(item.risk_level * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
