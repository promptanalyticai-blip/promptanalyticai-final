"use client";

export function classifyFile(content: string) {
  const lower = content.toLowerCase();

  if (lower.includes("error") || lower.includes("fail")) {
    return "Reporte de errores";
  }

  if (lower.includes("invoice") || lower.includes("factura")) {
    return "Documento financiero";
  }

  if (lower.includes("meeting") || lower.includes("minutes")) {
    return "Notas de reunión";
  }

  if (lower.includes("analysis") || lower.includes("report")) {
    return "Documento analítico";
  }

  return "Documento general";
}
