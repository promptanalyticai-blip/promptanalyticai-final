"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import {
  FileText,
  History,
  Clock,
  ShieldCheck,
  Activity,
  AlertTriangle,
} from "lucide-react";

export default function AuditDashboard() {
  // Eventos simulados (luego conectamos engines reales)
  const events = [
    {
      id: "EVT-001",
      module: "DNIP",
      type: "Análisis completado",
      severity: "info",
      description: "DNIP procesó 3 señales con riesgo moderado.",
      timestamp: "2026-10-20 14:22",
    },
    {
      id: "EVT-002",
      module: "ADIP",
      type: "Acción ejecutada",
      severity: "success",
      description: "ADIP-001 ajustó el umbral financiero.",
      timestamp: "2026-10-20 14:20",
    },
    {
      id: "EVT-003",
      module: "IA",
      type: "Insight generado",
      severity: "info",
      description: "IA detectó patrón financiero relevante.",
      timestamp: "2026-10-20 14:18",
    },
    {
      id: "EVT-004",
      module: "Security",
      type: "Amenaza detectada",
      severity: "warning",
      description: "Variación abrupta en señal DNIP.",
      timestamp: "2026-10-20 14:15",
    },
    {
      id: "EVT-005",
      module: "ADIP",
      type: "Acción fallida",
      severity: "error",
      description: "ADIP-002 no pudo ejecutarse correctamente.",
      timestamp: "2026-10-20 14:10",
    },
  ];

  const totalEvents = events.length;
  const errors = events.filter(e => e.severity === "error").length;
  const warnings = events.filter(e => e.severity === "warning").length;
  const successes = events.filter(e => e.severity === "success").length;

  return (
    <div className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · Audit
        </h1>
        <p className="text-slate-600 mt-1">
          Registro avanzado de eventos — trazabilidad completa del sistema.
        </p>
      </div>

      <Separator />

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <History className="w-5 h-5 text-indigo-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Eventos registrados
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">{totalEvents}</p>
          <p className="text-xs text-slate-500 mt-1">
            Últimas 24 horas.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Advertencias
            </h2>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{warnings}</p>
          <p className="text-xs text-slate-500 mt-1">
            Requieren revisión.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Éxitos
            </h2>
          </div>
          <p className="text-3xl font-bold text-green-600">{successes}</p>
          <p className="text-xs text-slate-500 mt-1">
            Acciones completadas correctamente.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-red-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Errores
            </h2>
          </div>
          <p className="text-3xl font-bold text-red-600">{errors}</p>
          <p className="text-xs text-slate-500 mt-1">
            Requieren intervención manual.
          </p>
        </Card>
      </div>

      {/* Lista de eventos */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Eventos recientes
          </h2>
        </div>

        <div className="space-y-3">
          {events.map(event => {
            const severityColor =
              event.severity === "error"
                ? "bg-red-100 text-red-700"
                : event.severity === "warning"
                ? "bg-yellow-100 text-yellow-700"
                : event.severity === "success"
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-700";

            return (
              <div
                key={event.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-slate-100 rounded-lg p-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {event.type}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {event.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Módulo: {event.module} · {event.timestamp}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className={severityColor}>{event.severity}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Estado del auditor */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Estado del auditor
          </h2>
        </div>

        <p className="text-sm text-slate-700">
          El auditor V6 está funcionando correctamente, registrando eventos de
          DNIP, ADIP, IA y Security en tiempo real.
        </p>

        <p className="text-sm text-slate-700 mt-2">
          No se detectan retrasos ni fallos en la captura de eventos.
        </p>
      </Card>
    </div>
  );
}
