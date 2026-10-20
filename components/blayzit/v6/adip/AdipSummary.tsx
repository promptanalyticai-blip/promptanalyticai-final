"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AdipSummary({ automation }: { automation: any }) {
  return (
    <Card>
      <SubTitle>Resumen Ejecutivo ADIP</SubTitle>
      <p className="text-sm text-slate-700">
        Estado: <strong>{automation.status ?? "unknown"}</strong>
      </p>
      <p className="mt-2 text-xs text-slate-600">
        Runs totales: {automation.totalRuns ?? 0}
      </p>
    </Card>
  );
}
