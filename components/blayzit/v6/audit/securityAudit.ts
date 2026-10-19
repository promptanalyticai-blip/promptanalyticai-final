// components/blayzit/v6/audit/securityAudit.ts
import { auditEngine } from "./auditEngine";

export function logSecurity(event: {
  status: "allowed" | "blocked";
  reason?: string;
  filename?: string;
  kind: string;
}) {
  auditEngine.log("security", event);
}
