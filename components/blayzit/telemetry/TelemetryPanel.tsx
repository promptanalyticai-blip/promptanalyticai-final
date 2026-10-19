"use client";

export default function TelemetryPanel({ metrics }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">Telemetría del Sistema</h2>

      {metrics.length === 0 ? (
        <p className="text-sm text-slate-600">No hay métricas registradas.</p>
      ) : (
        <div className="space-y-3">
          {metrics.map((m) => (
            <div key={m.id} className="border border-slate-200 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-slate-800 uppercase">{m.module}</p>
              <p className="text-xs text-slate-600">Duración: {m.durationMs} ms</p>
              <p className="text-xs text-slate-400">{m.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
