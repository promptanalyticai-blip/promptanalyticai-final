"use client";

export default function VersionsPanel({ versions }: { versions: any[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Versiones del archivo
      </h2>

      {versions.length === 0 ? (
        <p className="text-sm text-slate-600">No hay versiones guardadas.</p>
      ) : (
        <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
          {versions.map((v: any) => (
            <li key={v.name}>
              {v.name} — {v.created_at}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
