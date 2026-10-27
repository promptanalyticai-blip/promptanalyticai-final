"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  Brain,
  BarChart3,
  Radar,
  Sparkles
} from "lucide-react";

import MetricCard from "./components/MetricCard";
import ChartBar from "./components/ChartBar";
import TrendCard from "./components/TrendCard";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
import IndicatorCard from "./components/IndicatorCard";
import PredictionItem from "./components/PredictionItem";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResultadosV6() {
  const [riesgos, setRiesgos] = useState(0);
  const [decisiones, setDecisiones] = useState(0);
  const [senales, setSenales] = useState(0);
  const [prediccionesIA, setPrediccionesIA] = useState(0);

  const [precisionIA, setPrecisionIA] = useState(92);
  const [tendencia, setTendencia] = useState("+12%");
  const [telemetria, setTelemetria] = useState(0);

  const [grafico, setGrafico] = useState([]);
  const [graficoIA, setGraficoIA] = useState([]);
  const [listaPredicciones, setListaPredicciones] = useState([]);

  useEffect(() => {
    cargarRiesgos();
    cargarDecisiones();
    cargarSenales();
    cargarPrediccionesIA();
    cargarTelemetria();
    cargarActividadGeneral();
  }, []);

  async function cargarRiesgos() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("adip_riesgos")
      .select("id")
      .eq("user_id", user.id)
      .eq("estado", "activo");

    setRiesgos(data?.length || 0);
  }

  async function cargarDecisiones() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("adip_decisiones")
      .select("id")
      .eq("user_id", user.id)
      .eq("estado", "procesada");

    setDecisiones(data?.length || 0);
  }

  async function cargarSenales() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("dnip_senales")
      .select("id")
      .eq("user_id", user.id)
      .eq("estado", "activa");

    setSenales(data?.length || 0);
  }

  async function cargarPrediccionesIA() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("ia_predicciones")
      .select("*")
      .eq("user_id", user.id)
      .eq("estado", "activa");

    setPrediccionesIA(data?.length || 0);
    setGraficoIA(data?.map((d) => d.probabilidad) || []);
    setListaPredicciones(data || []);
  }

  async function cargarTelemetria() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("telemetria_sistema")
      .select("actividad")
      .eq("user_id", user.id)
      .order("creado_en", { ascending: false })
      .limit(1);

    if (data && data.length > 0) {
      setTelemetria(data[0].actividad);
    }
  }

  async function cargarActividadGeneral() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("actividad_general")
      .select("valor")
      .eq("user_id", user.id)
      .order("creado_en", { ascending: false })
      .limit(12);

    if (data) {
      setGrafico(data.map((d) => d.valor));
    }
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Resultados operativos
      </h1>

      {/* MÉTRICAS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <MetricCard icon={<AlertTriangle className="h-5 w-5 text-rose-600" />} title="Riesgos activos" value={riesgos} />
        <MetricCard icon={<Brain className="h-5 w-5 text-indigo-600" />} title="Decisiones procesadas" value={decisiones} />
        <MetricCard icon={<Radar className="h-5 w-5 text-cyan-600" />} title="Señales activas" value={senales} />
        <MetricCard icon={<Sparkles className="h-5 w-5 text-purple-600" />} title="Predicciones IA" value={prediccionesIA} />
        <MetricCard icon={<Activity className="h-5 w-5 text-emerald-600" />} title="Actividad del sistema" value={`${telemetria}%`} />
      </div>

      {/* GRÁFICO DE LÍNEAS */}
      <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">Actividad histórica</h2>
        <LineChart data={grafico} />
      </div>

      {/* GRÁFICO DE ÁREA */}
      <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">Tendencias IA</h2>
        <AreaChart data={graficoIA} />
      </div>

      {/* INDICADORES IA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <IndicatorCard label="Precisión IA" value={`${precisionIA}%`} color="emerald" />
        <IndicatorCard label="Predicciones activas" value={prediccionesIA} color="purple" />
        <IndicatorCard label="Tendencia general" value={tendencia} color="indigo" />
      </div>

      {/* PANEL DETALLADO DE PREDICCIONES IA */}
      <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-slate-800 mb-4">Predicciones IA detalladas</h2>

        {listaPredicciones.length === 0 ? (
          <p className="text-sm text-slate-500">No hay predicciones activas.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listaPredicciones.map((p) => (
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

    </div>
  );
}
