//components/dashboard/metrics/MetricsPanel.tsx
"use client";

export function MetricsPanel() {
  const metrics = [
    { name: "Tiempo medio de decisión", value: "320 ms" },
    { name: "Decisiones por minuto", value: "45" },
    { name: "Pipelines activos", value: "4" },
    { name: "Alertas críticas", value: "2" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-semibold mb-4">Métricas del sistema</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.name} className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase">{m.name}</span>
            <span className="text-lg font-semibold text-slate-900">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
