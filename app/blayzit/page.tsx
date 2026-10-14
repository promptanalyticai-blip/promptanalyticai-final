// app/blayzit/page.tsx
import DashboardGrid from "@/components/core/DashboardGrid";
import DashboardPageHeader from "@/components/core/DashboardPageHeader";
import DashboardSection from "@/components/core/DashboardSection";

import OverviewCard from "@/components/dashboard/OverviewCard";
import StatWidget from "@/components/dashboard/widgets/StatWidget";

// IMPORTS CORREGIDOS (named exports)
import { SimpleLineChart } from "@/components/dashboard/charts/SimpleLineChart";
import { HeatmapPlaceholder } from "@/components/dashboard/charts/HeatmapPlaceholder";

export default function BlayzitHome() {
  return (
    <>
      <DashboardPageHeader
        title="BLAYZIT Enterprise"
        subtitle="Visión general operativa y de inteligencia."
      />

      <DashboardSection>
        <DashboardGrid>
          <OverviewCard />
          <StatWidget
            title="Decisiones hoy"
            value="128"
            subtitle="Procesadas por BLAYZIT"
            trend="up"
          />
          <StatWidget
            title="Alertas activas"
            value="7"
            subtitle="Requieren atención"
            trend="neutral"
          />
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection>
        <DashboardGrid>
          <SimpleLineChart />
          <HeatmapPlaceholder />
        </DashboardGrid>
      </DashboardSection>
    </>
  );
}
