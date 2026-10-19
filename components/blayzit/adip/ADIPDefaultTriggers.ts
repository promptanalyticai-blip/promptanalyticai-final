"use client";

import { ADIPAutomationEngine } from "./ADIPAutomationEngine";

export const automationEngine = new ADIPAutomationEngine();

automationEngine.addTrigger({
  id: crypto.randomUUID(),
  name: "Mitigación de riesgo crítico",
  description: "Si el riesgo supera 90%, activar mitigación automática.",
  condition: (analysis) => analysis.decisions.finalRisk > 0.9,
  action: () => ({ auto: "Mitigación de riesgo activada" }),
});

automationEngine.addTrigger({
  id: crypto.randomUUID(),
  name: "Ruta financiera automática",
  description: "Si el archivo es financiero, enviarlo al módulo financiero.",
  condition: (analysis) => analysis.tags.includes("finanzas"),
  action: () => ({ auto: "Archivo enviado al módulo financiero" }),
});

automationEngine.addTrigger({
  id: crypto.randomUUID(),
  name: "Patrón de error automático",
  description: "Si se detecta patrón de error, generar reporte automático.",
  condition: (analysis) =>
    analysis.patterns?.includes("Patrón de error"),
  action: () => ({ auto: "Reporte automático generado" }),
});
