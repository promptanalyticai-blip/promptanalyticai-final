"use client";

import { useEffect, useState } from "react";
import {
  History,
  AlertTriangle,
  Zap,
  Cpu,
  Activity,
  Brain,
  CheckCircle,
} from "lucide-react";

// Estructura del historial (mock persistente)
const LOCAL_KEY = "blayzit_notifications_history";

export default function NotificationsHistory({ open, onClose }) {
  const [history, setHistory] = useState([]);

  // Cargar historial desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/40 
        backdrop-blur-sm 
        flex items-start justify-end 
        pt-20 pr-10
        z-[9999]
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white 
          w-full max-w-sm 
          rounded-2xl 
          shadow-2xl 
          border border-slate-200 
          p-6 
          space-y-6
          animate-[fadeIn_0.2s_ease-out]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <History className="w-6 h-6 text-slate-700" />
          <h2 className="text-xl font-semibold text-slate-900">
            Historial de Notificaciones
          </h2>
        </div>

        {/* Lista */}
        <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2">
          {history.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-4">
              No hay notificaciones registradas.
            </p>
          )}

          {history.map((n, i) => (
            <div
              key={i}
              className="
                flex items-start gap-3 
                bg-slate-50 
                border border-slate-200 
                rounded-xl 
                p-4
                hover:bg-slate-100
                transition
              "
            >
              <n.icon className={`w-6 h-6 ${n.tone}`} />

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900">
                  {n.title}
                </span>
                <span className="text-sm text-slate-600">{n.desc}</span>
                <span className="text-xs text-slate-500 mt-1">{n.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-500 text-center pt-2">
          Historial BLAYZIT Intelligence
        </div>
      </div>
    </div>
  );
}
