"use client";

export type AuditEvent = {
  id: string;
  type: string;
  message: string;
  timestamp: string;
};

export class AuditEngine {
  private events: AuditEvent[] = [];

  log(type: string, message: string) {
    const event: AuditEvent = {
      id: crypto.randomUUID(),
      type,
      message,
      timestamp: new Date().toLocaleString(),
    };

    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  clear() {
    this.events = [];
  }
}

export const auditEngine = new AuditEngine();
