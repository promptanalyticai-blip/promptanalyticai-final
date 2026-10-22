"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { TrendingUp, AlertTriangle, Activity } from "lucide-react";

import PatternEngineV6 from "./patternEngine";
import HybridEngineV6 from "./hybridEngine";
import SignalEngineV6 from "./signalEngine";

export default function DnipDashboard() {
  const signals = [0.2, 0.4, 0.8];
  const patterns = ["Patrón financiero"];

  const signalResult = SignalEngineV6({ signals });
  const patternResult = PatternEngineV6({ signals, patterns });
  const hybridResult = HybridEngineV6({ signals, hybridFactor: 0.3 });

  return (
    <div className="space-y-8 p-6 min-h-screen fade-in bg-gradient-to-b from-[#F7FAFC] to-white">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          BLAYZIT V6 · DNIP
        </h1>
        <p className="text-slate-600 mt-1">
          Motor de análisis inteligente — arquitectura WOW ULTRA PRIME.
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Señales procesadas
            </h2>
          </div>

          <p className="text-sm text-slate-600 mb-2">
            Promedio:{" "}
            <strong className="text-slate-800">
              {signalResult.avg.toFixed(3)}
            </strong>
          </p>

          <div className="flex flex-wrap gap-2">
            {signalResult.signals.map((s, i) => (
              <Badge key={i} className="bg-blue-100 text-blue-700">
                {s}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Riesgo Base DNIP
            </h2>
          </div>

          <p className="text-sm text-slate-600">
            Nivel de riesgo:
            <strong className="text-slate-800 ml-1">
              {(signalResult.riskLevel * 100).toFixed(1)}%
            </strong>
          </p>
        </Card>

        <Card className="p-5 shadow-sm bg-white">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Patrones detectados
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {patterns.map((p, i) => (
              <Badge key={i} className="bg-yellow-100 text-yellow-700">
                {p}
              </Badge>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Boost por patrones:
            <strong className="text-slate-800 ml-1">
              {(patternResult.patternRiskBoost * 100).toFixed(1)}%
            </strong>
          </p>

          <p className="text-sm text-slate-600 mt-1">
            Riesgo final:
            <strong className="text-slate-800 ml-1">
              {(patternResult.finalRisk * 100).toFixed(1)}%
            </strong>
          </p>
        </Card>
      </div>

      <Card className="p-6 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Motor Híbrido DNIP V6
        </h2>

        <p className="text-sm text-slate-600">
          Boost híbrido:
          <strong className="text-slate-800 ml-1">
            {(hybridResult.hybridBoost * 100).toFixed(1)}%
          </strong>
        </p>

        <p className="text-sm text-slate-600 mt-1">
          Riesgo final híbrido:
          <strong className="text-slate-800 ml-1">
            {(hybridResult.finalRisk * 100).toFixed(1)}%
          </strong>
        </p>
      </Card>
    </div>
  );
}
