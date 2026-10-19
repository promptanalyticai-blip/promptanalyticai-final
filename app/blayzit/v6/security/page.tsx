"use client";

import { useState } from "react";
import { dnipClient } from "@/components/blayzit/dnip/dnipClient";
import { adipClient } from "@/components/blayzit/adip/adipClient";
import { telemetryEngine } from "@/components/blayzit/telemetry/TelemetryEngine";
import TelemetryChart from "@/components/blayzit/telemetry/TelemetryChart";

import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";

export default function SecurityV6Page() {
  const [text, setText] = useState("");
  const [dnip, setDnip] = useState<any>(null);
  const [adip, setAdip] = useState<any>(null);
  const [security, setSecurity] = useState<any>(null);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function buildSecurityReport(dnipSignals: any[], adipDecision: any) {
    const hasCritical = dnipSignals.some((s) => s.severity === "critical");
    const hasSecurityTags = dnipSignals.some((s) =>
      s.tags?.includes("security")
    );

    const report = {
      engine: "SECURITY_V6",
      threatLevel: adipDecision.globalSeverity,
      criticalFindings: dnipSignals.filter((s) => s.severity === "critical"),
      securitySignals: dnipSignals.filter((s) =>
        s.tags?.includes("security")
      ),
      recommendations: [],
    };

    if (hasCritical) {
      report.recommendations.push(
        "Activar protocolo de emergencia.",
        "Revisar accesos, permisos y credenciales.",
        "Auditar logs de seguridad inmediatamente."
      );
    }

    if (hasSecurityTags) {
      report.recommendations.push(
        "Ejecutar revisión de vulnerabilidades.",
        "Validar cifrado y políticas de acceso.",
        "Revisar integridad de archivos y endpoints."
      );
    }

    if (!hasCritical && !hasSecurityTags) {
      report.recommendations.push(
        "No se detectaron amenazas críticas.",
        "Mantener monitoreo estándar.",
        "Registrar análisis como referencia."
      );
    }

    return report;
  }

  async function analyzeSecurity() {
    if (!text.trim()) return;

    setLoading(true);

    const measured = telemetryEngine.measure("V6Security", async () => {
      const dnipResult = await dnipClient(text);
      const adipResult = await adipClient(dnipResult.signals || []);
      const securityReport = buildSecurityReport(
        dnipResult.signals || [],
        adipResult
      );

      return { dnipResult, adipResult, securityReport };
    });

    const output = await measured;

    setDnip(output.dnipResult);
    setAdip(output.adipResult);
    setSecurity(output.securityReport);
    setMetrics(telemetryEngine.getMetrics());
    setLoading(false);
  }

  return (
    <section className="space-y-8 p-6">
      <div className="flex items-center gap-3">
        <Shield size={28} className="text-red-600" />
        <h1 className="text-2xl font-bold text-slate-900">
          Seguridad V6 · Análisis de Amenazas
        </h1>
      </div>

      <p className="text-sm text-slate-600">
        Seguridad V6 correlaciona DNIP + ADIP para detectar amenazas, evaluar
        severidad y generar recomendaciones de seguridad.
      </p>

      <textarea
        className="w-full h-40 p-4 border rounded-lg text-slate-800"
        placeholder="Pega texto aquí para ejecutar Seguridad V6..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyzeSecurity}
        className="px-6 py-3 bg-red-600 text-white rounded-lg text-sm"
      >
        {loading ? "Analizando seguridad..." : "Ejecutar Seguridad V6"}
      </button>

      {/* DNIP */}
      {dnip && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert size={20} className="text-red-600" />
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
            <ShieldCheck size={20} className="text-orange-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Decisiones ADIP
            </h2>
          </div>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(adip, null, 2)}
          </pre>
        </div>
      )}

      {/* Seguridad V6 */}
      {security && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-red-700" />
            <h2 className="text-lg font-semibold text-slate-800">
              Reporte de Seguridad V6
            </h2>
          </div>
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(security, null, 2)}
          </pre>
        </div>
      )}

      {/* Telemetría */}
      {metrics.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Telemetría Seguridad V6
          </h2>
          <TelemetryChart metrics={metrics} />
        </div>
      )}
    </section>
  );
}
