//core/audit/types.ts
export interface AuditEvent {
  id: string;
  type: "signal" | "decision" | "action" | "wow-mode" | "system";
  event: string;
  detail: string;
  timestamp: number;
  tenantId?: string;
  userId?: string;
  mode?: string;
}
