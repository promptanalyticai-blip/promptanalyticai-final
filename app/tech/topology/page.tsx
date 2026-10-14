import DashboardShell from "@/components/tech/DashboardShell";

export default function TopologyPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Topology Map
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Mapa de topología del sistema DNIP. Aquí se visualizan relaciones,
            rutas internas, conexiones entre módulos y estructura del ecosistema
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
