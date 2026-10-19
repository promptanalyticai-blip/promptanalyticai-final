"use client";

export default function PerformancePanel({ perf }: { perf: any }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Rendimiento del análisis
      </h2>

      <p className="text-sm text-slate-700">
        Archivos procesados: <strong>{perf.totalFiles}</strong>
      </p>

      <p className="text-sm text-slate-700">
        Tiempo total: <strong>{perf.totalTimeMs} ms</strong>
      </p>

      <p className="text-sm text-slate-700">
        Tiempo promedio por archivo:{" "}
        <strong>{perf.averageTimeMs.toFixed(2)} ms</strong>
      </p>

      <div className="space-y-2 mt-4">
        {perf.results.map((r: any) => (
          <div
            key={r.name}
            className="border border-slate-200 rounded-lg p-3"
          >
            <p className="text-sm text-slate-800 font-semibold">
              {r.name}
            </p>
            <p className="text-xs text-slate-600">
              Tiempo: {r.timeMs} ms
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
