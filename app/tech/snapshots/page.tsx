import DashboardShell from "@/components/tech/DashboardShell";

export default function SnapshotsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Snapshots
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Snapshots del sistema DNIP. Aquí se visualizan capturas internas,
            estados del motor, versiones temporales y puntos de restauración del
            ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
