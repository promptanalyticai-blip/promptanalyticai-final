"use client";

export default function ResultsPanel({ analysis }: { analysis: any }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <h2 className="text-xl font-semibold text-slate-900">
        Resultados del análisis
      </h2>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Información del archivo
        </h3>
        <pre className="text-xs text-slate-600">
          {JSON.stringify(analysis.file, null, 2)}
        </pre>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Señales generadas
        </h3>
        <pre className="text-xs text-slate-600">
          {JSON.stringify(analysis.signals, null, 2)}
        </pre>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Decisiones DNIP
        </h3>
        <pre className="text-xs text-slate-600">
          {JSON.stringify(analysis.decisions, null, 2)}
        </pre>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 mb-2">
          Acciones ADIP
        </h3>
        <pre className="text-xs text-slate-600">
          {JSON.stringify(analysis.actions, null, 2)}
        </pre>
      </div>
    </div>
  );
}
