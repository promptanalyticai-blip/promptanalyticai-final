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
import { Settings, Sliders, Zap, Shield, Brain } from "lucide-react";

// Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SettingsPage() {
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetry, setTelemetry] = useState([]);
  const [pipelines, setPipelines] = useState([]);

  const [recomendaciones, setRecomendaciones] = useState([]);

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

    generarRecomendaciones(r.data, s.data, d.data, p.data, t.data, pl.data);
  }

  function generarRecomendaciones(riesgos, senales, decisiones, predicciones, telemetry, pipelines) {
    const lista = [];

    // Riesgos críticos → ajustar umbrales
    if (riesgos.filter(r => r.nivel === "critico").length > 0) {
      lista.push({
        titulo: "Ajustar umbral de riesgo crítico",
        descripcion: "La IA detecta riesgos críticos frecuentes. Se recomienda bajar el umbral de alerta.",
        icon: Shield,
        color: "rose"
      });
    }

    // Señales DNIP disparadas → ajustar sensibilidad
    if (senales.filter(s => s.criticidad >= 80).length > 5) {
      lista.push({
        titulo: "Aumentar sensibilidad DNIP",
        descripcion: "Las señales DNIP están disparándose con frecuencia. Ajustar sensibilidad puede mejorar estabilidad.",
        icon: Zap,
        color: "amber"
      });
    }

    // Decisiones rechazadas → ajustar criterios ADIP
    if (decisiones.filter(d => d.estado === "rechazada").length > decisiones.filter(d => d.estado === "aprobada").length) {
      lista.push({
        titulo: "Optimizar criterios ADIP",
        descripcion: "Las decisiones rechazadas superan las aprobadas. La IA recomienda ajustar criterios.",
        icon: Brain,
        color: "indigo"
      });
    }

    // Predicciones IA peligrosas → ajustar modelo
    if (predicciones.filter(p => p.probabilidad >= 75).length > 0) {
      lista.push({
        titulo: "Reentrenar modelo IA",
        descripcion: "La IA detecta eventos futuros con alta probabilidad. Reentrenar el modelo puede mejorar precisión.",
        icon: Brain,
        color: "purple"
      });
    }

    // Telemetría crítica → ajustar límites
    if (telemetry.filter(t => t.nivel === "critico").length > 0) {
      lista.push({
        titulo: "Ajustar límites de carga",
        descripcion: "Telemetría detecta carga crítica. Ajustar límites puede evitar saturación.",
        icon: Sliders,
        color: "emerald"
      });
    }

    // Pipelines en error → ajustar automatización
    if (pipelines.filter(p => p.estado === "error").length > 0) {
      lista.push({
        titulo: "Optimizar automatización de pipelines",
        descripcion: "Hay pipelines en error. Ajustar automatización puede mejorar estabilidad.",
        icon: Settings,
        color: "blue"
      });
    }

    setRecomendaciones(lista);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Configuración Inteligente V7
      </h1>

      {/* RECOMENDACIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recomendaciones.map((r, i) => (
          <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
            <PremiumIcon icon={r.icon} color={r.color} size={22} />
            <h3 className="text-lg font-semibold text-slate-800">{r.titulo}</h3>
            <p className="text-slate-700">{r.descripcion}</p>
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-sm">
              Aplicar recomendación
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
