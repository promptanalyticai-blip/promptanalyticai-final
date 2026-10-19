// components/blayzit/master/V6MasterDashboard.tsx
"use client";

import DnipDashboard from "@/components/blayzit/v6/dnip/DnipDashboard";

export default function V6MasterDashboard({ analysis }: { analysis: any }) {
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

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <DnipDashboard data={dnipData} />
      {/* Aquí luego agregamos ADIP, IA, Seguridad, Telemetría, Auditoría */}
    </div>
  );
}
