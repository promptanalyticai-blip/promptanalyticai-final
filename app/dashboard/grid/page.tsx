import DashboardShell from "@/components/dashboard/DashboardShell";

export default function GridPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Grid System
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Sistema de grid del motor DNIP. Aquí se visualizan cuadrículas
            internas, distribución de procesos, organización modular y estructura
            técnica del ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
