"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function DnipSummary({ hybrid }: { hybrid: any }) {
  return (
    <Card>
      <SubTitle>Resumen Ejecutivo DNIP</SubTitle>
      <p className="text-sm text-slate-700">
        Estado: <strong>{hybrid.status}</strong>
      </p>
      <p className="text-xs text-slate-600 mt-2">
        Score combinado: {hybrid.combinedScore.toFixed(2)}
      </p>
    </Card>
  );
}
