//components/dashboard/charts/HeatmapPlaceholder.tsx
"use client";

export function HeatmapPlaceholder() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-semibold mb-2">Heatmap de decisiones</h2>
      <p className="text-slate-500 text-sm mb-4">Distribución por hora/día.</p>
      <div className="h-40 bg-slate-100 rounded-lg grid grid-cols-8 grid-rows-4 gap-1 p-2">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="rounded bg-blue-100" />
        ))}
      </div>
    </div>
  );
}
