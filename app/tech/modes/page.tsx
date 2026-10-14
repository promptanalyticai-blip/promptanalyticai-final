import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ModesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Modos del Sistema DNIP/BLAYZIT
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
          <p className="text-slate-300">
            Modos operativos del sistema: crítico, recuperación, predictivo,
            estabilidad, prioridad y más.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
