import DashboardShell from "@/components/tech/DashboardShell";
export default function ConnectionsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Connections
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Conexiones del sistema DNIP. Aquí se monitora la comunicación entre
            módulos, conexiones activas, estabilidad y rutas internas del motor
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
