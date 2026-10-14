"use client";

import DashboardPageHeader from "@/components/core/DashboardPageHeader";
import DashboardSection from "@/components/core/DashboardSection";
import DashboardGrid from "@/components/core/DashboardGrid";

import OverviewCard from "@/components/blayzit/OverviewCard";
import StatWidget from "@/components/blayzit/StatWidget";
import { SimpleLineChart } from "@/components/blayzit/SimpleLineChart";
import { HeatmapPlaceholder } from "@/components/blayzit/HeatmapPlaceholder";

export default function BlayzitHome() {
  return (
    <div className="space-y-10 p-6">
      <DashboardPageHeader title="BLAYZIT — Decision Intelligence Engine" />

      <DashboardSection title="Overview">
        <DashboardGrid>
          <OverviewCard />
          <StatWidget label="Procesos Activos" value="128" trend="+12%" />
          <StatWidget label="Riesgo Global" value="Bajo" trend="-4%" />
          <StatWidget label="Latencia Promedio" value="84ms" trend="-8%" />
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection title="Tendencias">
        <DashboardGrid>
          <SimpleLineChart />
          <HeatmapPlaceholder />
        </DashboardGrid>
      </DashboardSection>
    </div>
  );
}
