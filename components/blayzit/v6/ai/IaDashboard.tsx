"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { Brain, Lightbulb, AlertTriangle, Sparkles } from "lucide-react";

export default function IaDashboard() {
  // Datos de ejemplo (luego conectamos DNIP + ADIP)
  const signals = [0.2, 0.4, 0.8];

  const avg = signals.reduce((a, b) => a + b, 0) / signals.length;
  const risk = avg;

  // IA: resumen automático
  const summary = `
    El sistema detecta un riesgo moderado basado en señales con variabilidad media.
    La señal más alta (0.8) incrementa el riesgo general y sugiere monitoreo preventivo.
  `;

  // IA: insights automáticos
  const insights = [
    "La señal 0.8 es el principal contribuyente al riesgo.",
    "El patrón financiero detectado por DNIP incrementa la probabilidad de anomalías.",
    "ADIP recomienda acciones preventivas para reducir el riesgo en un 18%.",
  ];

  // IA: recomendaciones automáticas
  const recommendations = [
    "Aplicar acción preventiva ADIP-001 para estabilizar el umbral financiero.",
    "Ejecutar simulación predictiva ADIP-003 para validar escenarios futuros.",
    "Monitorear señales cada 5 minutos durante las próximas 24 horas.",
  ];

  return (
    <div className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · IA
        </h1>
        <p className="text-slate-600 mt-1">
          Motor de inteligencia avanzada — análisis, resumen y recomendaciones automáticas.
        </p>
      </div>

      <Separator />

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Riesgo detectado
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {(risk * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Basado en señales DNIP.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Insights generados
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {insights.length}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            IA V6 detectó patrones relevantes.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Recomendaciones
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {recommendations.length}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Acciones sugeridas por IA V6.
          </p>
        </Card>
      </div>

      {/* Resumen IA */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Resumen automático IA V6
          </h2>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
          {summary}
        </p>
      </Card>

      {/* Insights */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Insights detectados
          </h2>
        </div>

        <ul className="space-y-2">
          {insights.map((i, idx) => (
            <li
              key={idx}
              className="text-sm text-slate-700 border-l-4 border-yellow-400 pl-3"
            >
              {i}
            </li>
          ))}
        </ul>
      </Card>

      {/* Recomendaciones */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Recomendaciones IA V6
          </h2>
        </div>

        <ul className="space-y-2">
          {recommendations.map((r, idx) => (
            <li
              key={idx}
              className="text-sm text-slate-700 border-l-4 border-purple-400 pl-3"
            >
              {r}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
