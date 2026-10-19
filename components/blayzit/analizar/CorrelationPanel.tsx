"use client";

export default function CorrelationPanel({ analysis }: { analysis: any }) {
  const { ai, decisions, file } = analysis;

  const correlations = [
    {
      label: "Riesgo vs IA",
      value: (decisions.finalRisk * ai.score).toFixed(3),
    },
    {
      label: "Tamaño vs Riesgo",
      value: ((file.size / 1000000) * decisions.finalRisk).toFixed(3),
    },
    {
      label: "Claridad IA vs Estructura",
      value: (ai.summary.length / analysis.contentLength).toFixed(3),
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Correlaciones IA del archivo
      </h2>

      <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
        {correlations.map((c, idx) => (
          <li key={idx}>
            {c.label}: <strong>{c.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
