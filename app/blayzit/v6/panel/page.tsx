"use client";

import { useState } from "react";
import Link from "next/link";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";

export default function PanelMaestroV6() {
  const [snapshot, setSnapshot] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function runGlobalSnapshot() {
    setLoading(true);

    const measured = telemetryEngine.measure("V6PanelSnapshot", async () => {
      const text = "BLAYZIT V6 · Snapshot global del sistema";

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
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            BLAYZIT V6 · Panel Maestro Operativo
          </h1>
          <p className="text-sm text-slate-600">
            Centro unificado de Upload, Analyze, Intelligence, DNIP y ADIP.
          </p>
        </div>

        <nav className="flex gap-3">
          <Link
            href="/blayzit/v6/upload"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm"
          >
            Upload V6
          </Link>
          <Link
            href="/blayzit/v6/analyze"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm"
          >
            Analyze V6
          </Link>
          <Link
            href="/blayzit/v6/intelligence"
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm"
          >
            Intelligence V6
          </Link>
        </nav>
      </header>

      <div className="space-y-4">
        <button
          onClick={runGlobalSnapshot}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm"
        >
          {loading ? "Calculando snapshot global..." : "Ejecutar Snapshot Global V6"}
        </button>

        <p className="text-xs text-slate-500">
          Ejecuta una lectura global del sistema usando Inteligencia V6 + DNIP + ADIP.
        </p>
      </div>

      {snapshot && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              Inteligencia Global (WOW + IA)
            </h2>
            <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-64">
              {JSON.stringify(snapshot.intelligence, null, 2)}
            </pre>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              DNIP · Señales de Riesgo
            </h2>
            <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-64">
              {JSON.stringify(snapshot.dnip, null, 2)}
            </pre>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-slate-100">
            <h2 className="text-sm font-semibold text-slate-800 mb-2">
              ADIP · Decisiones y Acciones
            </h2>
            <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-64">
              {JSON.stringify(snapshot.adip, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-800">
            Telemetría del Panel Maestro V6
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
