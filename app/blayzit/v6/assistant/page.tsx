"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// IA Cognitiva
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { Send, Brain, MessageSquare } from "lucide-react";

// Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AssistantPage() {
  const [input, setInput] = useState("");
  const [respuesta, setRespuesta] = useState(null);

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

  function procesarPregunta() {
    if (!input.trim()) return;

    const pregunta = input.toLowerCase();
    let respuestaIA = "";

    // --- PREGUNTAS SOBRE PRIORIDAD ---
    if (pregunta.includes("prioridad") || pregunta.includes("importante")) {
      respuestaIA = "La prioridad del día se calcula analizando riesgos, señales DNIP, decisiones ADIP y predicciones IA. Aquí tienes la prioridad actual:";
    }

    // --- PREGUNTAS SOBRE RIESGOS ---
    else if (pregunta.includes("riesgo") || pregunta.includes("riesgos")) {
      respuestaIA = "Aquí tienes el análisis cognitivo de los riesgos actuales, incluyendo tendencias, escenarios y anomalías.";
    }

    // --- PREGUNTAS SOBRE SEÑALES DNIP ---
    else if (pregunta.includes("señal") || pregunta.includes("dnip")) {
      respuestaIA = "Las señales DNIP muestran patrones operativos importantes. Aquí tienes el análisis completo.";
    }

    // --- PREGUNTAS SOBRE DECISIONES ADIP ---
    else if (pregunta.includes("decisiones") || pregunta.includes("adip")) {
      respuestaIA = "Las decisiones ADIP afectan directamente la estabilidad del sistema. Aquí tienes el análisis cognitivo.";
    }

    // --- PREGUNTAS SOBRE IA ---
    else if (pregunta.includes("prediccion") || pregunta.includes("ia") || pregunta.includes("evento")) {
      respuestaIA = "Las predicciones IA anticipan eventos futuros. Aquí tienes el análisis completo.";
    }

    // --- PREGUNTAS SOBRE PIPELINES ---
    else if (pregunta.includes("pipeline")) {
      respuestaIA = "Los pipelines automáticos y manuales afectan DNIP y ADIP. Aquí tienes el análisis cognitivo.";
    }

    // --- PREGUNTAS SOBRE TELEMETRÍA ---
    else if (pregunta.includes("telemetria") || pregunta.includes("carga")) {
      respuestaIA = "La telemetría detecta carga, eventos críticos y anomalías. Aquí tienes el análisis completo.";
    }

    // --- PREGUNTAS GENERALES ---
    else {
      respuestaIA = "Aquí tienes un análisis cognitivo general del sistema basado en tu pregunta.";
    }

    setRespuesta(respuestaIA);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Asistente Cognitivo V7
      </h1>

      {/* INPUT */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-slate-300"
          placeholder="Haz una pregunta sobre tu sistema..."
        />
        <button
          onClick={procesarPregunta}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl flex items-center gap-2"
        >
          <Send size={18} />
          Preguntar
        </button>
      </div>

      {/* RESPUESTA */}
      {respuesta && (
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">

          <div className="flex items-center gap-3">
            <Brain className="text-indigo-600" size={22} />
            <h2 className="text-lg font-semibold text-slate-800">
              Respuesta IA
            </h2>
          </div>

          <p className="text-slate-700">{respuesta}</p>

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
      )}

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
