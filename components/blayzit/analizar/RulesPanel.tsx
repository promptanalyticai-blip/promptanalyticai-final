"use client";

export default function RulesPanel({ analysis }: { analysis: any }) {
  const { rules } = analysis;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Reglas activadas
      </h2>

      {rules.length === 0 ? (
        <p className="text-sm text-slate-600">No se activaron reglas.</p>
      ) : (
        <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
          {rules.map((r: any) => (
            <li key={r.id}>
              <strong>{r.name}</strong>: {r.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
