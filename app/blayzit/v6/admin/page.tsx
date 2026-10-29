"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

// IA Cognitiva
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

import { Shield, Lock, Cpu, Zap, Brain, Activity } from "lucide-react";

// Supabase (CLIENTE GLOBAL)
const supabase = createClient();


export default function AdminPage() {
  const [user, setUser] = useState(null);

  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetry, setTelemetry] = useState([]);
  const [pipelines, setPipelines] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);

    if (!user) return;

    const [r, s, d, p, t, pl] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
      supabase.from("telemetry").select("*").eq("user_id", user.id),
      supabase.from("pipelines").select("*").eq("user_id", user.id),
    ]);

    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
    setTelemetry(t.data || []);
    setPipelines(pl.data || []);
  }

  // 🔐 Protección Super Admin
  if (!user || user.email !== "TU_EMAIL_SUPER_ADMIN") {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
          <Lock className="mx-auto text-rose-600" size={40} />
          <h2 className="text-xl font-semibold text-slate-800 mt-4">
            Acceso denegado
          </h2>
          <p className="text-slate-600 mt-2">
            Este módulo está restringido solo para Super Admin.
          </p>
        </div>
      </div>
    );
  }

  // 🔥 Panel Super Admin
  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Panel Secreto Super Admin V7
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        <Card
          icon={Shield}
          color="rose"
          title="Riesgos"
          value={riesgos.length}
        />

        <Card
          icon={Activity}
          color="amber"
          title="Señales DNIP"
          value={senales.length}
        />

        <Card
          icon={Brain}
          color="indigo"
          title="Predicciones IA"
          value={predicciones.length}
        />

        <Card
          icon={Zap}
          color="emerald"
          title="Decisiones ADIP"
          value={decisiones.length}
        />

        <Card
          icon={Cpu}
          color="purple"
          title="Telemetría"
          value={telemetry.length}
        />

        <Card
          icon={Zap}
          color="blue"
          title="Pipelines"
          value={pipelines.length}
        />

      </div>

      {/* PANEL DE DIAGNÓSTICO PROFUNDO */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Cpu className="text-indigo-600" size={20} />
          Diagnóstico Interno del Sistema
        </h2>

        <p className="text-slate-700">
          Este panel muestra el estado profundo del sistema, incluyendo IA interna, correlaciones ocultas, anomalías globales y estabilidad operativa.
        </p>

        <AIInsight
          title="Explicación IA Interna"
          data={[
            riesgos.length,
            senales.length,
            decisiones.length,
            predicciones.length,
            telemetry.length,
            pipelines.length,
          ]}
          type="overview"
          timeframe="7d"
        />

        <AIScenarios
          title="Escenarios IA Internos"
          data={[
            riesgos.length,
            senales.length,
            decisiones.length,
            predicciones.length,
            telemetry.length,
            pipelines.length,
          ]}
          type="overview"
        />
      </div>

      {/* IA GLOBAL */}
      <AICorrelationEngine
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
      />

      <AIPrioridad
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
      />

      <AIAnomalias
        title="Anomalías Globales Internas (IA)"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
      />

    </div>
  );
}

/* CARD */
function Card({ icon, color, title, value }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-2">
      <PremiumIcon icon={icon} color={color} size={22} />
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
