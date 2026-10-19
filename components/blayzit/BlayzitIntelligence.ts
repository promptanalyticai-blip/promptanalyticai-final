"use client";

import AnalyzerBridge from "@/components/blayzit/analizar/AnalyzerBridge";

export async function runBlayzitIntelligence() {
  const file = {
    name: "simulado.txt",
  };

  const content = `
    Este es un archivo simulado para generar señales DNIP, ADIP, IA y patrones.
    BLAYZIT V5 está en modo de demostración interna.
  `;

  const processed = {
    file,
    content,
  };

  // Resolver correctamente la Promise del motor
  const analysis = await AnalyzerBridge(processed);

  return analysis;
}
