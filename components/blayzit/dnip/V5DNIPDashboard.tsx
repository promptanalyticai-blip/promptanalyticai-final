"use client";

export default function V5DNIPDashboard({ decisions }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">DNIP · Decisiones</h2>

      {(!decisions || decisions.length === 0) ? (
        <p className="text-sm text-slate-600">No hay decisiones registradas.</p>
      ) : (
        <div className="space-y-3">
          {decisions.map((d) => (
            <div key={d.id} className="border border-slate-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase">{d.type}</span>
                <span className="text-xs text-slate-400">{d.timestamp}</span>
              </div>
              <p className="text-sm text-slate-800">{d.message}</p>
              <p className="text-xs text-slate-600">
                Nivel: <span className="font-semibold">{d.level}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
