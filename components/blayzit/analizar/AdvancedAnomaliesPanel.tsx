"use client";

export default function AdvancedAnomaliesPanel({ analysis }: { analysis: any }) {
  const { signals, ai, patterns } = analysis;

  const anomalies = [];

  if (signals.dnip.anomalies) anomalies.push("Anomalías DNIP detectadas");
  if (ai.score > 0.85) anomalies.push("IA detecta contenido inusual");
  if (patterns.includes("Patrón de error")) anomalies.push("Patrón de error crítico");
  if (patterns.includes("Patrón financiero") && ai.score > 0.7)
    anomalies.push("Posible riesgo financiero");

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Anomalías avanzadas
      </h2>

      {anomalies.length === 0 ? (
        <p className="text-sm text-slate-600">No se detectaron anomalías.</p>
      ) : (
        <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
          {anomalies.map((a, idx) => (
            <li key={idx}>{a}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
