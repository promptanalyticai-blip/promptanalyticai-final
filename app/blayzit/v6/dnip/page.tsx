"use client";

import { useState } from "react";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";
import { Radar } from "lucide-react";

export default function DnipV6Page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!text.trim()) return;

    setLoading(true);

    const measured = telemetryEngine.measure("V6DNIP", async () => {
      return await dnipClient(text);
    });

    const output = await measured;

    setResult(output);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6">
      <div className="flex items-center gap-3">
        <Radar size={28} className="text-red-600" />
        <h1 className="text-2xl font-bold text-slate-900">DNIP V6 · Detección de Riesgos</h1>
      </div>

      <p className="text-sm text-slate-600">
        Analiza texto para detectar señales de riesgo, anomalías y patrones críticos.
      </p>

      <textarea
        className="w-full h-40 p-4 border rounded-lg text-slate-800"
        placeholder="Pega texto aquí para analizar con DNIP V6..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyze}
        className="px-6 py-3 bg-red-600 text-white rounded-lg text-sm"
      >
        {loading ? "Analizando..." : "Ejecutar DNIP"}
      </button>

      {result && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Resultado DNIP</h2>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Telemetría DNIP</h2>
          <TelemetryChart metrics={metrics} />
        </div>
      )}
    </section>
  );
}
