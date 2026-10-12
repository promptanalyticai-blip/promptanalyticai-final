//core/audit/decisions.ts
import { audit } from "./index";

export const auditDecisions = {
  made(decision: string, detail: string, tenantId?: string) {
    audit.log({
      id: crypto.randomUUID(),
      type: "decision",
      event: "made",
      detail: `${decision}: ${detail}`,
      timestamp: Date.now(),
      tenantId
    });
  },

  overridden(decision: string, detail: string, tenantId?: string, userId?: string) {
    audit.log({
      id: crypto.randomUUID(),
      type: "decision",
      event: "overridden",
      detail: `${decision} fue reemplazada: ${detail}`,
      timestamp: Date.now(),
      tenantId,
      userId
    });
  }
};
