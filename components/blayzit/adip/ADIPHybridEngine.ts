"use client";

import { runADIP } from "./ADIPEngine";

export function runADIPHybrid(decision: any) {
  const baseActions = runADIP(decision);

  const aiActions = [];

  if (decision.aiScore > 0.7) {
    aiActions.push({
      id: crypto.randomUUID(),
      action: "Activar modo de revisión profunda",
      status: "pendiente",
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  if (decision.finalRisk > 0.8) {
    aiActions.push({
      id: crypto.randomUUID(),
      action: "Enviar alerta de riesgo crítico",
      status: "pendiente",
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  return [...baseActions, ...aiActions];
}
