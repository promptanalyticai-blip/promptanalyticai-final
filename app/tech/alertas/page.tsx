"use client";

import StatWidget from "@/components/blayzit/StatWidget";
import { HeatmapPlaceholder } from "@/components/blayzit/HeatmapPlaceholder";
import { MetricsPanel } from "@/components/tech/metrics/MetricsPanel";

export default function AlertasPage() {
  return (
    <div className="space-y-10 p-6">
      <h1 className="text-2xl font-bold">Alertas del Sistema</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatWidget label="Alertas Activas" value="12" trend="+3%" />
        <HeatmapPlaceholder />
      </div>

      <MetricsPanel />
    </div>
  );
}
