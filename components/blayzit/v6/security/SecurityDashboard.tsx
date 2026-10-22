"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import {
  Shield,
  ShieldAlert,
  AlertTriangle,
  Bug,
  Lock,
  Activity,
  Flame,
} from "lucide-react";

export default function SecurityDashboard() {
  // Datos simulados (luego conectamos Telemetry + Audit)
  const threats = [
    {
      id: "SEC-001",
      type: "Anomalía de señal",
      severity: "alta",
      description: "Variación abrupta detectada en DNIP.",
      source: "DNIP Engine",
      timestamp: "2026-10-20 14:22",
    },
    {
      id: "SEC-002",
      type: "Patrón sospechoso",
      severity: "media",
      description: "Patrón financiero repetitivo detectado.",
      source: "Pattern Engine",
      timestamp: "2026-10-20 14:18",
    },
    {
      id: "SEC-003",
      type: "Intento de acción fallida",
      severity: "baja",
      description: "ADIP-002 no pudo ejecutarse correctamente.",
      source: "ADIP Engine",
      timestamp: "2026-10-20 14:10",
    },
  ];

  const totalThreats = threats.length;
  const highSeverity = threats.filter(t => t.severity === "alta").length;
  const mediumSeverity = threats.filter(t => t.severity === "media").length;
  const lowSeverity = threats.filter(t => t.severity === "baja").length;

  return (
    <div className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · Security
        </h1>
        <p className="text-slate-600 mt-1">
          Motor de seguridad avanzada — detección de amenazas, anomalías y
          eventos críticos.
        </p>
      </div>

      <Separator />

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-indigo-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Amenazas detectadas
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">{totalThreats}</p>
          <p className="text-xs text-slate-500 mt-1">
            Últimas 24 horas.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-red-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Severidad alta
            </h2>
          </div>
          <p className="text-3xl font-bold text-red-600">{highSeverity}</p>
          <p className="text-xs text-slate-500 mt-1">
            Requiere atención inmediata.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Severidad media
            </h2>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{mediumSeverity}</p>
          <p className="text-xs text-slate-500 mt-1">
            Monitoreo recomendado.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Bug className="w-5 h-5 text-green-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Severidad baja
            </h2>
          </div>
          <p className="text-3xl font-bold text-green-600">{lowSeverity}</p>
          <p className="text-xs text-slate-500 mt-1">
            No requiere acción inmediata.
          </p>
        </Card>
      </div>

      {/* Lista de amenazas */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Amenazas recientes
          </h2>
        </div>

        <div className="space-y-3">
          {threats.map(threat => {
            const severityColor =
              threat.severity === "alta"
                ? "bg-red-100 text-red-700"
                : threat.severity === "media"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700";

            return (
              <div
                key={threat.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-slate-100 rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {threat.type}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {threat.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Fuente: {threat.source} · {threat.timestamp}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className={severityColor}>{threat.severity}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Estado del sistema */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Estado del sistema
          </h2>
        </div>

        <p className="text-sm text-slate-700">
          El sistema BLAYZIT V6 se encuentra en estado **estable**, con
          monitoreo activo de señales DNIP, acciones ADIP y análisis IA.
        </p>

        <p className="text-sm text-slate-700 mt-2">
          No se detectan vulnerabilidades críticas en este momento.
        </p>
      </Card>
    </div>
  );
}
