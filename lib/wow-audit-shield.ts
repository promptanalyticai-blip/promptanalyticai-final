// lib/wow-audit-shield.ts
// FASE 53 — WOW Audit Shield
// Auditoría inteligente integrada con seguridad, decisiones y acciones.

type AuditSeverity = "info" | "warning" | "security" | "critical";

type AuditEventPayload = {
  code: string;
  message: string;
  severity: AuditSeverity;
  context?: any;
  timestamp: number;
  userId?: string;
  tenantId?: string;
};

function buildAuditPayload(wow: any, code: string, message: string, severity: AuditSeverity, context?: any): AuditEventPayload {
  return {
    code,
    message,
    severity,
    context,
    timestamp: Date.now(),
    userId: wow?.user?.id || "unknown",
    tenantId: wow?.tenant?.id || "unknown",
  };
}

// Stub (en producción: enviar a Supabase, LogService, etc.)
async function sendAudit(payload: AuditEventPayload) {
  console.log("[WOW AUDIT]", payload);
}

export async function auditEvent(wow: any, code: string, message?: string, context?: any, severity: AuditSeverity = "info") {
  const payload = buildAuditPayload(wow, code, message || code, severity, context);
  await sendAudit(payload);
}

export async function auditSecurityEvent(wow: any, code: string, message?: string, context?: any) {
  return auditEvent(wow, code, message, context, "security");
}

export async function auditDecisionEvent(wow: any, decision: any) {
  const code = `DECISION_${decision.priority.toUpperCase()}`;
  const message = `Decisión (${decision.priority}) generada para señal ${decision.signalId}`;
  return auditEvent(wow, code, message, { decision }, "info");
}

export async function auditActionEvent(wow: any, action: any) {
  const code = `ACTION_${action.priority.toUpperCase()}`;
  const message = `Acción (${action.priority}) ejecutada en contexto ${action.context}`;
  return auditEvent(wow, code, message, { action }, "info");
}
