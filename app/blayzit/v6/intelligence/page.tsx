"use client";

import { useEffect, useState } from "react";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";

export default function IntelligenceV6() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const measured = telemetryEngine.measure("V6Intelligence", async () => {
        const text = "BLAYZIT V6 · Estado global del sistema";

        // 1. Inteligencia general
        const intelligence = await runBlayzitIntelligence(text);

        // 2. Señales DNIP
        const dnip = await dnipClient(text);

        // 3. Decisiones ADIP basadas en DNIP
        const adip = await adipClient(dnip.signals || []);

        return {
          intelligence,
          dnip,
          adip,
        };
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
        <div className="space-y-6">

          {/* Inteligencia general */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Inteligencia Global (WOW + IA)
            </h2>
            <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
              {JSON.stringify(analysis.intelligence, null, 2)}
            </pre>
          </div>

          {/* DNIP */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Señales DNIP (Detección de Riesgos)
            </h2>
            <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
              {JSON.stringify(analysis.dnip, null, 2)}
            </pre>
          </div>

          {/* ADIP */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Decisiones ADIP (Acción Inteligente)
            </h2>
            <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
              {JSON.stringify(analysis.adip, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {/* Telemetría */}
      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Telemetría de Inteligencia V6
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
