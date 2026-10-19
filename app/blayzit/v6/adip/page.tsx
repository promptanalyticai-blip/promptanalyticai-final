"use client";

import { useState } from "react";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";
import { ShieldCheck } from "lucide-react";

export default function AdipV6Page() {
  const [text, setText] = useState("");
  const [dnip, setDnip] = useState<any>(null);
  const [adip, setAdip] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!text.trim()) return;

    setLoading(true);

    const measured = telemetryEngine.measure("V6ADIP", async () => {
      const dnipResult = await dnipClient(text);
      const adipResult = await adipClient(dnipResult.signals || []);

      return { dnipResult, adipResult };
    });

    const output = await measured;

    setDnip(output.dnipResult);
    setAdip(output.adipResult);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6">
      <div className="flex items-center gap-3">
        <ShieldCheck size={28} className="text-orange-600" />
        <h1 className="text-2xl font-bold text-slate-900">ADIP V6 · Decisiones Inteligentes</h1>
      </div>

      <p className="text-sm text-slate-600">
        ADIP evalúa señales DNIP y genera decisiones inteligentes basadas en severidad y riesgo.
      </p>

      <textarea
        className="w-full h-40 p-4 border rounded-lg text-slate-800"
        placeholder="Pega texto aquí para ejecutar DNIP + ADIP..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyze}
        className="px-6 py-3 bg-orange-600 text-white rounded-lg text-sm"
      >
        {loading ? "Procesando..." : "Ejecutar ADIP"}
      </button>

      {dnip && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Señales DNIP</h2>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(dnip, null, 2)}
          </pre>
        </div>
      )}

      {adip && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Decisiones ADIP</h2>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(adip, null, 2)}
          </pre>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Telemetría ADIP</h2>
          <TelemetryChart metrics={metrics} />
        </div>
      )}
    </section>
  );
}
