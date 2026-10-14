import DashboardShell from "@/components/tech/DashboardShell";

export default function AlertsAdvancedPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          DNIP Alerts — Advanced Mode
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/75 border border-slate-800 shadow-xl">
          <p className="text-slate-300 leading-relaxed">
            Panel avanzado de alertas DNIP. Aquí se gestionan correlaciones,
            reglas inteligentes, prioridades dinámicas y análisis profundo de
            señales críticas del ecosistema BLAYZIT/ADIP.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
