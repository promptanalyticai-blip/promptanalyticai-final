"use client";

import { useEffect, useState } from "react";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

export default function IntelligenceCenter() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      // Ejecuta el análisis principal
      const mainAnalysis = telemetryEngine.measure(
        "BlayzitIntelligence",
        () => runBlayzitIntelligence()
      );

      setAnalysis(mainAnalysis);

      // Obtiene métricas del motor de telemetría
      const collectedMetrics = telemetryEngine.getMetrics();
      setMetrics(collectedMetrics);
    }

    load();
  }, []);

  if (!analysis) {
    return (
      <section className="space-y-6">
        <h1 className="text-xl font-semibold text-slate-900">
          BLAYZIT · Inteligencia Operativa
        </h1>
        <p className="text-sm text-slate-600">
          Cargando análisis inteligente del sistema…
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-bold text-slate-900">
        Centro de Inteligencia BLAYZIT
      </h1>

      {/* Panel principal */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Resultado del análisis
        </h2>
        <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
          {JSON.stringify(analysis, null, 2)}
        </pre>
      </div>

      {/* Telemetría */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Telemetría del sistema
        </h2>

        <TelemetryChart metrics={metrics} />

        <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
          {JSON.stringify(metrics, null, 2)}
        </pre>
      </div>
    </section>
  );
}
