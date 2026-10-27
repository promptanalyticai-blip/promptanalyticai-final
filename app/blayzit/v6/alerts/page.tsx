"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import dynamic from "next/dynamic";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// IA Cognitiva
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";

// Icons
import { AlertTriangle, Bell, Shield, Brain, Zap } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AlertsPage() {
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

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Centro de Alertas Cognitivo V7
      </h1>

      {/* CARDS DE ALERTAS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        <Card
          icon={AlertTriangle}
          color="rose"
          title="Riesgos Críticos"
          value={riesgos.filter(r => r.nivel === "critico").length}
        />

        <Card
          icon={Zap}
          color="amber"
          title="Señales Disparadas"
          value={senales.filter(s => s.criticidad >= 80).length}
        />

        <Card
          icon={Brain}
          color="indigo"
          title="Predicciones Peligrosas"
          value={predicciones.filter(p => p.probabilidad >= 75).length}
        />

        <Card
          icon={Shield}
          color="emerald"
          title="Decisiones Críticas"
          value={decisiones.filter(d => d.impacto >= 70).length}
        />

        <Card
          icon={Bell}
          color="purple"
          title="Alertas Totales"
          value={
            riesgos.filter(r => r.nivel === "critico").length +
            senales.filter(s => s.criticidad >= 80).length +
            predicciones.filter(p => p.probabilidad >= 75).length +
            decisiones.filter(d => d.impacto >= 70).length
          }
        />

      </div>

      {/* GRÁFICO GLOBAL DE ALERTAS */}
      <ChartCard title="Mapa Global de Alertas">
        <Chart
          type="radar"
          height={350}
          series={[
            {
              name: "Alertas",
              data: [
                riesgos.filter(r => r.nivel === "critico").length,
                senales.filter(s => s.criticidad >= 80).length,
                predicciones.filter(p => p.probabilidad >= 75).length,
                decisiones.filter(d => d.impacto >= 70).length,
                telemetry.filter(t => t.nivel === "critico").length,
                pipelines.filter(p => p.estado === "error").length,
              ],
            },
          ]}
          options={{
            chart: { toolbar: { show: false } },
            labels: [
              "Riesgos",
              "Señales DNIP",
              "Predicciones IA",
              "Decisiones ADIP",
              "Telemetría",
              "Pipelines",
            ],
            colors: ["#e11d48"],
          }}
        />

        <AIInsight
          title="Explicación IA"
          data={[
            riesgos.filter(r => r.nivel === "critico").length,
            senales.filter(s => s.criticidad >= 80).length,
            predicciones.filter(p => p.probabilidad >= 75).length,
            decisiones.filter(d => d.impacto >= 70).length,
            telemetry.filter(t => t.nivel === "critico").length,
            pipelines.filter(p => p.estado === "error").length,
          ]}
          type="alertas"
          timeframe="7d"
        />

        <AIScenarios
          title="Escenarios IA"
          data={[
            riesgos.filter(r => r.nivel === "critico").length,
            senales.filter(s => s.criticidad >= 80).length,
            predicciones.filter(p => p.probabilidad >= 75).length,
            decisiones.filter(d => d.impacto >= 70).length,
            telemetry.filter(t => t.nivel === "critico").length,
            pipelines.filter(p => p.estado === "error").length,
          ]}
          type="alertas"
        />
      </ChartCard>

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
        title="Anomalías Globales del Sistema (IA)"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
      />

    </div>
  );
}

/* CARD RESUMEN */
function Card({ icon, color, title, value }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-2">
      <PremiumIcon icon={icon} color={color} size={22} />
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

/* CARD DE GRÁFICO */
function ChartCard({ title, children }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">{title}</h3>
      {children}
    </div>
  );
}
