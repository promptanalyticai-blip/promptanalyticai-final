"use client";

export type SecuritySignal = {
  id: string;
  type: string;
  message: string;
  severity: number;
  timestamp: string;
};

export function runSecurityEngine(analysis: any): SecuritySignal[] {
  const signals: SecuritySignal[] = [];

  // 🔥 Señal 1: Riesgo final demasiado alto
  if (analysis.decisions?.some((d: any) => d.level > 0.85)) {
    signals.push({
      id: crypto.randomUUID(),
      type: "riesgo_critico",
      message: "El motor DNIP detectó un nivel de riesgo crítico.",
      severity: 0.9,
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  // 🔥 Señal 2: Automatizaciones excesivas
  if (analysis.automation?.length > 3) {
    signals.push({
      id: crypto.randomUUID(),
      type: "automatizacion_excesiva",
      message: "ADIP ejecutó demasiadas automatizaciones en un solo análisis.",
      severity: 0.7,
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  // 🔥 Señal 3: Patrones sospechosos
  if (analysis.patterns?.includes("Patrón de error")) {
    signals.push({
      id: crypto.randomUUID(),
      type: "patron_sospechoso",
      message: "Se detectó un patrón sospechoso en el archivo.",
      severity: 0.6,
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  // 🔥 Señal 4: Tags sensibles
  if (analysis.tags?.includes("finanzas")) {
    signals.push({
      id: crypto.randomUUID(),
      type: "tag_sensible",
      message: "El archivo contiene tags sensibles relacionados con finanzas.",
      severity: 0.5,
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  return signals;
}
