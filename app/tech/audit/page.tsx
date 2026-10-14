import DashboardShell from "@/components/tech/DashboardShell";

export default function AuditPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Auditoría del Sistema
        </h2>

        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <p className="text-slate-300">
            Registros de auditoría del sistema DNIP/BLAYZIT: decisiones
            ejecutadas, cambios críticos, accesos, eventos de seguridad y
            trazabilidad completa del motor de inteligencia.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
