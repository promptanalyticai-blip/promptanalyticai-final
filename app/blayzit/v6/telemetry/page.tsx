"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Supabase (ruta FINAL correcta)
import { createClient } from "../../../../lib/supabase/client";
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
import { Activity, Cpu, Gauge, Zap } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TelemetryPage() {
  const [telemetry, setTelemetry] = useState([]);
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

    const [t, s, r, d, p] = await Promise.all([
      supabase.from("telemetry").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    setTelemetry(t.data || []);
    setSenales(s.data || []);
    setRiesgos(r.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">
      <h1 className="text-2xl font-semibold text-slate-800">
        Telemetría Cognitivo V6
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card icon={Cpu} color="indigo" title="Eventos Totales" value={telemetry.length} />
        <Card icon={Activity} color="rose" title="Eventos Críticos" value={telemetry.filter(t => t.nivel === "critico").length} />
        <Card icon={Gauge} color="amber" title="Eventos de Carga" value={telemetry.filter(t => t.tipo === "carga").length} />
        <Card icon={Zap} color="emerald" title="Eventos Estables" value={telemetry.filter(t => t.nivel === "bajo").length} />
      </div>

      {/* GRÁFICOS + IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* NIVEL */}
        <ChartCard title="Tendencia de Nivel de Telemetría">
          <Chart
            type="line"
            height={300}
            series={[
              { name: "Nivel", data: telemetry.map(t => t.valor || 0) }
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#6366f1"],
              stroke: { curve: "smooth" },
              xaxis: { categories: telemetry.map(t => t.fecha || "N/A") },
            }}
          />
          <AIInsight title="Explicación IA" data={telemetry.map(t => t.valor || 0)} type="telemetry" timeframe="7d" />
          <AIScenarios title="Escenarios IA" data={telemetry.map(t => t.valor || 0)} type="telemetry" />
        </ChartCard>

        {/* TIPOS */}
        <ChartCard title="Eventos por Tipo">
          <Chart
            type="pie"
            height={300}
            series={Object.values(
              telemetry.reduce((acc, t) => {
                acc[t.tipo] = (acc[t.tipo] || 0) + 1;
                return acc;
              }, {})
            )}
            options={{
              labels: Object.keys(
                telemetry.reduce((acc, t) => {
                  acc[t.tipo] = (acc[t.tipo] || 0) + 1;
                  return acc;
                }, {})
              ),
              colors: ["#e11d48", "#f97316", "#10b981", "#6366f1"],
            }}
          />
          <AIInsight title="Explicación IA" data={Object.values(
            telemetry.reduce((acc, t) => {
              acc[t.tipo] = (acc[t.tipo] || 0) + 1;
              return acc;
            }, {})
          )} type="telemetry" timeframe="15d" />
          <AIScenarios title="Escenarios IA" data={Object.values(
            telemetry.reduce((acc, t) => {
              acc[t.tipo] = (acc[t.tipo] || 0) + 1;
              return acc;
            }, {})
          )} type="telemetry" />
        </ChartCard>

        {/* RADIAL */}
        <ChartCard title="Impacto de Telemetría">
          <Chart
            type="radialBar"
            height={300}
            series={telemetry.map(t => t.valor || 0)}
            options={{
              labels: telemetry.map(t => t.tipo || "Evento"),
              colors: ["#6366f1", "#8b5cf6", "#10b981", "#e11d48"],
            }}
          />
          <AIInsight title="Explicación IA" data={telemetry.map(t => t.valor || 0)} type="telemetry" timeframe="30d" />
          <AIScenarios title="Escenarios IA" data={telemetry.map(t => t.valor || 0)} type="telemetry" />
        </ChartCard>
      </div>

      {/* IA GLOBAL */}
      <AICorrelationEngine riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
      <AIPrioridad riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
      <AIAnomalias title="Anomalías en Telemetría (IA)" riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
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
