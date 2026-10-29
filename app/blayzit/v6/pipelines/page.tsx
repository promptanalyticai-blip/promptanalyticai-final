"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Supabase (CORRECTO)
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
import { Zap, Workflow, Activity, Sparkles } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PipelinesPage() {
  const [pipelines, setPipelines] = useState([]);
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

    const [p, s, r, d, iap] = await Promise.all([
      supabase.from("pipelines").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    setPipelines(p.data || []);
    setSenales(s.data || []);
    setRiesgos(r.data || []);
    setDecisiones(d.data || []);
    setPredicciones(iap.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      <h1 className="text-2xl font-semibold text-slate-800">
        Pipelines Cognitivo V6
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card
          icon={Workflow}
          color="indigo"
          title="Total Pipelines"
          value={pipelines.length}
        />

        <Card
          icon={Zap}
          color="rose"
          title="Activos"
          value={pipelines.filter(p => p.estado === "activo").length}
        />

        <Card
          icon={Activity}
          color="amber"
          title="Automáticos"
          value={pipelines.filter(p => p.tipo === "automatico").length}
        />

        <Card
          icon={Sparkles}
          color="emerald"
          title="Manual"
          value={pipelines.filter(p => p.tipo === "manual").length}
        />

      </div>

      {/* GRÁFICOS + IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ESTADO */}
        <ChartCard title="Pipelines por Estado">
          <Chart
            type="bar"
            height={300}
            series={[
              {
                name: "Cantidad",
                data: [
                  pipelines.filter(p => p.estado === "activo").length,
                  pipelines.filter(p => p.estado === "inactivo").length,
                  pipelines.filter(p => p.estado === "error").length,
                ],
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#6366f1"],
              xaxis: {
                categories: ["Activo", "Inactivo", "Error"],
              },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={[
              pipelines.filter(p => p.estado === "activo").length,
              pipelines.filter(p => p.estado === "inactivo").length,
              pipelines.filter(p => p.estado === "error").length,
            ]}
            type="pipelines"
            timeframe="7d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={[
              pipelines.filter(p => p.estado === "activo").length,
              pipelines.filter(p => p.estado === "inactivo").length,
              pipelines.filter(p => p.estado === "error").length,
            ]}
            type="pipelines"
          />
        </ChartCard>

        {/* AUTOMÁTICOS */}
        <ChartCard title="Pipelines Automáticos">
          <Chart
            type="line"
            height={300}
            series={[
              {
                name: "Automáticos",
                data: pipelines.map(p => (p.tipo === "automatico" ? 1 : 0)),
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#f97316"],
              stroke: { curve: "smooth" },
              xaxis: {
                categories: pipelines.map(p => p.fecha || "N/A"),
              },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={pipelines.map(p => (p.tipo === "automatico" ? 1 : 0))}
            type="pipelines"
            timeframe="15d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={pipelines.map(p => (p.tipo === "automaticico" ? 1 : 0))}
            type="pipelines"
          />
        </ChartCard>

        {/* CATEGORÍAS */}
        <ChartCard title="Pipelines por Categoría">
          <Chart
            type="pie"
            height={300}
            series={Object.values(
              pipelines.reduce((acc, p) => {
                acc[p.categoria] = (acc[p.categoria] || 0) + 1;
                return acc;
              }, {})
            )}
            options={{
              labels: Object.keys(
                pipelines.reduce((acc, p) => {
                  acc[p.categoria] = (acc[p.categoria] || 0) + 1;
                  return acc;
                }, {})
              ),
              colors: ["#e11d48", "#f97316", "#10b981", "#6366f1", "#8b5cf6"],
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={Object.values(
              pipelines.reduce((acc, p) => {
                acc[p.categoria] = (acc[p.categoria] || 0) + 1;
                return acc;
              }, {})
            )}
            type="pipelines"
            timeframe="30d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={Object.values(
              pipelines.reduce((acc, p) => {
                acc[p.categoria] = (acc[p.categoria] || 0) + 1;
                return acc;
              }, {})
            )}
            type="pipelines"
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
        title="Anomalías en Pipelines (IA)"
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
