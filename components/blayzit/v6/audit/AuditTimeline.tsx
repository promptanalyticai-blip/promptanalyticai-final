"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AuditTimeline({ audit }: { audit: any }) {
  const items = [
    { label: "Ingest Audit", ts: audit.audits.ingest.auditTimestamp },
    { label: "Security Audit", ts: audit.audits.security.auditTimestamp },
    { label: "Anomaly Audit", ts: audit.audits.anomaly.auditTimestamp },
  ];

  return (
    <Card>
      <SubTitle>Línea de Tiempo</SubTitle>
      <ul className="space-y-2 text-xs text-slate-700">
        {items.map((i, idx) => (
          <li key={idx} className="border rounded-md p-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{i.label}</span>
              <span className="text-slate-500">{i.ts}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
