"use client";

import { X, Sparkles } from "lucide-react";

export default function IASuggestedActionDrawer({ open, onClose, suggestion }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-end z-50">
      <div className="w-[420px] h-full bg-white shadow-xl border-l border-slate-200 p-6 overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-800">Acción sugerida por IA</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-slate-500 hover:text-rose-600 transition" />
          </button>
        </div>

        {/* CONTENIDO */}
        <div className="space-y-6">

          {/* IA SUGERENCIA */}
          <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-indigo-600 mt-1" />
            <p className="text-sm text-indigo-700 leading-relaxed">
              {suggestion || "La IA recomienda revisar los riesgos activos debido a señales elevadas en telemetría."}
            </p>
          </div>

          {/* BOTÓN */}
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            Ejecutar acción
          </button>
        </div>
      </div>
    </div>
  );
}
