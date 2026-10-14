import { StatWidget } from "@/components/dashboard/widgets/StatWidget";
import { HeatmapPlaceholder } from "@/components/dashboard/charts/HeatmapPlaceholder";
import { MetricsPanel } from "@/components/dashboard/metrics/MetricsPanel";

export default function AlertasPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Alertas</h1>

      <div className="grid grid-cols-3 gap-6">
        <StatWidget title="Alertas críticas" value="3" subtitle="Requieren acción inmediata" trend="up" />
        <StatWidget title="Alertas moderadas" value="5" subtitle="En seguimiento" trend="neutral" />
        <StatWidget title="Zonas estables" value="12" subtitle="Sin incidencias" trend="up" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <HeatmapPlaceholder />
        <MetricsPanel />
      </div>
    </div>
  );
}
