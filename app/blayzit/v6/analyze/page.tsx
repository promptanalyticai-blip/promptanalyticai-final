"use client";

import { useState } from "react";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";

export default function AnalyzeV6() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!text.trim()) return;

    setLoading(true);

    const measured = telemetryEngine.measure("V6Analyze", async () => {
      return await runBlayzitIntelligence(text);
    });

    const result = await measured;

    setAnalysis(result);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        BLAYZIT V6 · Análisis Inteligente
      </h1>

      <div className="space-y-4">
        <textarea
          className="w-full h-48 p-4 border rounded-lg text-slate-800"
          placeholder="Pega texto aquí para analizar con DNIP + ADIP..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          {loading ? "Analizando..." : "Analizar"}
        </button>
      </div>

      {analysis && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Resultado del análisis inteligente
          </h2>

          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Telemetría del análisis
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
