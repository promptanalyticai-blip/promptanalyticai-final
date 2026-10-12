///core/audit/index.ts
let auditEvents: any[] = [];

export function addAuditEvent(event: any) {
  auditEvents.push({
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    ...event
  });
}

export function getAuditEvents() {
  return auditEvents;
}
