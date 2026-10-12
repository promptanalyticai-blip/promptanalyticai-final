//core/audit/signals.ts
import { addAuditEvent } from "./index";

export const auditSignals = {
  received(type: string, detail: string, tenantId: string) {
    addAuditEvent({
      tenantId,
      event: "signal",
      type,
      detail
    });
  },

  anomaly(type: string, detail: string, tenantId: string) {
    addAuditEvent({
      tenantId,
      event: "anomaly",
      type,
      detail
    });
  }
};
