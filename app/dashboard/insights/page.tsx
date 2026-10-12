import DashboardShell from "@/components/dashboard/DashboardShell";

export default function InsightsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Insights del Sistema DNIP
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel de insights generados por el motor DNIP. Aquí se muestran
            patrones, anomalías, correlaciones y señales relevantes detectadas
            por el sistema.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
