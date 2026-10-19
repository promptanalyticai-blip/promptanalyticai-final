"use client";

import AuditPanel from "./AuditPanel";

export default function V5AuditDashboard({ events }) {
  return (
    <div className="space-y-6">
      <AuditPanel events={events} />
    </div>
  );
}
