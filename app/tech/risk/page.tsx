import DashboardShell from "@/components/tech/DashboardShell";
import RiskChart from "@/components/tech/charts/RiskChart";
import VacancyChart from "@/components/tech/charts/VacancyChart";

export default function RiskPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Análisis de Riesgo DNIP
        </h2>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RiskChart />
          <VacancyChart />
        </section>
      </div>
    </DashboardShell>
  );
}
