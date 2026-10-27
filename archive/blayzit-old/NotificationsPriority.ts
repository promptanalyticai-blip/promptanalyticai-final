"use client";

export const PRIORITY = {
  CRITICAL: "critical",
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

// Colores enterprise por prioridad
export const PRIORITY_STYLES = {
  critical: {
    border: "border-red-300",
    bg: "bg-red-50",
    tone: "text-red-600",
  },
  high: {
    border: "border-amber-300",
    bg: "bg-amber-50",
    tone: "text-amber-600",
  },
  medium: {
    border: "border-blue-300",
    bg: "bg-blue-50",
    tone: "text-blue-600",
  },
  low: {
    border: "border-slate-300",
    bg: "bg-slate-50",
    tone: "text-slate-600",
  },
};

// Clasificación automática según contenido
export function classifyPriority(notification) {
  const t = notification.title.toLowerCase();
  const d = notification.desc.toLowerCase();

  if (
    t.includes("crítico") ||
    t.includes("fallo") ||
    d.includes("desencadenar") ||
    d.includes("inestable")
  ) {
    return PRIORITY.CRITICAL;
  }

  if (
    t.includes("riesgo") ||
    t.includes("alerta") ||
    d.includes("irregular") ||
    d.includes("podría escalar")
  ) {
    return PRIORITY.HIGH;
  }

  if (
    t.includes("latencia") ||
    t.includes("carga") ||
    d.includes("afectar rendimiento")
  ) {
    return PRIORITY.MEDIUM;
  }

  return PRIORITY.LOW;
}
