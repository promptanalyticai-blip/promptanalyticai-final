"use client";

import StatWidget from "@/components/blayzit/StatWidget";
import { SimpleLineChart } from "@/components/blayzit/SimpleLineChart";
import { HeatmapPlaceholder } from "@/components/blayzit/HeatmapPlaceholder";

export default function DashboardPage() {
  return (
    <div className="space-y-10 p-6">
      <h1 className="text-2xl font-bold">Dashboard Técnico</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatWidget label="Procesos Activos" value="128" trend="+12%" />
        <SimpleLineChart />
        <HeatmapPlaceholder />
      </div>
    </div>
  );
}
