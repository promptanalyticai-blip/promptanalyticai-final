"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function DnipMetrics({
  pattern,
  hybrid,
  risk,
  signal,
}: {
  pattern: any;
  hybrid: any;
  risk: any;
  signal: any;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Patrones Detectados</SubTitle>
        <p className="text-sm text-slate-700">
          Total: <strong>{pattern.patterns.length}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Score Híbrido</SubTitle>
        <p className="text-sm text-slate-700">
          <strong>{hybrid.combinedScore.toFixed(2)}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Riesgo</SubTitle>
        <p className="text-sm text-slate-700">
          Categoría: <strong>{risk.category}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Señal Promedio</SubTitle>
        <p className="text-sm text-slate-700">
          <strong>{signal.average.toFixed(2)}</strong>
        </p>
      </Card>
    </div>
  );
}
