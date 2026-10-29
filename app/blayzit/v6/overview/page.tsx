"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/client";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// IA Cognitiva
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";

// Icons
import { Brain, Shield, Activity, Zap, Gauge } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Supabase (CLIENTE GLOBAL)
const supabase = createClient();

export default function OverviewPage() {
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
        Resumen Global Cognitivo V7
      </h1>

      {/* CARDS GLOBAL */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        <Card icon={Shield} color="rose" title="Riesgos" value={riesgos.length} />
        <Card icon={Activity} color="amber" title="Señales DNIP" value={senales.length} />
        <Card icon={Brain} color="indigo" title="Predicciones IA" value={predicciones.length} />
        <Card icon={Zap} color="emerald" title="Decisiones ADIP" value={decisiones.length} />
        <Card icon={Gauge} color="purple" title="Telemetría" value={telemetry.length} />
        <Card icon={Zap} color="blue" title="Pipelines" value={pipelines.length} />

      </div>

      {/* GRÁFICO GLOBAL */}
      <ChartCard title="Estado Global del Sistema">
        <Chart
          type="radar"
          height={350}
          series={[
            {
              name: "Estado",
              data: [
                riesgos.length,
                senales.length,
                predicciones.length,
                decisiones.length,
                telemetry.length,
                pipelines.length,
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
            colors: ["#6366f1"],
          }}
        />

        <AIInsight
          title="Explicación IA"
          data={[
            riesgos.length,
            senales.length,
            predicciones.length,
            decisiones.length,
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
            predicciones.length,
            decisiones.length,
            telemetry.length,
            pipelines.length,
          ]}
          type="overview"
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
