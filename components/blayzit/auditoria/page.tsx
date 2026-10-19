"use client";

import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { convertActionsToAuditLogs } from "@/components/blayzit/auditoria/ADIPAuditBridge";

export default function AuditoriaPage() {
  const { actions } = runBlayzitIntelligence();
  const logs = convertActionsToAuditLogs(actions);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Auditoría del Sistema
      </h1>

      <div className="flex flex-col gap-4">
        {logs.length === 0 && (
          <p className="text-sm text-slate-500">
            No hay registros de auditoría generados por ADIP.
          </p>
        )}

        {logs.map((l) => (
          <div
            key={l.id}
            className="
              bg-white border border-slate-200 rounded-xl p-4 shadow-sm
            "
          >
            <p className="text-sm font-semibold text-slate-900">{l.event}</p>
            <p className="text-xs text-slate-600 mt-1">Actor: {l.actor}</p>
            <p className="text-xs text-slate-500">{l.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
