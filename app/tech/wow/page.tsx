import { StatWidget } from "@/components/dashboard/widgets/StatWidget";

export default function WOWEnginePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">WOW Engine</h1>

      <div className="grid grid-cols-3 gap-6">
        <StatWidget title="Decisiones WOW activas" value="32" subtitle="En tiempo real" trend="up" />
        <StatWidget title="Reglas WOW" value="12" subtitle="Configuradas" trend="neutral" />
        <StatWidget title="Incidencias WOW" value="1" subtitle="En revisión" trend="down" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold mb-2">Flujo de decisiones</h2>
          <div className="h-40 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
            [Flow Diagram Placeholder]
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-semibold mb-2">Reglas activas</h2>
          <ul className="space-y-2 text-sm">
            <li>• Escalar alertas críticas a Admin.</li>
            <li>• Ajustar thresholds según carga.</li>
            <li>• Activar modo seguro en latencia alta.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
