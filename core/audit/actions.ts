//core/audit/actions.ts
import { addAuditEvent } from "./index";

export const auditActions = {
  executed(name: string, detail: string, tenantId: string) {
    addAuditEvent({
      tenantId,
      event: "action",
      name,
      detail
    });
  },

  failed(name: string, detail: string, tenantId: string) {
    addAuditEvent({
      tenantId,
      event: "recovery",
      name,
      detail
    });
  }
};
