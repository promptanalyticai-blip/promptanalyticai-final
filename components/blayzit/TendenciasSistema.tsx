"use client";

import SimpleLineChart from "@/components/blayzit/SimpleLineChart";
import HeatmapPlaceholder from "@/components/blayzit/HeatmapPlaceholder";

export default function TendenciasSistema() {
  return (
    <section
      className="
        w-full 
        bg-transparent 
        space-y-10
      "
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Tendencias del Sistema
        </h2>
        <p className="text-slate-600 text-sm">
          Análisis visual del comportamiento operativo y patrones internos
        </p>
      </div>

      {/* Unified Composition */}
      <div
        className="
          grid 
          grid-cols-1 
          xl:grid-cols-2 
          gap-8
        "
      >
        {/* Gráfico de línea */}
        <SimpleLineChart />

        {/* Heatmap */}
        <HeatmapPlaceholder />
      </div>
    </section>
  );
}
