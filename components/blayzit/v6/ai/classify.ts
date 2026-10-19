export function classify(content: string) {
  if (content.length > 500) return "extenso";
  if (content.includes("error")) return "riesgo";
  return "normal";
}
