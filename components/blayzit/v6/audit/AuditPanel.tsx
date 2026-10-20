"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AuditPanel({ audit }: { audit: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <SubTitle>Ingest Audit</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(audit.audits.ingest, null, 2)}
        </pre>
      </Card>

      <Card>
        <SubTitle>Security Audit</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(audit.audits.security, null, 2)}
        </pre>
      </Card>

      <Card>
        <SubTitle>Anomaly Audit</SubTitle>
        <pre className="text-xs">
          {JSON.stringify(audit.audits.anomaly, null, 2)}
        </pre>
      </Card>
    </div>
  );
}
