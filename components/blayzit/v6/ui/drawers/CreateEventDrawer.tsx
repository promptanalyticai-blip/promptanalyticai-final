"use client";

import { X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function CreateEventDrawer({ open, onClose }) {
  if (!open) return null;

  const [title, setTitle] = useState("");
  const [module, setModule] = useState("");
  const [priority, setPriority] = useState("media");
  const [description, setDescription] = useState("");

  // IA: sugerencia automática
  const aiSuggestion =
    title.length > 5
      ? "La IA sugiere marcar este evento como de prioridad alta."
      : "La IA está analizando la información…";

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-end z-50">
      <div className="w-[420px] h-full bg-white shadow-xl border-l border-slate-200 p-6 overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-slate-800">Crear evento</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-slate-500 hover:text-rose-600 transition" />
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-6">

          {/* Título */}
          <div>
            <label className="text-sm text-slate-600">Título</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
              placeholder="Ej: Evento de telemetría"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Módulo */}
          <div>
            <label className="text-sm text-slate-600">Módulo</label>
            <select
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
              value={module}
              onChange={(e) => setModule(e.target.value)}
            >
              <option value="">Seleccionar módulo</option>
              <option value="telemetria">Telemetría</option>
              <option value="auditoria">Auditoría</option>
              <option value="operaciones">Operaciones</option>
            </select>
          </div>

          {/* Prioridad */}
          <div>
            <label className="text-sm text-slate-600">Prioridad</label>
            <select
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>

          {/* Descripción */}
          <div>
            <label className="text-sm text-slate-600">Descripción</label>
            <textarea
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg text-sm"
              rows={4}
              placeholder="Describe el evento…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* IA SUGERENCIA */}
          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-indigo-600 mt-1" />
            <p className="text-sm text-indigo-700">{aiSuggestion}</p>
          </div>

          {/* BOTÓN */}
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            Crear evento
          </button>
        </div>
      </div>
    </div>
  );
}
