"use client";

import Card from "@ui/Card";
import SubTitle from "@ui/SubTitle";

export default function AnalyzeMetrics({ data }: { data: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SubTitle>Eventos</SubTitle>
        <p className="text-sm text-slate-700">
          Total de eventos: <strong>{data.events}</strong>
        </p>
      </Card>

      <Card>
        <SubTitle>Desviación de Señal</SubTitle>
        <p className="text-sm text-slate-700">
          Desviación: <strong>{data.signalDeviation}</strong>
        </p>
      </Card>
    </div>
  );
}
