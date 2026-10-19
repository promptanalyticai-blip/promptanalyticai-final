export function detectThreats(content: string) {
  return content.includes("breach") ? ["posible brecha"] : [];
}
