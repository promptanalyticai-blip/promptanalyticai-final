"use client";

export default function SmartActionsPanel({ analysis }: { analysis: any }) {
  const { actions } = analysis;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Acciones inteligentes ADIP
      </h2>

      {actions.length === 0 && (
        <p className="text-sm text-slate-500">No se generaron acciones.</p>
      )}

      <div className="space-y-3">
        {actions.map((a: any) => (
          <div
            key={a.id}
            className="border border-slate-200 rounded-lg p-3 bg-white shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-900">{a.action}</p>
            <p className="text-xs text-slate-500 mt-1">
              Estado: {a.status} · {a.timestamp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
