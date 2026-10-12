// lib/dnip-engine.ts
import { getTenantLimits } from "@/core/tenant/limits";
import { getTenantModes } from "@/core/tenant/modes";
import { auditSignals } from "@/core/audit/signals";
import { wowEngine } from "@/lib/wow-decision-engine";

export function processDnipSignal(tenantId: string, signal: any) {
  const limits = getTenantLimits(tenantId);
  const modes = getTenantModes(tenantId);

  // Validación de límites por tenant
  if (signal.count > limits.maxSignals) {
    auditSignals.anomaly("signal-limit", "Límite de señales excedido", tenantId);
    return { error: "limit_exceeded" };
  }

  // Auditoría por tenant
  auditSignals.received(signal.type, signal.detail, tenantId);

  // WOW Engine por tenant
  wowEngine.handleSignal(tenantId, signal, modes);

  return { ok: true };
}
