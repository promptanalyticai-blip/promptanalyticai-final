"use client";

import { DNIPRulesEngine } from "./DNIPRulesEngine";

export const rulesEngine = new DNIPRulesEngine();

rulesEngine.addRule({
  id: crypto.randomUUID(),
  name: "Riesgo crítico",
  description: "Si el riesgo final supera 85%, activar alerta crítica.",
  condition: (analysis) => analysis.decisions.finalRisk > 0.85,
  effect: () => ({ alert: "Riesgo crítico detectado" }),
});

rulesEngine.addRule({
  id: crypto.randomUUID(),
  name: "Archivo financiero sensible",
  description: "Si el archivo es financiero y el score IA es alto.",
  condition: (analysis) =>
    analysis.tags.includes("finanzas") && analysis.ai.score > 0.7,
  effect: () => ({ alert: "Revisión financiera requerida" }),
});

rulesEngine.addRule({
  id: crypto.randomUUID(),
  name: "Patrón de error",
  description: "Si el archivo contiene patrones de error.",
  condition: (analysis) =>
    analysis.patterns?.includes("Patrón de error"),
  effect: () => ({ alert: "Patrón de error detectado" }),
});
