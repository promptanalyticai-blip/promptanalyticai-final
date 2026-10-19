"use client";

export type DNIPDecision = {
  id: string;
  type: "riesgo" | "latencia" | "carga" | "anomalía";
  level: "bajo" | "medio" | "alto" | "crítico";
  message: string;
  timestamp: string;
};

export function runDNIP(signals: any): DNIPDecision[] {
  const decisions: DNIPDecision[] = [];
  const now = new Date().toLocaleTimeString();

  // Riesgo
  if (signals.dnip.riskLevel > 0.7) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "riesgo",
      level: "alto",
      message: "El nivel de riesgo supera el 70%.",
      timestamp: now,
    });
  }

  // Latencia
  if (signals.dnip.latency > 120) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "latencia",
      level: "medio",
      message: "La latencia supera los 120ms.",
      timestamp: now,
    });
  }

  // Carga
  if (signals.dnip.systemLoad > 80) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "carga",
      level: "alto",
      message: "La carga del sistema supera el 80%.",
      timestamp: now,
    });
  }

  // Anomalías
  if (signals.dnip.anomalies) {
    decisions.push({
      id: crypto.randomUUID(),
      type: "anomalía",
      level: "crítico",
      message: "Se detectó una anomalía en los datos.",
      timestamp: now,
    });
  }

  return decisions;
}
