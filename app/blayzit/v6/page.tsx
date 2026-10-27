"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/Client";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// IA Cognitiva
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";

// Icons
import { Shield, Activity, Brain, Zap } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Supabase (CLIENTE GLOBAL)
const supabase = createClient();

export default function DashboardV6() {
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [r, s, d, p] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      {/* TÍTULO */}
      <h1 className="text-2xl font-semibold text-slate-800">
        Dashboard Cognitivo V6
      </h1>

      {/* CARDS RESUMEN */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card icon={Shield} color="rose" title="Riesgos Totales" value={riesgos.length} />
        <Card icon={Activity} color="amber" title="Señales DNIP" value={senales.length} />
        <Card icon={Brain} color="indigo" title="Predicciones IA" value={predicciones.length} />
        <Card icon={Zap} color="emerald" title="Decisiones ADIP" value={decisiones.length} />

      </div>

      {/* GRÁFICOS + IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* RIESGOS */}
        <ChartCard title="Tendencia de Riesgos">
          <Chart
            type="line"
            height={300}
            series={[{ name: "Riesgos", data: riesgos.map(r => r.nivel_num || 0) }]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#e11d48"],
              stroke: { curve: "smooth" },
              xaxis: { categories: riesgos.map(r => r.fecha || "N/A") },
            }}
          />

          <AIInsight title="Explicación IA" data={riesgos.map(r => r.nivel_num || 0)} type="riesgos" timeframe="7d" />
          <AIScenarios title="Escenarios IA" data={riesgos.map(r => r.nivel_num || 0)} type="riesgos" />
        </ChartCard>

        {/* SEÑALES DNIP */}
        <ChartCard title="Señales DNIP">
          <Chart
            type="bar"
            height={300}
            series={[{ name: "Señales", data: senales.map(s => s.criticidad || 0) }]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#f97316"],
              xaxis: { categories: senales.map(s => s.fecha || "N/A") },
            }}
          />

          <AIInsight title="Explicación IA" data={senales.map(s => s.criticidad || 0)} type="senales" timeframe="15d" />
          <AIScenarios title="Escenarios IA" data={senales.map(s => s.criticidad || 0)} type="senales" />
        </ChartCard>

        {/* DECISIONES */}
        <ChartCard title="Impacto de Decisiones">
          <Chart
            type="line"
            height={300}
            series={[{ name: "Impacto", data: decisiones.map(d => d.impacto || 0) }]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#10b981"],
              stroke: { curve: "smooth" },
              xaxis: { categories: decisiones.map(d => d.fecha || "N/A") },
            }}
          />

          <AIInsight title="Explicación IA" data={decisiones.map(d => d.impacto || 0)} type="decisiones" timeframe="30d" />
          <AIScenarios title="Escenarios IA" data={decisiones.map(d => d.impacto || 0)} type="decisiones" />
        </ChartCard>

        {/* IA PREDICCIONES */}
        <ChartCard title="Predicciones IA">
          <Chart
            type="radialBar"
            height={300}
            series={predicciones.map(p => p.probabilidad || 0)}
            options={{
              labels: predicciones.map(p => p.evento || "Evento"),
              colors: ["#6366f1", "#8b5cf6", "#10b981", "#e11d48"],
            }}
          />

          <AIInsight title="Explicación IA" data={predicciones.map(p => p.probabilidad || 0)} type="ia" timeframe="7d" />
          <AIScenarios title="Escenarios IA" data={predicciones.map(p => p.probabilidad || 0)} type="ia" />
        </ChartCard>

      </div>

      {/* IA GLOBAL */}
      <AICorrelationEngine riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
      <AIPrioridad riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
      <AIAnomalias title="Anomalías del Sistema (IA)" riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />

    </div>
  );
}

function Card({ icon, color, title, value }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-2">
      <PremiumIcon icon={icon} color={color} size={22} />
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">{title}</h3>
      {children}
    </div>
  );
}
