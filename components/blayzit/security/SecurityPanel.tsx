"use client";

export default function SecurityPanel({ signals }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">Seguridad del Sistema</h2>

      {signals.length === 0 ? (
        <p className="text-sm text-slate-600">No se detectaron señales de seguridad.</p>
      ) : (
        <div className="space-y-3">
          {signals.map((s) => (
            <div key={s.id} className="border border-slate-200 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-slate-800 uppercase">{s.type}</p>
              <p className="text-xs text-slate-600">{s.message}</p>
              <p className="text-xs text-slate-400">{s.timestamp}</p>
              <p className="text-xs text-slate-500">
                Severidad:{" "}
                <span className="font-semibold">{(s.severity * 100).toFixed(0)}%</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
