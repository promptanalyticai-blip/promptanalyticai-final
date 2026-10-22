type AuditEvent = {
  id: string;
  type: string;
  message: string;
  timestamp: string;
};

class AuditEngineClass {
  private events: AuditEvent[] = [];

  log(type: string, message: string) {
    this.events.push({
      id: crypto.randomUUID(),
      type,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  getEvents() {
    return this.events;
  }

  getAuditSummary() {
    return {
      summary: {
        version: "V6",
        lastAudit: new Date().toISOString(),
        totalEvents: this.events.length,
      },
      alerts: this.events.filter((e) => e.type === "security"),
    };
  }
}

export const auditEngine = new AuditEngineClass();
export { AuditEngineClass as AuditEngine };
