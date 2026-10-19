// components/blayzit/master/V6MasterDashboard.tsx
"use client";

import DnipDashboard from "../v6/dnip/DnipDashboard";
import AdipDashboard from "../v6/adip/AdipDashboard";
import IaDashboard from "../v6/ai/IaDashboard";
import V6SecurityDashboard from "./V6SecurityDashboard";
import V6TelemetryDashboard from "./V6TelemetryDashboard";
import V6AuditDashboard from "./V6AuditDashboard";

export default function V6MasterDashboard({ analysis }: { analysis: any }) {
  // DNIP mock data
  const dnipData = analysis?.dnip ?? {
    riskScore: 62,
    patterns: ["Patrón de acceso irregular", "Eventos fuera de horario"],
    anomalies: [
      { label: "Acceso desde IP desconocida", severity: "high" },
      { label: "Incremento de errores 5xx", severity: "medium" },
    ],
    threats: [
      { label: "Posible scraping", level: "warning" },
      { label: "Intento de fuerza bruta", level: "critical" },
    ],
  };

  // ADIP mock data
  const adipData = analysis?.adip ?? {
    automationScore: 48,
    executed: [
      { label: "Bloqueo de IP sospechosa", type: "auto", status: "executed" },
    ],
    pending: [
      { label: "Revisión de logs", type: "rule", status: "pending" },
    ],
    failed: [
      { label: "Sincronización con API externa", type: "predictive", status: "failed" },
    ],
  };

  // IA mock data
  const iaData = analysis?.ia ?? {
    summary: "El contenido describe un comportamiento irregular con posibles riesgos operativos.",
    sentiment: "neutral",
    categories: [
      { name: "Riesgo Operativo", confidence: 0.82 },
      { name: "Comportamiento Irregular", confidence: 0.67 },
    ],
    insights: [
      { label: "Patrón dominante", value: "Acceso fuera de horario" },
      { label: "Nivel de riesgo", value: "Moderado" },
    ],
    similarityScore: 0.63,
  };

  // Seguridad mock data
  const securityData = analysis?.security ?? {
    threats: [
      { label: "Intento de fuerza bruta", level: "critical" },
      { label: "Scraping detectado", level: "warning" },
    ],
    anomalies: [
      { label: "Acceso fuera de horario", severity: "medium" },
    ],
    blocked: 3,
    allowed: 12,
  };

  // Telemetría mock data
  const metricsData = analysis?.metrics ?? [
    { module: "IA · resumen", durationMs: 12.4, timestamp: "10:22:01" },
    { module: "DNIP · patrones", durationMs: 1.2, timestamp: "10:22:01" }, // mismo timestamp → corregido con key único
  ];

  // Auditoría mock data
  const auditLogs = analysis?.audit ?? [
    { eventType: "ingest", timestamp: "10:21:55", payload: { filename: "log.txt" } },
    { eventType: "security", timestamp: "10:22:00", payload: { status: "blocked" } },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <DnipDashboard data={dnipData} />
      <AdipDashboard data={adipData} />
      <IaDashboard data={iaData} />
      <V6SecurityDashboard data={securityData} />
      <V6TelemetryDashboard metrics={metricsData} />
      <V6AuditDashboard logs={auditLogs} />
    </div>
  );
}
