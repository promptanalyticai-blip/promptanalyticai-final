// app/dashboard/page.tsx
import { StatWidget } from "@/components/dashboard/widgets/StatWidget";
import { SimpleLineChart } from "@/components/dashboard/charts/SimpleLineChart";
import { HeatmapPlaceholder } from "@/components/dashboard/charts/HeatmapPlaceholder";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <StatWidget title="Decisiones hoy" value="128" subtitle="Procesadas por BLAYZIT" trend="up" />
        <StatWidget title="Alertas activas" value="7" subtitle="Requieren atención" trend="neutral" />
        <StatWidget title="Pipelines DNIP" value="3" subtitle="Operativos" trend="up" />
        <StatWidget title="Incidencias" value="1" subtitle="En revisión" trend="down" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <SimpleLineChart />
        <HeatmapPlaceholder />
      </div>
    </div>
  );
}
