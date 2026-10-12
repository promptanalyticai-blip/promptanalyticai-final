import DashboardShell from "@/components/dashboard/DashboardShell";

export default function NetworkPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Capa de Red DNIP/BLAYZIT
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Capa de red del sistema DNIP. Aquí se visualizan conexiones,
            latencia, tráfico interno, comunicación entre módulos y estabilidad
            de la red empresarial.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
