"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import {
  Gauge,
  Activity,
  Timer,
  Cpu,
  Zap,
  BarChart3,
  SignalHigh,
} from "lucide-react";

export default function TelemetryDashboard() {
  // Datos simulados (luego conectamos engines reales)
  const latency = {
    dnip: 42,
    adip: 55,
    ia: 38,
    security: 61,
    audit: 29,
    analyzar: 73,
  };

  const stability = {
    uptime: 99.98,
    errors: 2,
    warnings: 5,
  };

  const load = {
    cpu: 37,
    memory: 62,
    enginesActive: 6,
  };

  const deviations = [
    {
      id: "DEV-001",
      module: "DNIP",
      description: "Latencia superior al promedio durante análisis híbrido.",
      impact: "media",
      timestamp: "2026-10-20 14:22",
    },
    {
      id: "DEV-002",
      module: "Security",
      description: "Pico de carga durante detección de amenazas.",
      impact: "alta",
      timestamp: "2026-10-20 14:18",
    },
    {
      id: "DEV-003",
      module: "Analyzar",
      description: "Procesamiento intensivo de correlaciones globales.",
      impact: "baja",
      timestamp: "2026-10-20 14:10",
    },
  ];

  return (
    <div className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · Telemetry
        </h1>
        <p className="text-slate-600 mt-1">
          Motor de telemetría avanzada — latencia, estabilidad y rendimiento del sistema.
        </p>
      </div>

      <Separator />

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Latencia promedio */}
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Timer className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Latencia promedio
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {(
              (latency.dnip +
                latency.adip +
                latency.ia +
                latency.security +
                latency.audit +
                latency.analyzar) /
              6
            ).toFixed(0)}{" "}
            ms
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Promedio de todos los motores V6.
          </p>
        </Card>

        {/* Estabilidad */}
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Gauge className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Estabilidad del sistema
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {stability.uptime}%
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Uptime en las últimas 24 horas.
          </p>
        </Card>

        {/* Carga del sistema */}
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Carga del sistema
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {load.cpu}% CPU
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Memoria: {load.memory}% · Motores activos: {load.enginesActive}
          </p>
        </Card>
      </div>

      {/* Latencia por módulo */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Latencia por módulo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(latency).map(([module, value]) => (
            <Card key={module} className="p-4 shadow-sm bg-white">
              <p className="text-sm font-semibold text-slate-800 capitalize">
                {module}
              </p>
              <p className="text-xl font-bold text-slate-700">{value} ms</p>
            </Card>
          ))}
        </div>
      </Card>

      {/* Desviaciones */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <SignalHigh className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Desviaciones detectadas
          </h2>
        </div>

        <div className="space-y-3">
          {deviations.map(dev => {
            const impactColor =
              dev.impact === "alta"
                ? "bg-red-100 text-red-700"
                : dev.impact === "media"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700";

            return (
              <div
                key={dev.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-slate-100 rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {dev.module}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {dev.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {dev.timestamp}
                  </p>
                </div>

                <Badge className={impactColor}>{dev.impact}</Badge>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
