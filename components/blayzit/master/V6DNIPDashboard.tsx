"use client";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import Badge from "@/components/ui/Badge";

type Props = {
  analysis: any;
};

export default function V6DNIPDashboard({ analysis }: Props) {
  return (
    <div className="space-y-6 fade-in">
      <Title>BLAYZIT V6 · DNIP</Title>

      <Card>
        <p className="text-sm text-slate-700">
          Riesgo DNIP: <strong>{(analysis.risk * 100).toFixed(0)}%</strong>
        </p>
      </Card>

      <Card>
        <p className="text-sm text-slate-700 mb-2">Patrones detectados:</p>
        {analysis.patterns?.length ? (
          <div className="flex flex-wrap gap-2">
            {analysis.patterns.map((p: string, i: number) => (
              <Badge key={i}>{p}</Badge>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500">Sin patrones detectados.</p>
        )}
      </Card>

      <Card>
        <p className="text-sm text-slate-700 mb-2">Anomalías / amenazas:</p>
        {analysis.anomalies?.length || analysis.threats?.length ? (
          <ul className="space-y-2 text-sm text-slate-700">
            {analysis.anomalies?.map((a: string, i: number) => (
              <li key={`a-${i}`}>• {a}</li>
            ))}
            {analysis.threats?.map((t: string, i: number) => (
              <li key={`t-${i}`}>• {t}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-500">Sin anomalías ni amenazas.</p>
        )}
      </Card>
    </div>
  );
}
