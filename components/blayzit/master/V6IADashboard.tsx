"use client";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

type Props = {
  analysis: any;
};

export default function V6IADashboard({ analysis }: Props) {
  return (
    <div className="space-y-6 fade-in">
      <Title>BLAYZIT V6 · IA</Title>

      <Card>
        <p className="text-sm text-slate-700 mb-2">Resumen IA:</p>
        <p className="text-sm text-slate-700">{analysis.summary}</p>
      </Card>

      <Card>
        <p className="text-sm text-slate-700 mb-2">Contenido analizado:</p>
        <p className="text-xs text-slate-500">
          {analysis.file?.name || "archivo-desconocido"}
        </p>
      </Card>
    </div>
  );
}
