import DashboardShell from "@/components/dashboard/DashboardShell";

export default function LogsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Logs del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
          <p className="text-slate-300">
            Registros de auditoría, eventos críticos, actividad del sistema y
            trazabilidad DNIP/BLAYZIT.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
