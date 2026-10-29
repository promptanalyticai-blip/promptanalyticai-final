"use client";

import { useEffect, useState } from "react";

// Supabase (CORRECTO)
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// Icons
import { Bot, Brain, Radar, Shield, Activity } from "lucide-react";

export default function IAOperacionesPage() {
  const [estado, setEstado] = useState("");
  const [recomendacion, setRecomendacion] = useState<string | null>(null);

  useEffect(() => {
    calcularRecomendacion();
  }, []);

  /* ========================= RECOMENDACIÓN IA ========================= */
  async function calcularRecomendacion() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: riesgos } = await supabase
      .from("adip_riesgos")
      .select("*")
      .eq("user_id", user.id)
      .eq("estado", "activo");

    const { data: senales } = await supabase
      .from("dnip_senales")
      .select("*")
      .eq("user_id", user.id)
      .eq("estado", "activa");

    if (riesgos && riesgos.length > 5) {
      setRecomendacion("IA recomienda ejecutar ADIP y IA Predictiva.");
    } else if (senales && senales.length > 5) {
      setRecomendacion("IA recomienda ejecutar ADIP.");
    } else {
      setRecomendacion("IA recomienda registrar Telemetría y ejecutar DNIP.");
    }
  }

  /* ========================= EJECUTAR SEGÚN IA ========================= */
  async function ejecutarSegunIA() {
    if (!recomendacion) return;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    setEstado("Ejecutando operaciones según recomendación IA...");

    /* ADIP + IA Predictiva */
    if (recomendacion.includes("ADIP") && recomendacion.includes("IA Predictiva")) {
      await supabase.from("adip_riesgos").insert({
        user_id: user.id,
        nivel: 4,
        descripcion: "Riesgo generado por recomendación IA",
        categoria: "operativo",
        estado: "activo",
      });

      await supabase.from("ia_predicciones").insert({
        user_id: user.id,
        tipo: "riesgo_alto",
        probabilidad: 88,
        descripcion: "Predicción generada por recomendación IA",
        origen: "IA",
        criticidad: 5,
        estado: "activa",
      });
    }

    /* Solo ADIP */
    else if (recomendacion.includes("ADIP")) {
      await supabase.from("adip_riesgos").insert({
        user_id: user.id,
        nivel: 3,
        descripcion: "Riesgo generado por recomendación IA",
        categoria: "operativo",
        estado: "activo",
      });
    }

    /* DNIP + Telemetría */
    else {
      await supabase.from("dnip_senales").insert({
        user_id: user.id,
        tipo: "operativa",
        criticidad: 2,
        descripcion: "Señal generada por recomendación IA",
        origen: "DNIP",
        estado: "activa",
      });

      await supabase.from("telemetry").insert({
        user_id: user.id,
        actividad: Math.floor(Math.random() * 100),
        latencia: Math.floor(Math.random() * 120),
        estabilidad: Math.floor(Math.random() * 100),
        descripcion: "Registro generado por recomendación IA",
        nivel: "normal",
      });
    }

    setEstado("✔ Operaciones ejecutadas según recomendación IA");
    setTimeout(() => setEstado(""), 3000);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Operaciones con IA
      </h1>

      {estado && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-700 text-sm">
          {estado}
        </div>
      )}

      {/* CARD PRINCIPAL */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-800">
            Recomendación IA
          </p>
        </div>

        <p className="text-sm text-slate-600">
          {recomendacion || "Calculando recomendación..."}
        </p>

        <button
          onClick={ejecutarSegunIA}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
        >
          Ejecutar según IA
        </button>
      </div>

      {/* MINI ICONS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MiniIcon label="DNIP" icon={<Radar className="h-5 w-5 text-cyan-600" />} />
        <MiniIcon label="ADIP" icon={<Shield className="h-5 w-5 text-rose-600" />} />
        <MiniIcon label="IA" icon={<Brain className="h-5 w-5 text-purple-600" />} />
        <MiniIcon label="Telemetría" icon={<Activity className="h-5 w-5 text-emerald-600" />} />
      </div>

    </div>
  );
}

function MiniIcon({ label, icon }) {
  return (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2">
      {icon}
      <span className="text-xs font-medium text-slate-700">{label}</span>
    </div>
  );
}
