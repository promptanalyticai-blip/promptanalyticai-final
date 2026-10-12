import DashboardShell from "@/components/dashboard/DashboardShell";

export default function ImportsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Imports
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Importaciones del sistema DNIP. Aquí se administran cargas de datos,
            señales externas, configuraciones y módulos importados al ecosistema
            BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
