"use client";

import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { useTelemetryStream } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

export default function IntelligenceCenter() {
  const { decisions, actions } = runBlayzitIntelligence();
  const points = useTelemetryStream();

  const riskDecision = decisions.find((d) => d.type === "riesgo");
  const systemStatus =
    riskDecision?.level === "crítico"
      ? "crítico"
      : riskDecision?.level === "alto"
      ? "alto"
      : "estable";

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold text-slate-900">
        BLAYZIT Intelligence Center
      </h1>

      {/* Estado del sistema */}
      <div
        className={`
          p-6 rounded-xl border shadow-sm
          ${
            systemStatus === "crítico"
              ? "bg-red-50 border-red-200"
              : systemStatus === "alto"
              ? "bg-yellow-50 border-yellow-200"
              : "bg-green-50 border-green-200"
          }
        `}
      >
        <p className="text-lg font-semibold">
          Estado del sistema:{" "}
          {systemStatus === "estable"
            ? "Estable"
            : systemStatus === "alto"
            ? "Riesgo Alto"
            : "Riesgo Crítico"}
        </p>
        {riskDecision && (
          <p className="text-sm text-slate-700 mt-2">{riskDecision.message}</p>
        )}
      </div>

      {/* Telemetría */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Telemetría en tiempo real
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <TelemetryChart
            label="Latencia (ms)"
            field="latency"
            points={points}
            unit="ms"
          />
          <TelemetryChart
            label="Carga (%)"
            field="load"
            points={points}
            unit="%"
          />
          <TelemetryChart
            label="Riesgo (%)"
            field="risk"
            points={points}
            unit="%"
          />
        </div>
      </div>

      {/* Decisiones DNIP */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Decisiones DNIP
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {decisions.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">
                {d.type.toUpperCase()}
              </p>
              <p className="text-sm text-slate-700">{d.message}</p>
              <p className="text-xs text-slate-500 mt-2">{d.timestamp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Acciones ADIP */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Acciones ADIP
        </h2>
        <div className="flex flex-col gap-4">
          {actions.map((a) => (
            <div
              key={a.id}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">
                {a.action}
              </p>
              <p className="text-xs text-slate-500 mt-2">{a.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
