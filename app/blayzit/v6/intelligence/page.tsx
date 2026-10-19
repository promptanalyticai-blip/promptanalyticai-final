"use client";

import { useEffect, useState } from "react";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";

export default function IntelligenceV6() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const measured = telemetryEngine.measure("V6Intelligence", async () => {
        // Versión V6: análisis global del sistema
        return await runBlayzitIntelligence("BLAYZIT V6 · Estado global del sistema");
      });

      const result = await measured;

      setAnalysis(result);
      setMetrics(telemetryEngine.getMetrics());
      setLoading(false);
    }

    load();
  }, []);

  return (
    <section className="space-y-8 p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        BLAYZIT V6 · Centro de Inteligencia Operativa
      </h1>

      {loading && (
        <p className="text-sm text-slate-600">
          Calculando inteligencia operativa del sistema…
        </p>
      )}

      {analysis && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Insights globales (DNIP + ADIP)
          </h2>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Telemetría de inteligencia V6
          </h2>

          <TelemetryChart metrics={metrics} />

          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(metrics, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}
