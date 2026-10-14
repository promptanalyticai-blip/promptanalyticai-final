import DashboardShell from "@/components/tech/DashboardShell";

export default function RestoresPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Restores
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Restauraciones del sistema DNIP. Aquí se administran procesos de
            recuperación, restauración de snapshots, backups y estados del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
