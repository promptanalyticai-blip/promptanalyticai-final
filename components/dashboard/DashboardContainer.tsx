//components/DashboardContainer.tsx
"use client";

import Topbar from "./Topbar";
import CriticalCard from "./cards/CriticalCard";
import WarningCard from "./cards/WarningCard";
import StableCard from "./cards/StableCard";
import WOWCritical from "./wow/WOWCritical";
import WOWRecovery from "./wow/WOWRecovery";
import WOWThreat from "./wow/WOWThreat";
import OccupancyChart from "./charts/OccupancyChart";
import RevenueChart from "./charts/RevenueChart";
import RiskChart from "./charts/RiskChart";
import VacancyChart from "./charts/VacancyChart";
import ExportUniversal from "./export/ExportUniversal";

export default function DashboardContainer() {
  return (
    <div className="space-y-10">
      <Topbar />

      {/* Tarjetas DNIP híbridas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CriticalCard count={3} label="Active Incidents" />
        <WarningCard count={2} label="Moderate Issues" />
        <StableCard count={5} label="Optimal Zones" />
      </section>

      {/* Paneles WOW */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WOWCritical />
        <WOWRecovery />
        <WOWThreat />
      </section>

      {/* Gráficos principales */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OccupancyChart />
        <RevenueChart />
        <RiskChart />
        <VacancyChart />
      </section>

      {/* Exportación Universal */}
      <ExportUniversal />
    </div>
  );
}
