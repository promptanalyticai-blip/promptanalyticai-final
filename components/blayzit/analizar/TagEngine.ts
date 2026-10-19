"use client";

export function generateTags(content: string) {
  const tags = [];

  if (/error|fail|critical/i.test(content)) tags.push("riesgo");
  if (/analysis|report/i.test(content)) tags.push("analítico");
  if (/meeting|minutes/i.test(content)) tags.push("reunión");
  if (/invoice|factura/i.test(content)) tags.push("finanzas");

  if (content.length > 5000) tags.push("extenso");
  if (content.split(/\s+/).length > 800) tags.push("detallado");

  return tags;
}
