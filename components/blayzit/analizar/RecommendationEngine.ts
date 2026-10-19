"use client";

export function generateRecommendations(analysis: any) {
  const recs = [];
  const risk = analysis.decisions.finalRisk;
  const aiScore = analysis.ai.score;

  if (risk > 0.8) {
    recs.push("Revisar el archivo manualmente por riesgo crítico.");
  }

  if (aiScore > 0.7) {
    recs.push("Aplicar análisis profundo con IA.");
  }

  if (analysis.file.size > 5_000_000) {
    recs.push("Dividir el archivo en partes más pequeñas.");
  }

  if (analysis.tags.includes("finanzas")) {
    recs.push("Enviar el archivo al módulo financiero.");
  }

  if (analysis.tags.includes("riesgo")) {
    recs.push("Activar protocolo de mitigación.");
  }

  return recs;
}
