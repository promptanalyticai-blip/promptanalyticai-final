"use client";

import { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { createClient } from "@/lib/supabase/Client";

const supabase = createClient();

export default function NotificacionesV6() {
  const [openCompact, setOpenCompact] = useState(false);
  const [openFull, setOpenFull] = useState(false);
  const [filter, setFilter] = useState("todos");

  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [r, s, d, p] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
  }

  const grouped = [
    ...riesgos.map(r => ({ type: "riesgos", text: r.descripcion || "Riesgo detectado" })),
    ...senales.map(s => ({ type: "seaales", text: s.descripcion || "Señal detectada" })),
    ...decisiones.map(d => ({ type: "decisiones", text: d.descripcion || "Decisión pendiente" })),
    ...predicciones.map(p => ({ type: "predicciones", text: p.descripcion || "Predicción IA" })),
  ];

  const priority = ["riesgos", "senales", "decisiones", "predicciones"];
  const sorted = grouped.sort((a, b) => priority.indexOf(a.type) - priority.indexOf(b.type));

  const filtered = filter === "todos" ? sorted : sorted.filter(n => n.type === filter);

  const typeStyles = {
    riesgos: "bg-rose-50 border-rose-200",
    senales: "bg-amber-50 border-amber-200",
    decisiones: "bg-indigo-50 border-indigo-200",
    predicciones: "bg-cyan-50 border-cyan-200",
    otros: "bg-slate-50 border-slate-200",
  };

  return (
    <div className="relative">

      {/* BOTÓN */}
      <button
        className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition"
        onClick={() => {
          setOpenCompact(!openCompact);
          setOpenFull(false);
        }}
      >
        <Bell className="h-6 w-6 text-slate-600 hover:text-indigo-600 transition" />

        <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full px-1">
          {sorted.length}
        </span>
      </button>

      {/* PANEL COMPACTO */}
      {openCompact && (
        <div className="absolute right-0 top-12 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 space-y-3">
          <div className="text-sm font-semibold text-slate-700">Notificaciones</div>

          <div className="space-y-2">
            {sorted.slice(0, 3).map((n, i) => (
              <div key={i} className={`p-3 rounded-lg border ${typeStyles[n.type]}`}>
                <p className="text-sm text-slate-700 capitalize">{n.type}: {n.text}</p>
                <p className="text-xs text-slate-500">Hace unos minutos</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setOpenFull(true);
              setOpenCompact(false);
            }}
            className="w-full text-center text-indigo-600 text-sm font-medium hover:text-indigo-800 transition"
          >
            Ver más →
          </button>
        </div>
      )}

      {/* PANEL COMPLETO */}
      {openFull && (
        <div className="absolute right-0 top-12 w-[420px] bg-white border border-slate-200 rounded-xl shadow-xl p-6 z-50 space-y-6">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">Centro de Notificaciones</h2>
            <button
              onClick={() => setOpenFull(false)}
              className="text-slate-500 hover:text-rose-600 transition"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Filtros */}
          <div className="flex gap-3">
            {["Todos", "Riesgos", "senales", "decisiones", "predicciones"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg border text-sm transition ${
                  filter === f
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Contenido */}
          <div className="grid grid-cols-1 gap-4">
            {filtered.map((n, i) => (
              <div key={i} className={`p-4 rounded-xl border shadow-sm ${typeStyles[n.type]}`}>
                <p className="text-sm font-semibold text-slate-700 capitalize">{n.type}</p>
                <p className="text-sm text-slate-600 mt-1">• {n.text}</p>
                <p className="text-xs text-slate-500 mt-2">Hace unos minutos</p>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
