"use client";

import { useState } from "react";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";
import { Shield, FileText, History } from "lucide-react";

export default function AuditV6Page() {
  const [text, setText] = useState("");
  const [dnip, setDnip] = useState<any>(null);
  const [adip, setAdip] = useState<any>(null);
  const [audit, setAudit] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function buildAuditReport(dnipSignals: any[], adipDecision: any) {
    const timestamp = new Date().toISOString();

    return {
      engine: "AUDIT_V6",
      timestamp,
      totalSignals: dnipSignals.length,
      severity: adipDecision.globalSeverity,
      riskScore: adipDecision.riskScore,
      dnipSignals,
      adipDecision,
      events: [
        {
          type: "analysis",
          timestamp,
          description: "Análisis ejecutado con DNIP + ADIP",
        },
        {
          type: "security-check",
          timestamp,
          description: "Verificación de seguridad automática",
        },
        {
          type: "audit-log",
          timestamp,
          description: "Evento registrado en Auditoría V6",
        },
      ],
      recommendations: adipDecision.recommendedActions,
    };
  }

  async function runAudit() {
    if (!text.trim()) return;

    setLoading(true);

    const measured = telemetryEngine.measure("V6Audit", async () => {
      const dnipResult = await dnipClient(text);
      const adipResult = await adipClient(dnipResult.signals || []);
      const auditReport = buildAuditReport(
        dnipResult.signals || [],
        adipResult
      );

      return { dnipResult, adipResult, auditReport };
    });

    const output = await measured;

    setDnip(output.dnipResult);
    setAdip(output.adipResult);
    setAudit(output.auditReport);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6">
      <div className="flex items-center gap-3">
        <History size={28} className="text-blue-600" />
        <h1 className="text-2xl font-bold text-slate-900">
          Auditoría V6 · Trazabilidad del Sistema
        </h1>
      </div>

      <p className="text-sm text-slate-600">
        Auditoría V6 registra eventos, correlaciona DNIP + ADIP y genera trazabilidad
        completa del sistema.
      </p>

      <textarea
        className="w-full h-40 p-4 border rounded-lg text-slate-800"
        placeholder="Pega texto aquí para ejecutar Auditoría V6..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={runAudit}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm"
      >
        {loading ? "Generando auditoría..." : "Ejecutar Auditoría V6"}
      </button>

      {/* DNIP */}
      {dnip && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-red-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Señales DNIP
            </h2>
          </div>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(dnip, null, 2)}
          </pre>
        </div>
      )}

      {/* ADIP */}
      {adip && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-orange-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Decisiones ADIP
            </h2>
          </div>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(adip, null, 2)}
          </pre>
        </div>
      )}

      {/* Auditoría */}
      {audit && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <History size={20} className="text-blue-700" />
            <h2 className="text-lg font-semibold text-slate-800">
              Reporte de Auditoría V6
            </h2>
          </div>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(audit, null, 2)}
          </pre>
        </div>
      )}

      {/* Telemetría */}
      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Telemetría Auditoría V6
          </h2>
          <TelemetryChart metrics={metrics} />
        </div>
      )}
    </section>
  );
}
