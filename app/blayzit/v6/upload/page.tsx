"use client";

import { useState } from "react";
import { docxProcessor } from "@/components/blayzit/analizar/docxProcessor";
import { csvProcessor } from "@/components/blayzit/analizar/csvProcessor";
import { pdfProcessor } from "@/components/blayzit/analizar/pdfProcessor";
import { logProcessor } from "@/components/blayzit/analizar/logProcessor";
import { imageProcessor } from "@/components/blayzit/analizar/imageProcessor";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

export default function UploadV6() {
  const [result, setResult] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const extension = file.name.split(".").pop()?.toLowerCase();

    let analysis;

    const measured = telemetryEngine.measure("V6Upload", async () => {
      if (extension === "docx") return await docxProcessor(file);
      if (extension === "csv") return await csvProcessor(file);
      if (extension === "pdf") return await pdfProcessor(file);
      if (extension === "log" || extension === "txt") return await logProcessor(file);
      if (["png", "jpg", "jpeg"].includes(extension!)) return await imageProcessor(file);

      return { error: "Tipo de archivo no soportado" };
    });

    analysis = await measured;

    setResult(analysis);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        BLAYZIT V6 · Ingestión Inteligente
      </h1>

      <div className="space-y-4">
        <input
          type="file"
          onChange={handleUpload}
          className="text-slate-700"
        />

        {loading && (
          <p className="text-sm text-slate-600">Procesando archivo…</p>
        )}
      </div>

      {result && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Resultado del análisis
          </h2>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Telemetría del procesamiento
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
