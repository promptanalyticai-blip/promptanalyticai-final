"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, AlertTriangle, Lock, Radar } from "lucide-react";
import { fetchBlayzitSignals } from "@/components/blayzit/BlayzitIntelligenceBridge";

export default function SecurityRiskPanel({ open, onClose }) {
  const [signals, setSignals] = useState<any | null>(null);

  useEffect(() => {
    const update = () => setSignals(fetchBlayzitSignals());
    update();
    const id = setInterval(update, 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open || !signals) return null;

  const { dnip } = signals;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-18 z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Seguridad & Riesgo
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-slate-900">
                Nivel de riesgo
              </span>
            </div>
            <p className="text-2xl font-bold text-red-700">
              {(dnip.riskLevel * 100).toFixed(0)}%
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-semibold text-slate-900">
                Estado de seguridad
              </span>
            </div>
            <p className="text-sm text-slate-700">
              {dnip.criticalEvents
                ? "Eventos críticos activos — revisar inmediatamente."
                : "Sin eventos críticos activos."}
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <Radar className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-slate-900">
                Observaciones del motor BLAYZIT
              </span>
            </div>
            <p className="text-sm text-slate-700">
              El motor BLAYZIT Intelligence está monitoreando patrones de riesgo
              y latencia en tiempo real. Este panel resume el estado actual de
              seguridad y riesgo del sistema.
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center pt-2">
          BLAYZIT Security & Risk
        </div>
      </div>
    </div>
  );
}
