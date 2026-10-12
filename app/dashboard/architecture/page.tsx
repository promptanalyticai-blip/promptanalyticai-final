import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ArchitecturePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Arquitectura del Sistema DNIP/BLAYZIT
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Vista general de la arquitectura del sistema DNIP/BLAYZIT. Módulos,
            capas, pipelines, señales, decisiones y estructura interna del
            motor de inteligencia.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
