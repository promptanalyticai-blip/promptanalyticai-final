import DashboardShell from "@/components/dashboard/DashboardShell";

export default function KPIsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP KPIs
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Indicadores clave de desempeño del sistema DNIP. Aquí se monitorean
            KPIs críticos, eficiencia del motor y resultados operativos del
            ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
