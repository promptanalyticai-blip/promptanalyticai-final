"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// IA Cognitiva
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { CheckCircle, Zap, Shield, Brain, Activity } from "lucide-react";

// Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ActionsPage() {
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetry, setTelemetry] = useState([]);
  const [pipelines, setPipelines] = useState([]);

  const [acciones, setAcciones] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
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

    generarAcciones(r.data, s.data, d.data, p.data, t.data, pl.data);
  }

  function generarAcciones(riesgos, senales, decisiones, predicciones, telemetry, pipelines) {
    const lista = [];

    // Riesgos críticos
    const criticos = riesgos.filter(r => r.nivel === "critico");
    if (criticos.length > 0) {
      lista.push({
        tipo: "riesgos",
        titulo: "Reducir riesgos críticos",
        descripcion: `Se detectaron ${criticos.length} riesgos críticos. Se recomienda activar acciones preventivas.`,
        accion: "Revisar módulo de riesgos",
        icon: Shield,
        color: "rose"
      });
    }

    // Señales DNIP disparadas
    const disparadas = senales.filter(s => s.criticidad >= 80);
    if (disparadas.length > 0) {
      lista.push({
        tipo: "senales",
        titulo: "Activar pipeline inteligente",
        descripcion: `Hay ${disparadas.length} señales DNIP disparadas.`,
        accion: "Activar pipeline DNIP",
        icon: Zap,
        color: "amber"
      });
    }

    // Decisiones rechazadas
    const rechazadas = decisiones.filter(d => d.estado === "rechazada");
    if (rechazadas.length > decisiones.filter(d => d.estado === "aprobada").length) {
      lista.push({
        tipo: "decisiones",
        titulo: "Revisar criterios ADIP",
        descripcion: "Las decisiones rechazadas superan las aprobadas.",
        accion: "Revisar criterios ADIP",
        icon: Brain,
        color: "indigo"
      });
    }

    // Predicciones IA peligrosas
    const peligrosas = predicciones.filter(p => p.probabilidad >= 75);
    if (peligrosas.length > 0) {
      lista.push({
        tipo: "ia",
        titulo: "Preparar respuesta a evento IA",
        descripcion: `La IA anticipa ${peligrosas.length} eventos con alta probabilidad.`,
        accion: "Preparar acciones ADIP",
        icon: Activity,
        color: "purple"
      });
    }

    // Telemetría crítica
    const teleCritica = telemetry.filter(t => t.nivel === "critico");
    if (teleCritica.length > 0) {
      lista.push({
        tipo: "telemetry",
        titulo: "Reducir carga del sistema",
        descripcion: "Telemetría detecta eventos críticos.",
        accion: "Revisar módulo de telemetría",
        icon: Shield,
        color: "emerald"
      });
    }

    // Pipelines en error
    const errorPipelines = pipelines.filter(p => p.estado === "error");
    if (errorPipelines.length > 0) {
      lista.push({
        tipo: "pipelines",
        titulo: "Reiniciar pipeline en error",
        descripcion: `${errorPipelines.length} pipelines están en estado de error.`,
        accion: "Reiniciar pipeline",
        icon: Zap,
        color: "blue"
      });
    }

    setAcciones(lista);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Acciones Inteligentes V7
      </h1>

      {/* LISTA DE ACCIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {acciones.map((a, i) => (
          <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
            <PremiumIcon icon={a.icon} color={a.color} size={22} />
            <h3 className="text-lg font-semibold text-slate-800">{a.titulo}</h3>
            <p className="text-slate-700">{a.descripcion}</p>
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-sm">
              {a.accion}
            </button>
          </div>
        ))}
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
        title="Anomalías Detectadas (IA)"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
      />

      <AIInsight
        title="Explicación IA"
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
        title="Escenarios IA"
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
  );
}
