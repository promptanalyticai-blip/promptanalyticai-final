"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@supabase/supabase-js";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// IA Cognitiva
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";

// Icons
import { Activity, Zap, AlertTriangle, Sparkles } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SenalesPage() {
  const [senales, setSenales] = useState([]);
  const [riesgos, setRiesgos] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [s, r, d, p] = await Promise.all([
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    setSenales(s.data || []);
    setRiesgos(r.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Señales DNIP Cognitivo V6
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card
          icon={Activity}
          color="amber"
          title="Total Señales"
          value={senales.length}
        />

        <Card
          icon={AlertTriangle}
          color="rose"
          title="Críticas"
          value={senales.filter(s => s.criticidad >= 80).length}
        />

        <Card
          icon={Zap}
          color="indigo"
          title="Automatizadas"
          value={senales.filter(s => s.automatizada === true).length}
        />

        <Card
          icon={Sparkles}
          color="emerald"
          title="Estables"
          value={senales.filter(s => s.criticidad < 40).length}
        />

      </div>

      {/* GRÁFICOS + IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CRITICIDAD */}
        <ChartCard title="Tendencia de Criticidad DNIP">
          <Chart
            type="line"
            height={300}
            series={[
              {
                name: "Criticidad",
                data: senales.map(s => s.criticidad || 0),
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#f97316"],
              stroke: { curve: "smooth" },
              xaxis: {
                categories: senales.map(s => s.fecha || "N/A"),
              },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={senales.map(s => s.criticidad || 0)}
            type="senales"
            timeframe="7d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={senales.map(s => s.criticidad || 0)}
            type="senales"
          />
        </ChartCard>

        {/* AUTOMATIZADAS */}
        <ChartCard title="Señales Automatizadas">
          <Chart
            type="bar"
            height={300}
            series={[
              {
                name: "Automatizadas",
                data: senales.map(s => (s.automatizada ? 1 : 0)),
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#6366f1"],
              xaxis: {
                categories: senales.map(s => s.fecha || "N/A"),
              },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={senales.map(s => (s.automatizada ? 1 : 0))}
            type="senales"
            timeframe="15d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={senales.map(s => (s.automatizada ? 1 : 0))}
            type="senales"
          />
        </ChartCard>

        {/* CATEGORÍAS */}
        <ChartCard title="Señales por Categoría">
          <Chart
            type="pie"
            height={300}
            series={Object.values(
              senales.reduce((acc, s) => {
                acc[s.categoria] = (acc[s.categoria] || 0) + 1;
                return acc;
              }, {})
            )}
            options={{
              labels: Object.keys(
                senales.reduce((acc, s) => {
                  acc[s.categoria] = (acc[s.categoria] || 0) + 1;
                  return acc;
                }, {})
              ),
              colors: ["#e11d48", "#f97316", "#10b981", "#6366f1", "#8b5cf6"],
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={Object.values(
              senales.reduce((acc, s) => {
                acc[s.categoria] = (acc[s.categoria] || 0) + 1;
                return acc;
              }, {})
            )}
            type="senales"
            timeframe="30d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={Object.values(
              senales.reduce((acc, s) => {
                acc[s.categoria] = (acc[s.categoria] || 0) + 1;
                return acc;
              }, {})
            )}
            type="senales"
          />
        </ChartCard>

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
        title="Anomalías en Señales DNIP (IA)"
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
