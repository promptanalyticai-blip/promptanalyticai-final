"use client";

import { useEffect, useState } from "react";
import { BarChart3, Activity, Cpu, Gauge } from "lucide-react";
import { fetchBlayzitSignals } from "@/components/blayzit/BlayzitIntelligenceBridge";

export default function TelemetryDashboard() {
  const [signals, setSignals] = useState<any | null>(null);

  useEffect(() => {
    const update = () => {
      setSignals(fetchBlayzitSignals());
    };
    update();
    const id = setInterval(update, 5000);
    return () => clearInterval(id);
  }, []);

  if (!signals) return null;

  const { dnip } = signals;

  return (
    <section className="grid grid-cols-4 gap-4 mt-6">
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-slate-900">
            Carga del sistema
          </span>
        </div>
        <p className="text-2xl font-bold text-slate-900">
          {dnip.systemLoad.toFixed(1)}%
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-slate-900">
            Latencia
          </span>
        </div>
        <p className="text-2xl font-bold text-slate-900">
          {dnip.latency.toFixed(0)} ms
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-slate-900">
            Nivel de riesgo
          </span>
        </div>
        <p className="text-2xl font-bold text-slate-900">
          {(dnip.riskLevel * 100).toFixed(0)}%
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-slate-900">
            Eventos críticos
          </span>
        </div>
        <p className="text-2xl font-bold text-slate-900">
          {dnip.criticalEvents ? "Activos" : "Ninguno"}
        </p>
      </div>
    </section>
  );
}
