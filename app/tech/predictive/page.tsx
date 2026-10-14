import DashboardShell from "@/components/tech/DashboardShell";

export default function PredictivePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Inteligencia Predictiva DNIP
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Módulo predictivo del sistema DNIP. Aquí se muestran proyecciones,
            tendencias futuras, estimaciones de riesgo y predicciones basadas en
            señales históricas y modelos internos.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
