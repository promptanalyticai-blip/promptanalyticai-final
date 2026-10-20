"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AuditSummary({ audit }: { audit: any }) {
  return (
    <Card>
      <SubTitle>Resumen Ejecutivo</SubTitle>
      <pre className="text-xs">{JSON.stringify(audit.summary, null, 2)}</pre>
    </Card>
  );
}
