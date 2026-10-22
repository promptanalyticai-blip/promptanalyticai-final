"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { Zap, Clock, ShieldCheck, Workflow } from "lucide-react";

type AdipAction = {
  id: string;
  name: string;
  type: "preventiva" | "correctiva" | "predictiva";
  status: "pendiente" | "ejecutada" | "fallida";
  riskImpact: number;
  etaMinutes: number;
};

const mockActions: AdipAction[] = [
  {
    id: "ADIP-001",
    name: "Ajuste automático de umbral financiero",
    type: "preventiva",
    status: "ejecutada",
    riskImpact: 0.18,
    etaMinutes: 2,
  },
  {
    id: "ADIP-002",
    name: "Corrección de desvío en patrón DNIP",
    type: "correctiva",
    status: "pendiente",
    riskImpact: 0.25,
    etaMinutes: 5,
  },
  {
    id: "ADIP-003",
    name: "Simulación predictiva de riesgo híbrido",
    type: "predictiva",
    status: "pendiente",
    riskImpact: 0.12,
    etaMinutes: 3,
  },
];

function getTypeLabel(type: AdipAction["type"]) {
  switch (type) {
    case "preventiva":
      return { label: "Preventiva", className: "bg-blue-100 text-blue-700" };
    case "correctiva":
      return { label: "Correctiva", className: "bg-orange-100 text-orange-700" };
    case "predictiva":
      return { label: "Predictiva", className: "bg-purple-100 text-purple-700" };
  }
}

function getStatusLabel(status: AdipAction["status"]) {
  switch (status) {
    case "pendiente":
      return { label: "Pendiente", className: "bg-yellow-100 text-yellow-700" };
    case "ejecutada":
      return { label: "Ejecutada", className: "bg-green-100 text-green-700" };
    case "fallida":
      return { label: "Fallida", className: "bg-red-100 text-red-700" };
  }
}

export default function AdipDashboard() {
  const totalActions = mockActions.length;
  const executed = mockActions.filter(a => a.status === "ejecutada").length;
  const pending = mockActions.filter(a => a.status === "pendiente").length;

  const totalRiskImpact = mockActions.reduce(
    (acc, a) => acc + a.riskImpact,
    0
  );

  const avgEta =
    mockActions.reduce((acc, a) => acc + a.etaMinutes, 0) / mockActions.length;

  return (
    <div className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · ADIP
        </h1>
        <p className="text-slate-600 mt-1">
          Motor de acciones dinámicas — ejecución automática, preventiva y predictiva.
        </p>
      </div>

      <Separator />

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Workflow className="w-5 h-5 text-blue-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Acciones totales
            </h2>
          </div>
          <p className="text-2xl font-bold text-slate-800">{totalActions}</p>
          <p className="text-xs text-slate-500 mt-1">
            Orquestadas por el motor ADIP V6.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-green-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Acciones ejecutadas
            </h2>
          </div>
          <p className="text-2xl font-bold text-slate-800">{executed}</p>
          <p className="text-xs text-slate-500 mt-1">
            Aplicadas automáticamente sin intervención manual.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-yellow-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Acciones pendientes
            </h2>
          </div>
          <p className="text-2xl font-bold text-slate-800">{pending}</p>
          <p className="text-xs text-slate-500 mt-1">
            En cola para ejecución automática.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Impacto total en riesgo
            </h2>
          </div>
          <p className="text-2xl font-bold text-slate-800">
            {(totalRiskImpact * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Reducción agregada estimada sobre DNIP.
          </p>
        </Card>
      </div>

      {/* Lista de acciones */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Acciones ADIP V6
          </h2>
          <p className="text-xs text-slate-500">
            ETA promedio: {avgEta.toFixed(1)} min.
          </p>
        </div>

        <div className="space-y-3">
          {mockActions.map(action => {
            const type = getTypeLabel(action.type);
            const status = getStatusLabel(action.status);

            return (
              <div
                key={action.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-slate-100 rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {action.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    ID: {action.id} · ETA: {action.etaMinutes} min · Impacto:
                    {" "}
                    {(action.riskImpact * 100).toFixed(1)}%
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className={type.className}>{type.label}</Badge>
                  <Badge className={status.className}>{status.label}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
