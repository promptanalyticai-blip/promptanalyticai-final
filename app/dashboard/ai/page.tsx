import DashboardShell from "@/components/dashboard/DashboardShell";

export default function AIPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Inteligencia Artificial DNIP/BLAYZIT
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Módulo de inteligencia artificial del sistema DNIP. Aquí se procesan
            señales avanzadas, inferencias, modelos internos y análisis
            cognitivos del motor BLAYZIT.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
