import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ActivityPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Actividad del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
          <p className="text-slate-300">
            Actividad reciente del sistema, señales procesadas, decisiones
            ejecutadas y eventos DNIP/BLAYZIT.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
