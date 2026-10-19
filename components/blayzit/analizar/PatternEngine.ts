"use client";

export function detectPatterns(content: string) {
  const patterns = [];

  if (/error|fail|critical/i.test(content)) patterns.push("Patrón de error");
  if (/success|completed|done/i.test(content)) patterns.push("Patrón de éxito");
  if (/meeting|minutes|agenda/i.test(content)) patterns.push("Patrón de reunión");
  if (/invoice|payment|total/i.test(content)) patterns.push("Patrón financiero");
  if (/analysis|report|summary/i.test(content)) patterns.push("Patrón analítico");

  if (content.length > 8000) patterns.push("Patrón de documento extenso");
  if (content.split(/\s+/).length > 1500) patterns.push("Patrón de documento detallado");

  return patterns;
}
