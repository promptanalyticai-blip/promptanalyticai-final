// lib/wow-audit.ts

export type WOWAuditEvent = {
  type: string;          // "view", "action", "decision", "error", etc.
  context: string;       // "dnip", "adip", "blayzit", "dashboard", etc.
  description: string;   // texto del evento
  role: string;          // rol del usuario
  level: string;         // nivel del tenant
  sensitive?: boolean;   // si es un evento sensible
  timestamp: number;     // fecha en ms
};

export async function logWOWEvent(wow: any, event: WOWAuditEvent) {
  const payload = {
    ...event,
    role: wow.role,
    level: wow.level,
    timestamp: Date.now(),
  };

  try {
    await fetch("/api/audit/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("WOW Audit Error:", err);
  }
}

export function auditView(wow: any, context: string) {
  logWOWEvent(wow, {
    type: "view",
    context,
    description: `Vista abierta: ${context}`,
  });
}

export function auditAction(wow: any, context: string, description: string) {
  logWOWEvent(wow, {
    type: "action",
    context,
    description,
    sensitive: wow.security?.requiresConfirmationForHighImpact || false,
  });
}

export function auditDecision(wow: any, decision: any) {
  logWOWEvent(wow, {
    type: "decision",
    context: "dnip",
    description: `Decisión consultada: ${decision.title}`,
    sensitive: true,
  });
}

export function auditError(wow: any, error: any) {
  logWOWEvent(wow, {
    type: "error",
    context: "system",
    description: error?.message || "Error desconocido",
    sensitive: true,
  });
}
