"use client";

import { useState } from "react";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";

export default function TelemetryDashboardV6() {
  const [snapshot, setSnapshot] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function runTelemetrySnapshot() {
    setLoading(true);

    const measured = telemetryEngine.measure("V6TelemetrySnapshot", async () => {
      const text = "BLAYZIT V6 · Telemetría Global";

      const intelligence = await runBlayzitIntelligence(text);
      const dnip = await dnipClient(text);
      const adip = await adipClient(dnip.signals || []);

      return {
        intelligence,
        dnip,
        adip,
      };
    });

    const result = await measured;

    setSnapshot(result);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">
          BLAYZIT V6 · Telemetría Avanzada
        </h1>
        <p className="text-sm text-slate-600">
          Monitoreo en tiempo real de Inteligencia, DNIP, ADIP y rendimiento del sistema.
        </p>
      </header>

      <div className="space-y-4">
        <button
          onClick={runTelemetrySnapshot}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm"
        >
          {loading ? "Generando snapshot..." : "Ejecutar Snapshot de Telemetría"}
        </button>

        <p className="text-xs text-slate-500">
          Ejecuta una lectura global del sistema para registrar métricas V6.
        </p>
      </div>

      {/* Snapshot */}
      {snapshot && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inteligencia */}
          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              Inteligencia Global (WOW + IA)
            </h2>
            <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-64">
              {JSON.stringify(snapshot.intelligence, null, 2)}
            </pre>
          </div>

          {/* DNIP */}
          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              DNIP · Señales de Riesgo
            </h2>
            <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-64">
              {JSON.stringify(snapshot.dnip, null, 2)}
            </pre>
          </div>

          {/* ADIP */}
          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              ADIP · Decisiones Inteligentes
            </h2>
            <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-64">
              {JSON.stringify(snapshot.adip, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {/* Métricas */}
      {metrics.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-slate-800">
            Métricas del Sistema (Telemetría V6)
          </h2>

          <TelemetryChart metrics={metrics} />

          <pre className="bg-white p-4 rounded-lg shadow text-xs overflow-auto max-h-64">
            {JSON.stringify(metrics, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}
