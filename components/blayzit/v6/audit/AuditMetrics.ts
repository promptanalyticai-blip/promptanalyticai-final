"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AuditMetrics({ audit }: { audit: any }) {
  const { critical, notes } = audit.summary;

  return (
    <Card>
      <SubTitle>Métricas del Sistema</SubTitle>
      <p className="text-sm text-slate-700">
        Estado crítico:{" "}
        <strong>{critical ? "Sí — requiere revisión" : "No — estable"}</strong>
      </p>

      <p className="mt-2 text-xs text-slate-600">
        {notes}
      </p>
    </Card>
  );
}
