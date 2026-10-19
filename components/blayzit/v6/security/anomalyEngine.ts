export function detectAnomalies(content: string) {
  return content.includes("hack") ? ["anomalía crítica"] : [];
}
