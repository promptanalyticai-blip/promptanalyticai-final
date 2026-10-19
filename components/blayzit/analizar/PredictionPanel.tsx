"use client";

export default function PredictionPanel({ analysis }: { analysis: any }) {
  const { ai, decisions } = analysis;

  const predictedRisk =
    decisions.finalRisk * 0.8 + ai.score * 0.2 + Math.random() * 0.05;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Predicción de riesgo futuro
      </h2>

      <p className="text-sm text-slate-700">
        Riesgo actual:{" "}
        <strong>{(decisions.finalRisk * 100).toFixed(1)}%</strong>
      </p>

      <p className="text-sm text-slate-700">
        Riesgo futuro estimado:{" "}
        <strong>{(predictedRisk * 100).toFixed(1)}%</strong>
      </p>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500"
          style={{ width: `${predictedRisk * 100}%` }}
        />
      </div>
    </div>
  );
}
