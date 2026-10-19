"use client";

export default function V5ADIPDashboard({ actions }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">ADIP · Acciones</h2>

      {(!actions || actions.length === 0) ? (
        <p className="text-sm text-slate-600">No hay acciones registradas.</p>
      ) : (
        <div className="space-y-3">
          {actions.map((a) => (
            <div key={a.id} className="border border-slate-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase">{a.type}</span>
                <span className="text-xs text-slate-400">{a.timestamp}</span>
              </div>
              <p className="text-sm text-slate-800">{a.message}</p>
              <p className="text-xs text-slate-600">
                Nivel: <span className="font-semibold">{a.level}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
