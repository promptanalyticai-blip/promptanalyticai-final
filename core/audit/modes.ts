//core/audit/modes.ts
import { addAuditEvent } from "./index";

export const auditModes = {
  activated(mode: string, detail: string, tenantId: string) {
    addAuditEvent({
      tenantId,
      event: "mode",
      mode,
      detail
    });
  }
};
