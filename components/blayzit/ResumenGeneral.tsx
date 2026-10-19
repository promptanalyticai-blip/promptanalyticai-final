"use client";

import OverviewCard from "@/components/blayzit/OverviewCard";
import StatWidget from "@/components/blayzit/StatWidget";

export default function ResumenGeneral() {
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
          Resumen General
        </h2>
        <p className="text-slate-600 text-sm">
          Estado operativo, rendimiento y métricas clave del sistema BLAYZIT
        </p>
      </div>

      {/* Unified Composition */}
      <div
        className="
          grid 
          grid-cols-1 
          xl:grid-cols-4 
          gap-8
        "
      >
        {/* OverviewCard ocupa 2 columnas */}
        <div className="xl:col-span-2">
          <OverviewCard />
        </div>

        {/* StatWidgets ocupan las otras 2 columnas */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-6
          "
        >
          <StatWidget
            label="Procesos Activos"
            value="128"
            trend="+12%"
          />

          <StatWidget
            label="Riesgo Global"
            value="Bajo"
            trend="-4%"
          />

          <StatWidget
            label="Latencia Promedio"
            value="84ms"
            trend="-8%"
          />

          <StatWidget
            label="Eventos Críticos"
            value="3"
            trend="+1%"
          />
        </div>
      </div>
    </section>
  );
}
