"use client";

export default function AutomationPanel({ analysis }: { analysis: any }) {
  const { automation } = analysis;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Automatización ADIP
      </h2>

      {automation.length === 0 ? (
        <p className="text-sm text-slate-600">
          No se ejecutaron automatizaciones.
        </p>
      ) : (
        <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
          {automation.map((a: any) => (
            <li key={a.id}>
              <strong>{a.name}</strong> — {a.description}  
              <span className="text-slate-400 ml-2">{a.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
