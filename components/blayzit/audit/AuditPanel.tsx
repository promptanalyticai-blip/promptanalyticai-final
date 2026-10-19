"use client";

export default function AuditPanel({ events }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">Auditoría del Motor</h2>

      {events.length === 0 ? (
        <p className="text-sm text-slate-600">No hay eventos registrados.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((e) => (
            <li key={e.id} className="border border-slate-200 rounded-lg p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-800 uppercase">{e.type}</p>
              <p className="text-xs text-slate-600">{e.message}</p>
              <p className="text-xs text-slate-400">{e.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
