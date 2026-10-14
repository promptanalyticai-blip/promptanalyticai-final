import DashboardShell from "@/components/tech/DashboardShell";

export default function HeatmapsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Heatmaps
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Visualización avanzada de heatmaps del sistema DNIP. Aquí se muestran
            zonas calientes, actividad intensa, patrones de uso y densidad de
            señales dentro del ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
