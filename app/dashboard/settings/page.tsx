import DashboardShell from "@/components/dashboard/DashboardShell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Ajustes del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
          <p className="text-slate-300">
            Configuración avanzada del sistema, parámetros globales, límites,
            modos y preferencias empresariales.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
