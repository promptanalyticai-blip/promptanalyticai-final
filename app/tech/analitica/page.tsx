import { SimpleLineChart } from "@/components/blayzit/SimpleLineChart";
import { MetricsPanel } from "@/components/tech/metrics/MetricsPanel";

export default function AnaliticaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analítica</h1>

      <div className="grid grid-cols-2 gap-6">
        <SimpleLineChart />
        <MetricsPanel />
      </div>
    </div>
  );
}
