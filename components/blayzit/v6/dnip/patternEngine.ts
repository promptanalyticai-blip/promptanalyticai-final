export function detectPatterns(content: string) {
  const patterns = [];

  if (content.includes("TODO")) patterns.push("pendiente");
  if (content.includes("fix")) patterns.push("corrección");

  return patterns;
}
