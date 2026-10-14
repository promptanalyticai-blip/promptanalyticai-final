import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ResourcesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Recursos del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Monitoreo de recursos del sistema DNIP: uso de CPU, memoria,
            almacenamiento, procesos activos y rendimiento general del motor.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
