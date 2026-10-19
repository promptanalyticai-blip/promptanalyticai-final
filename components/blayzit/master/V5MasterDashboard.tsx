"use client";

import V5RelationsDashboard from "@/components/blayzit/relations/V5RelationsDashboard";
import V5PerformanceDashboard from "@/components/blayzit/performance/V5PerformanceDashboard";
import V5SecurityDashboard from "@/components/blayzit/security/V5SecurityDashboard";
import V5TelemetryDashboard from "@/components/blayzit/telemetry/V5TelemetryDashboard";
import V5AuditDashboard from "@/components/blayzit/audit/V5AuditDashboard";

export default function V5MasterDashboard({ analysis, perf, pairs }) {
  return (
    <div className="space-y-10">

      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            BLAYZIT V5 · Panel Maestro
          </h1>
          <p className="text-sm text-slate-600">
            Vista unificada de DNIP, ADIP, IA, seguridad, telemetría y auditoría.
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500">Archivo analizado:</p>
          <p className="text-sm font-medium text-slate-800">
            {analysis.file?.name || "N/A"}
          </p>
        </div>
      </header>

      {/* Grid principal */}
      <div className="grid grid-cols-3 gap-8">

        {/* Columna 1: DNIP + ADIP + IA */}
        <div className="space-y-6">

          {/* DNIP */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-sm font-semibold text-slate-900">DNIP · Decisiones</h2>

            {(!analysis.decisions || analysis.decisions.length === 0) ? (
              <p className="text-xs text-slate-500">No hay decisiones registradas.</p>
            ) : (
              <div className="space-y-3">
                {analysis.decisions.map((d) => (
                  <div key={d.id} className="border border-slate-200 rounded-lg p-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase">{d.type}</span>
                      <span className="text-xs text-slate-400">{d.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-700">{d.message}</p>
                    <p className="text-xs text-slate-600">
                      Nivel: <span className="font-semibold">{d.level}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ADIP */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-sm font-semibold text-slate-900">ADIP · Acciones</h2>

            {(!analysis.actions || analysis.actions.length === 0) ? (
              <p className="text-xs text-slate-500">No hay acciones registradas.</p>
            ) : (
              <div className="space-y-3">
                {analysis.actions.map((a) => (
                  <div key={a.id} className="border border-slate-200 rounded-lg p-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase">{a.type}</span>
                      <span className="text-xs text-slate-400">{a.timestamp}</span>
                    </div>
                    <p className="text-xs text-slate-700">{a.message}</p>
                    <p className="text-xs text-slate-600">
                      Nivel: <span className="font-semibold">{a.level}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* IA */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 className="text-sm font-semibold text-slate-900">IA · Resumen</h2>
            <p className="text-xs text-slate-700">
              {analysis.ai?.summary || "Sin resumen disponible."}
            </p>
            <p className="text-xs text-slate-600">
              Score IA:{" "}
              <span className="font-semibold">
                {analysis.ai?.score?.toFixed
                  ? analysis.ai.score.toFixed(2)
                  : analysis.ai?.score ?? "N/A"}
              </span>
            </p>
          </div>
        </div>

        {/* Columna 2: Seguridad + Telemetría */}
        <div className="space-y-6">
          <V5SecurityDashboard signals={analysis.security || []} />
          <V5TelemetryDashboard metrics={analysis.telemetry || []} />
        </div>

        {/* Columna 3: Auditoría + Relaciones + Performance */}
        <div className="space-y-6">
          <V5AuditDashboard events={analysis.audit || []} />

          {pairs && pairs.length > 0 && (
            <V5RelationsDashboard pairs={pairs} />
          )}

          {perf && (
            <V5PerformanceDashboard perf={perf} />
          )}
        </div>
      </div>
    </div>
  );
}
