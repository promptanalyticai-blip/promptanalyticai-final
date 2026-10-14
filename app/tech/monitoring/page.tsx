import DashboardShell from "@/components/tech/DashboardShell";

export default function MonitoringPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Monitoring
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Monitoreo general del sistema DNIP: estado, actividad, alertas y
            estabilidad del motor de decisiones.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
