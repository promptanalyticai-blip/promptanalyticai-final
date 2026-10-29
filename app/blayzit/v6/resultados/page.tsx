"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Supabase CORRECTO
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// IA Cognitiva
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";

// Icons
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  Brain,
  BarChart3,
  Radar,
  Sparkles,
} from "lucide-react";

// Tus componentes
import MetricCard from "./components/MetricCard";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
import IndicatorCard from "./components/IndicatorCard";
import PredictionItem from "./components/PredictionItem";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ResultadosOmniversalV6() {
  const [riesgos, setRiesgos] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [senales, setSenales] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetria, setTelemetria] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [r, d, s, p, t] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
      supabase.from("telemetry").select("*").eq("user_id", user.id),
    ]);

    setRiesgos(r.data || []);
    setDecisiones(d.data || []);
    setSenales(s.data || []);
    setPredicciones(p.data || []);
    setTelemetria(t.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <PremiumIcon icon={Sparkles} color="amber" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Resultados Omniversal V6
          </h1>
          <p className="text-sm text-slate-500">
            Inteligencia global del sistema · IA Cognitiva · Telemetría avanzada
          </p>
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <MetricCard
          icon={<AlertTriangle className="h-5 w-5 text-rose-600" />}
          title="Riesgos"
          value={riesgos.length}
        />
        <MetricCard
          icon={<Brain className="h-5 w-5 text-indigo-600" />}
          title="Decisiones"
          value={decisiones.length}
        />
        <MetricCard
          icon={<Radar className="h-5 w-5 text-cyan-600" />}
          title="Señales"
          value={senales.length}
        />
        <MetricCard
          icon={<Sparkles className="h-5 w-5 text-purple-600" />}
          title="Predicciones IA"
          value={predicciones.length}
        />
        <MetricCard
          icon={<Activity className="h-5 w-5 text-emerald-600" />}
          title="Telemetría"
          value={telemetria.length}
        />
      </div>

      {/* GRÁFICO DE ACTIVIDAD */}
      <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">
          Actividad histórica del sistema
        </h2>
        <LineChart data={telemetria.map(t => t.actividad)} />
      </div>

      {/* TENDENCIAS IA */}
      <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">
          Tendencias IA
        </h2>
        <AreaChart data={predicciones.map(p => p.probabilidad)} />
      </div>

      {/* INDICADORES IA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <IndicatorCard label="Precisión IA" value="92%" color="emerald" />
        <IndicatorCard label="Predicciones activas" value={predicciones.length} color="purple" />
        <IndicatorCard label="Tendencia general" value="+12%" color="indigo" />
      </div>

      {/* PREDICCIONES DETALLADAS */}
      <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">
          Predicciones IA detalladas
        </h2>

        {predicciones.length === 0 ? (
          <p className="text-sm text-slate-500">No hay predicciones activas.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {predicciones.map((p) => (
              <PredictionItem
                key={p.id}
                tipo={p.tipo}
                probabilidad={p.probabilidad}
                criticidad={p.criticidad}
                origen={p.origen}
                descripcion={p.descripcion}
              />
            ))}
          </div>
        )}
      </div>

      {/* IA GLOBAL */}
      <AICorrelationEngine
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
      />

      <AIPrioridad
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
      />

      <AIAnomalias
        title="Anomalías globales del sistema"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
      />

    </div>
  );
}
