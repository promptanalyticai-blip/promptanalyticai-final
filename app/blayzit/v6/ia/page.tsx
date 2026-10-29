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
import { Brain, Zap, AlertTriangle, Sparkles } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function IAPage() {
  const [predicciones, setPredicciones] = useState([]);
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [p, r, s, d] = await Promise.all([
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
    ]);

    setPredicciones(p.data || []);
    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">
      <h1 className="text-2xl font-semibold text-slate-800">
        Predicciones IA Cognitivo V6
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card icon={Brain} color="indigo" title="Total Predicciones" value={predicciones.length} />
        <Card icon={AlertTriangle} color="rose" title="Críticas" value={predicciones.filter(p => p.probabilidad >= 80).length} />
        <Card icon={Zap} color="amber" title="Eventos Próximos" value={predicciones.filter(p => p.probabilidad >= 60).length} />
        <Card icon={Sparkles} color="emerald" title="Estables" value={predicciones.filter(p => p.probabilidad < 40).length} />
      </div>

      {/* GRÁFICOS + IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* PROBABILIDAD */}
        <ChartCard title="Probabilidad de Eventos IA">
          <Chart
            type="line"
            height={300}
            series={[
              {
                name: "Probabilidad",
                data: predicciones.map(p => p.probabilidad || 0),
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#6366f1"],
              stroke: { curve: "smooth" },
              xaxis: { categories: predicciones.map(p => p.fecha || "N/A") },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={predicciones.map(p => p.probabilidad || 0)}
            type="ia"
            timeframe="7d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={predicciones.map(p => p.probabilidad || 0)}
            type="ia"
          />
        </ChartCard>

        {/* EVENTOS */}
        <ChartCard title="Eventos IA por Categoría">
          <Chart
            type="pie"
            height={300}
            series={Object.values(
              predicciones.reduce((acc, p) => {
                acc[p.evento] = (acc[p.evento] || 0) + 1;
                return acc;
              }, {})
            )}
            options={{
              labels: Object.keys(
                predicciones.reduce((acc, p) => {
                  acc[p.evento] = (acc[p.evento] || 0) + 1;
                  return acc;
                }, {})
              ),
              colors: ["#e11d48", "#f97316", "#10b981", "#6366f1", "#8b5cf6"],
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={Object.values(
              predicciones.reduce((acc, p) => {
                acc[p.evento] = (acc[p.evento] || 0) + 1;
                return acc;
              }, {})
            )}
            type="ia"
            timeframe="15d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={Object.values(
              predicciones.reduce((acc, p) => {
                acc[p.evento] = (acc[p.evento] || 0) + 1;
                return acc;
              }, {})
            )}
            type="ia"
          />
        </ChartCard>

        {/* RADIAL */}
        <ChartCard title="Impacto Estimado IA">
          <Chart
            type="radialBar"
            height={300}
            series={predicciones.map(p => p.probabilidad || 0)}
            options={{
              labels: predicciones.map(p => p.evento || "Evento"),
              colors: ["#6366f1", "#8b5cf6", "#10b981", "#e11d48"],
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={predicciones.map(p => p.probabilidad || 0)}
            type="ia"
            timeframe="30d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={predicciones.map(p => p.probabilidad || 0)}
            type="ia"
          />
        </ChartCard>
      </div>

      {/* IA GLOBAL */}
      <AICorrelationEngine riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
      <AIPrioridad riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} />
      <AIAnomalias
        title="Anomalías en Predicciones IA"
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