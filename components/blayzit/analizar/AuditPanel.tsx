"use client";

export default function AuditPanel({ analysis }: { analysis: any }) {
  const { file, signals, decisions, actions, ai } = analysis;

  const audit = {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    risk: decisions.finalRisk,
    aiScore: ai.score,
    anomalies: signals.dnip.anomalies,
    actionCount: actions.length,
    timestamp: new Date().toLocaleString(),
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Auditoría del análisis
      </h2>

      <pre className="text-xs text-slate-600">
        {JSON.stringify(audit, null, 2)}
      </pre>
    </div>
  );
}
