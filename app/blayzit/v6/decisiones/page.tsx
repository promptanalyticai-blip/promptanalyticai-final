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
import { Workflow, CheckCircle, XCircle, Brain } from "lucide-react";

// ApexCharts dinámico
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DecisionesPage() {
  const [decisiones, setDecisiones] = useState([]);
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [d, r, s, p] = await Promise.all([
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    setDecisiones(d.data || []);
    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setPredicciones(p.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white p-10 space-y-10">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <PremiumIcon icon={Brain} color="purple" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Inteligencia Operativa · Decisiones ADIP
          </h1>
          <p className="text-sm text-slate-500">
            Análisis avanzado de decisiones operativas con IA Cognitiva.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card
          icon={Workflow}
          color="indigo"
          title="Total Decisiones"
          value={decisiones.length}
        />

        <Card
          icon={CheckCircle}
          color="emerald"
          title="Aprobadas"
          value={decisiones.filter(d => d.estado === "aprobada").length}
        />

        <Card
          icon={XCircle}
          color="rose"
          title="Rechazadas"
          value={decisiones.filter(d => d.estado === "rechazada").length}
        />

        <Card
          icon={Brain}
          color="purple"
          title="IA Sugeridas"
          value={decisiones.filter(d => d.origen === "ia").length}
        />

      </div>

      {/* GRÁFICOS + IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ESTADOS */}
        <ChartCard title="Decisiones por Estado">
          <Chart
            type="bar"
            height={300}
            series={[
              {
                name: "Cantidad",
                data: [
                  decisiones.filter(d => d.estado === "aprobada").length,
                  decisiones.filter(d => d.estado === "rechazada").length,
                  decisiones.filter(d => d.estado === "pendiente").length,
                ],
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#6366f1"],
              xaxis: {
                categories: ["Aprobadas", "Rechazadas", "Pendientes"],
              },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={[
              decisiones.filter(d => d.estado === "aprobada").length,
              decisiones.filter(d => d.estado === "rechazada").length,
              decisiones.filter(d => d.estado === "pendiente").length,
            ]}
            type="decisiones"
            timeframe="7d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={[
              decisiones.filter(d => d.estado === "aprobada").length,
              decisiones.filter(d => d.estado === "rechazada").length,
              decisiones.filter(d => d.estado === "pendiente").length,
            ]}
            type="decisiones"
          />
        </ChartCard>

        {/* ORIGEN */}
        <ChartCard title="Origen de Decisiones">
          <Chart
            type="pie"
            height={300}
            series={Object.values(
              decisiones.reduce((acc, d) => {
                acc[d.origen] = (acc[d.origen] || 0) + 1;
                return acc;
              }, {})
            )}
            options={{
              labels: Object.keys(
                decisiones.reduce((acc, d) => {
                  acc[d.origen] = (acc[d.origen] || 0) + 1;
                  return acc;
                }, {})
              ),
              colors: ["#8b5cf6", "#10b981", "#e11d48"],
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={Object.values(
              decisiones.reduce((acc, d) => {
                acc[d.origen] = (acc[d.origen] || 0) + 1;
                return acc;
              }, {})
            )}
            type="decisiones"
            timeframe="15d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={Object.values(
              decisiones.reduce((acc, d) => {
                acc[d.origen] = (acc[d.origen] || 0) + 1;
                return acc;
              }, {})
            )}
            type="decisiones"
          />
        </ChartCard>

        {/* IMPACTO */}
        <ChartCard title="Impacto de Decisiones">
          <Chart
            type="line"
            height={300}
            series={[
              {
                name: "Impacto",
                data: decisiones.map(d => d.impacto || 0),
              },
            ]}
            options={{
              chart: { toolbar: { show: false } },
              colors: ["#f97316"],
              stroke: { curve: "smooth" },
              xaxis: {
                categories: decisiones.map(d => d.fecha || "N/A"),
              },
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={decisiones.map(d => d.impacto || 0)}
            type="decisiones"
            timeframe="30d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={decisiones.map(d => d.impacto || 0)}
            type="decisiones"
          />
        </ChartCard>

        {/* RADIAL */}
        <ChartCard title="Distribución Total">
          <Chart
            type="radialBar"
            height={300}
            series={[
              decisiones.filter(d => d.estado === "aprobada").length,
              decisiones.filter(d => d.estado === "rechazada").length,
              decisiones.filter(d => d.estado === "pendiente").length,
            ]}
            options={{
              labels: ["Aprobadas", "Rechazadas", "Pendientes"],
              colors: ["#10b981", "#e11d48", "#6366f1"],
            }}
          />

          <AIInsight
            title="Explicación IA"
            data={[
              decisiones.filter(d => d.estado === "aprobada").length,
              decisiones.filter(d => d.estado === "rechazada").length,
              decisiones.filter(d => d.estado === "pendiente").length,
            ]}
            type="decisiones"
            timeframe="7d"
          />

          <AIScenarios
            title="Escenarios IA"
            data={[
              decisiones.filter(d => d.estado === "aprobada").length,
              decisiones.filter(d => d.estado === "rechazada").length,
              decisiones.filter(d => d.estado === "pendiente").length,
            ]}
            type="decisiones"
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
        title="Anomalías en Decisiones (IA)"
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
