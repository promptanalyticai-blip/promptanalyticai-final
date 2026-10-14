import DashboardShell from "@/components/tech/DashboardShell";

export default function ComputePage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Capa de Cómputo DNIP
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Capa de cómputo del sistema DNIP. Aquí se monitorea el rendimiento
            computacional, carga de trabajo, procesamiento de señales y
            eficiencia del motor.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
