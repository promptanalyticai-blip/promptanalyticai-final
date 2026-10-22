"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import {
  Sigma,
  Brain,
  Zap,
  Shield,
  Activity,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function AnalyzeDashboard() {
  // Datos simulados (luego conectamos DNIP + ADIP + IA + Security + Audit)
  const dnipRisk = 0.46;
  const patternRisk = 0.15;
  const hybridRisk = 0.14;

  const adipImpact = 0.18;
  const iaInsights = 3;
  const securityThreats = 3;
  const auditEvents = 5;

  // Riesgo maestro (fusión DNIP + ADIP + IA + Security)
  const masterRisk = Math.min(
    1,
    dnipRisk + patternRisk + hybridRisk - adipImpact + securityThreats * 0.05
  );

  // Insights globales
  const globalInsights = [
    "El riesgo maestro está influenciado principalmente por la señal 0.8.",
    "ADIP redujo el riesgo total en un 18%.",
    "IA detectó correlación entre patrones financieros y anomalías DNIP.",
    "Security reportó 3 amenazas relevantes en las últimas 24 horas.",
  ];

  // Recomendaciones maestras
  const masterRecommendations = [
    "Ejecutar ADIP-003 para estabilizar el riesgo híbrido.",
    "Incrementar la frecuencia de monitoreo DNIP a cada 3 minutos.",
    "Activar modo de seguridad reforzada durante las próximas 12 horas.",
    "Revisar eventos AUDIT relacionados con ADIP-002.",
  ];

  return (
    <div className="space-y-8 p-6 bg-[#F7FAFC] min-h-screen fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · ANALIZAR
        </h1>
        <p className="text-slate-600 mt-1">
          Motor maestro de inteligencia operativa — fusión DNIP + ADIP + IA +
          Security + Audit.
        </p>
      </div>

      <Separator />

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Riesgo maestro
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">
            {(masterRisk * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Fusión de todos los motores V6.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-purple-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Insights IA
            </h2>
          </div>
          <p className="text-3xl font-bold text-slate-800">{iaInsights}</p>
          <p className="text-xs text-slate-500 mt-1">
            Detectados por IA V6.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-green-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Impacto ADIP
            </h2>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {(adipImpact * 100).toFixed(1)}%
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Reducción total del riesgo.
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-red-600" />
            <h2 className="text-sm font-semibold text-slate-800">
              Amenazas Security
            </h2>
          </div>
          <p className="text-3xl font-bold text-red-600">{securityThreats}</p>
          <p className="text-xs text-slate-500 mt-1">
            Últimas 24 horas.
          </p>
        </Card>
      </div>

      {/* Resumen maestro */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Sigma className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Resumen maestro
          </h2>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          El motor ANALIZAR V6 fusiona los resultados de DNIP, ADIP, IA,
          Security y Audit para producir una visión completa del estado del
          sistema. El riesgo maestro refleja la interacción entre señales,
          patrones, acciones automáticas, amenazas y eventos registrados.
        </p>
      </Card>

      {/* Insights globales */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Insights globales
          </h2>
        </div>

        <ul className="space-y-2">
          {globalInsights.map((i, idx) => (
            <li
              key={idx}
              className="text-sm text-slate-700 border-l-4 border-yellow-400 pl-3"
            >
              {i}
            </li>
          ))}
        </ul>
      </Card>

      {/* Recomendaciones maestras */}
      <Card className="p-6 shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Recomendaciones maestras
          </h2>
        </div>

        <ul className="space-y-2">
          {masterRecommendations.map((r, idx) => (
            <li
              key={idx}
              className="text-sm text-slate-700 border-l-4 border-blue-400 pl-3"
            >
              {r}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
