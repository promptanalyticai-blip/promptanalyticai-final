// components/blayzit/master/V6TelemetryDashboard.tsx
"use client";

type Metric = {
  module: string;
  durationMs: number;
  timestamp: string;
};

export default function V6TelemetryDashboard({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="font-semibold mb-3">Telemetría · Latencia</h2>

      {metrics?.length ? (
        <ul className="space-y-2 text-xs text-slate-700">
          {metrics.map((m) => (
            <li key={m.module + m.timestamp} className="border rounded-md p-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{m.module}</span>
                <span className="text-slate-500">{m.timestamp}</span>
              </div>
              <span className="text-slate-600">
                Duración: <strong>{m.durationMs} ms</strong>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-slate-500">Sin métricas registradas.</p>
      )}
    </div>
  );
}
