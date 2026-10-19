"use client";

export function runADIPPredictive(analysis: any) {
  const actions = [];

  const predictedRisk =
    analysis.decisions.finalRisk * 0.8 +
    analysis.ai.score * 0.2 +
    Math.random() * 0.05;

  if (predictedRisk > 0.85) {
    actions.push({
      id: crypto.randomUUID(),
      action: "Activar protocolo preventivo de riesgo",
      status: "pendiente",
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  if (analysis.tags.includes("finanzas")) {
    actions.push({
      id: crypto.randomUUID(),
      action: "Enviar archivo al módulo financiero",
      status: "pendiente",
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  if (analysis.tags.includes("analítico")) {
    actions.push({
      id: crypto.randomUUID(),
      action: "Generar reporte analítico extendido",
      status: "pendiente",
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  return actions;
}
