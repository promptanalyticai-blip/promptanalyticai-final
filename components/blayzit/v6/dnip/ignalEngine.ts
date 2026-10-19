export function detectSignals(content: string) {
  return content.includes("alert") ? ["alerta"] : [];
}
