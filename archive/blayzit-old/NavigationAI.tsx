"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Sparkles,
  LayoutDashboard,
  Activity,
  Brain,
  BarChart3,
  Shield,
  Cpu,
  Zap,
  LineChart,
  Settings,
} from "lucide-react";

export default function NavigationAI({ open, onClose }) {
  const [query, setQuery] = useState("");

  // Cerrar con ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const suggestions = [
    { icon: LayoutDashboard, label: "Ir al Dashboard", match: "dashboard" },
    { icon: Activity, label: "Ver Tendencias del Sistema", match: "tendencias" },
    { icon: Brain, label: "Abrir Inteligencia BLAYZIT", match: "inteligencia" },
    { icon: BarChart3, label: "Métricas Operativas", match: "métricas" },
    { icon: Shield, label: "Riesgo & Seguridad", match: "riesgo" },
    { icon: Cpu, label: "Carga del Sistema", match: "carga" },
    { icon: Zap, label: "Eventos Críticos", match: "eventos" },
    { icon: LineChart, label: "Latencia & Telemetría", match: "latencia" },
    { icon: Settings, label: "Configuración", match: "configuración" },
  ];

  const filtered =
    query.length === 0
      ? suggestions
      : suggestions.filter((s) =>
          s.label.toLowerCase().includes(query.toLowerCase())
        );

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/40 
        backdrop-blur-sm 
        flex items-start justify-center 
        pt-24 
        z-[9999]
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white 
          w-full max-w-xl 
          rounded-2xl 
          shadow-2xl 
          border border-slate-200 
          p-6 
          space-y-5
          animate-[fadeIn_0.2s_ease-out]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-slate-900">
            Navegación Inteligente BLAYZIT
          </h2>
        </div>

        {/* Input */}
        <div
          className="
            flex items-center gap-3 
            bg-slate-50 
            border border-slate-200 
            px-3 py-2 
            rounded-lg
          "
        >
          <Search className="w-4 h-4 text-slate-500" />
          <input
            autoFocus
            type="text"
            placeholder="Escribe para navegar…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm text-slate-700 w-full"
          />
        </div>

        {/* Sugerencias */}
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
          {filtered.map((item) => (
            <div
              key={item.label}
              className="
                flex items-center gap-3 
                px-3 py-2 
                rounded-lg 
                cursor-pointer 
                hover:bg-slate-50 
                transition
              "
            >
              <item.icon className="w-5 h-5 text-slate-700" />
              <span className="text-sm text-slate-800">{item.label}</span>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-4">
              No se encontraron resultados.
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
          <span>Presiona ESC para cerrar</span>
          <span>Motor IA BLAYZIT</span>
        </div>
      </div>
    </div>
  );
}
