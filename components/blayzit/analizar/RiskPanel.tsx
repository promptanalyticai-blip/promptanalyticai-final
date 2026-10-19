"use client";

export default function RiskPanel({ analysis }: { analysis: any }) {
  const { decisions, ai } = analysis;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Riesgo avanzado del archivo
      </h2>

      <div className="text-sm text-slate-700">
        <p>
          Riesgo DNIP: <strong>{(analysis.signals.dnip.riskLevel * 100).toFixed(1)}%</strong>
        </p>
        <p>
          Riesgo IA: <strong>{(ai.score * 100).toFixed(1)}%</strong>
        </p>
        <p>
          Riesgo final híbrido:{" "}
          <strong>{(decisions.finalRisk * 100).toFixed(1)}%</strong>
        </p>
      </div>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500"
          style={{ width: `${decisions.finalRisk * 100}%` }}
        />
      </div>
    </div>
  );
}
