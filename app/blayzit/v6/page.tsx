// app/blayzit/v6/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";

import {
  Upload,
  FileSearch,
  Brain,
  Radar,
  ShieldCheck,
  Activity,
  LayoutDashboard,
} from "lucide-react";

export default function V6Home() {
  const [snapshot, setSnapshot] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function runMiniSnapshot() {
    setLoading(true);

    const measured = telemetryEngine.measure("V6HomeSnapshot", async () => {
      const text = "BLAYZIT V6 · Mini Snapshot";

      const intelligence = await runBlayzitIntelligence(text);
      const dnip = await dnipClient(text);
      const adip = await adipClient(dnip.signals || []);

      return { intelligence, dnip, adip };
    });

    const result = await measured;

    setSnapshot(result);
    setLoading(false);
  }

  return (
    <section className="space-y-10 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Bienvenida a BLAYZIT V6
        </h1>
        <p className="text-sm text-slate-600">
          Plataforma de inteligencia operativa modular · DNIP · ADIP · IA · Telemetría.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/blayzit/v6/upload"
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition"
        >
          <Upload size={24} className="text-blue-600" />
          <div>
            <p className="font-semibold text-slate-900">Upload V6</p>
            <p className="text-xs text-slate-500">Sube archivos para análisis.</p>
          </div>
        </Link>

        <Link
          href="/blayzit/v6/analyze"
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition"
        >
          <FileSearch size={24} className="text-indigo-600" />
          <div>
            <p className="font-semibold text-slate-900">Analyze V6</p>
            <p className="text-xs text-slate-500">Analiza texto con IA + DNIP.</p>
          </div>
        </Link>

        <Link
          href="/blayzit/v6/intelligence"
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition"
        >
          <Brain size={24} className="text-emerald-600" />
          <div>
            <p className="font-semibold text-slate-900">Intelligence V6</p>
            <p className="text-xs text-slate-500">Centro de inteligencia global.</p>
          </div>
        </Link>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/blayzit/v6/dnip"
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition"
        >
          <Radar size={24} className="text-red-600" />
          <div>
            <p className="font-semibold text-slate-900">DNIP</p>
            <p className="text-xs text-slate-500">Detección de riesgos.</p>
          </div>
        </Link>

        <Link
          href="/blayzit/v6/adip"
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition"
        >
          <ShieldCheck size={24} className="text-orange-600" />
          <div>
            <p className="font-semibold text-slate-900">ADIP</p>
            <p className="text-xs text-slate-500">Decisiones inteligentes.</p>
          </div>
        </Link>

        <Link
          href="/blayzit/v6/telemetry"
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition"
        >
          <Activity size={24} className="text-purple-600" />
          <div>
            <p className="font-semibold text-slate-900">Telemetría V6</p>
            <p className="text-xs text-slate-500">Monitoreo avanzado.</p>
          </div>
        </Link>
      </div>

      {/* Mini Snapshot */}
      <div className="space-y-4">
        <button
          onClick={runMiniSnapshot}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm"
        >
          {loading ? "Generando snapshot..." : "Ejecutar Mini Snapshot"}
        </button>

        {snapshot && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                Inteligencia Global
              </h3>
              <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-48">
                {JSON.stringify(snapshot.intelligence, null, 2)}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                DNIP · Señales
              </h3>
              <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-48">
                {JSON.stringify(snapshot.dnip, null, 2)}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                ADIP · Decisiones
              </h3>
              <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto max-h-48">
                {JSON.stringify(snapshot.adip, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
