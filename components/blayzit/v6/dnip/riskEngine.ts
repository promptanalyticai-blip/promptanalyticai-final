export function computeRisk({ embeddings, patterns, anomalies }) {
  let score = 0;

  // Patrones detectados → riesgo medio
  if (patterns.length > 0) score += 0.35;

  // Anomalías detectadas → riesgo alto
  if (anomalies.length > 0) score += 0.45;

  // Similitud alta → riesgo adicional
  if (embeddings.similarity > 0.5) score += 0.25;

  // Si hay señales fuertes, sube aún más
  if (patterns.includes("corrección") || patterns.includes("pendiente")) {
    score += 0.15;
  }

  // Riesgo mínimo si no hay nada
  if (score === 0) score = 0.10;

  return Math.min(score, 1);
}
