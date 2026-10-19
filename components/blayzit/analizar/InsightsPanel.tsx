"use client";

export default function InsightsPanel({ analysis }: { analysis: any }) {
  const { ai, decisions } = analysis;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Insights avanzados del análisis
      </h2>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Resumen IA
        </h3>
        <p className="text-sm text-slate-600">{ai.summary}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Insights detectados
        </h3>
        <ul className="list-disc pl-4 text-sm text-slate-600">
          {ai.insights.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Riesgo final (IA + DNIP)
        </h3>
        <p className="text-sm text-slate-600">
          {(decisions.finalRisk * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}
