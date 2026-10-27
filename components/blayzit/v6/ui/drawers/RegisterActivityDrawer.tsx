"use client";

import { X, Activity } from "lucide-react";
import { useState } from "react";

export default function RegisterActivityDrawer({ open, onClose }) {
  if (!open) return null;

  const [text, setText] = useState("");

  // IA: clasificación automática
  const aiCategory = (() => {
    if (text.toLowerCase().includes("error")) return "Error detectado";
    if (text.toLowerCase().includes("actualización")) return "Actualización del sistema";
    if (text.toLowerCase().includes("riesgo")) return "Posible riesgo";
    return "Actividad general";
  })();

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-end z-50">
      <div className="w-[420px] h-full bg-white shadow-xl border-l border-slate-200 p-6 overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-800">Registrar actividad</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-slate-500 hover:text-rose-600 transition" />
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-6">

          {/* Texto */}
          <div>
            <label className="text-sm text-slate-600">Descripción</label>
            <textarea
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
              rows={5}
              placeholder="Describe la actividad realizada…"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* IA */}
          <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg flex items-start gap-2">
            <Activity className="h-4 w-4 text-cyan-600 mt-1" />
            <p className="text-sm text-cyan-700">
              IA: Clasificación automática — <strong>{aiCategory}</strong>
            </p>
          </div>

          {/* BOTÓN */}
          <button className="w-full py-3 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700 transition">
            Registrar actividad
          </button>
        </div>
      </div>
    </div>
  );
}
