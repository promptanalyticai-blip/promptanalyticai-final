import DashboardShell from "@/components/dashboard/DashboardShell";

export default function LoadBalancingPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Load Balancing
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Balanceo de carga del sistema DNIP. Aquí se monitorea la distribución
            de trabajo, la eficiencia del motor y la estabilidad operativa del
            sistema.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
