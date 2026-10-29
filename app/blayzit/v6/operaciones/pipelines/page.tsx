"use client";

import { useState } from "react";

// Supabase (CORRECTO)
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// Icons
import { Workflow, Radar, Shield, Brain, Activity } from "lucide-react";

export default function PipelinesPage() {
  const [estado, setEstado] = useState("");

  async function pipelineInteligente() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    setEstado("Ejecutando pipeline inteligente...");

    /* ========================= 1. DNIP ========================= */
    const { data: senales } = await supabase
      .from("dnip_senales")
      .select("*")
      .eq("user_id", user.id)
      .eq("estado", "activa");

    if (senales && senales.length > 0) {
      await supabase.from("adip_riesgos").insert({
        user_id: user.id,
        nivel: 4,
        descripcion: "Riesgo generado por señales críticas DNIP",
        categoria: "operativo",
        estado: "activo",
      });
    }

    /* ========================= 2. ADIP ========================= */
    const { data: riesgos } = await supabase
      .from("adip_riesgos")
      .select("*")
      .eq("user_id", user.id)
      .eq("estado", "activo");

    if (riesgos && riesgos.length > 0) {
      await supabase.from("ia_predicciones").insert({
        user_id: user.id,
        tipo: "riesgo_alto",
        probabilidad: 85,
        descripcion: "Predicción generada por riesgo alto ADIP",
        origen: "IA",
        criticidad: 5,
        estado: "activa",
      });
    }

    /* ========================= 3. TELEMETRÍA ========================= */
    await supabase.from("telemetry").insert({
      user_id: user.id,
      actividad: Math.floor(Math.random() * 100),
      latencia: Math.floor(Math.random() * 120),
      estabilidad: Math.floor(Math.random() * 100),
      descripcion: "Registro generado por pipeline inteligente",
      nivel: "normal",
    });

    setEstado("✔ Pipeline inteligente ejecutado");
    setTimeout(() => setEstado(""), 3000);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Pipelines inteligentes
      </h1>

      {estado && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-700 text-sm">
          {estado}
        </div>
      )}

      {/* CARD PRINCIPAL */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Workflow className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-800">
            DNIP → ADIP → IA → Telemetría
          </p>
        </div>

        <p className="text-xs text-slate-600">
          Pipeline condicional: señales → riesgos → predicciones → telemetría.
        </p>

        <button
          onClick={pipelineInteligente}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
        >
          Ejecutar pipeline inteligente
        </button>
      </div>

      {/* MINI STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MiniStep
          icon={<Radar className="h-5 w-5 text-cyan-600" />}
          label="DNIP"
        />
        <MiniStep
          icon={<Shield className="h-5 w-5 text-rose-600" />}
          label="ADIP"
        />
        <MiniStep
          icon={<Brain className="h-5 w-5 text-purple-600" />}
          label="IA"
        />
        <MiniStep
          icon={<Activity className="h-5 w-5 text-emerald-600" />}
          label="Telemetría"
        />
      </div>

    </div>
  );
}

function MiniStep({ icon, label }) {
  return (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2">
      {icon}
      <span className="text-xs font-medium text-slate-700">{label}</span>
    </div>
  );
}
