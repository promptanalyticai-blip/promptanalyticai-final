"use client";

import { useEffect, useState } from "react";

// Supabase (CORRECTO)
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// ApexCharts
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// IA Cognitiva (V6)
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// Icons
import { Activity, Gauge, AlertTriangle, Sparkles, Radar } from "lucide-react";

export default function TelemetriaAvanzadaPage() {
  const [telemetria, setTelemetria] = useState([]);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    cargarTelemetria();
  }, []);

  async function cargarTelemetria() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("telemetry")
      .select("*")
      .eq("user_id", user.id)
      .order("creado_en", { ascending: false })
      .limit(100);

    setTelemetria(data || []);
  }

  async function registrarEventoManual() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("telemetry").insert({
      user_id: user.id,
      actividad: Math.floor(Math.random() * 100),
      latencia: Math.floor(Math.random() * 120),
      estabilidad: Math.floor(Math.random() * 100),
      nivel: "manual",
      descripcion: "Evento manual registrado desde Telemetría Avanzada",
    });

    setEstado("✔ Evento manual registrado");
    cargarTelemetria();
    setTimeout(() => setEstado(""), 3000);
  }

  // ========================= GRÁFICOS =========================

  const actividadData = telemetria.map((t) => t.actividad);
  const latenciaData = telemetria.map((t) => t.latencia);
  const estabilidadData = telemetria.map((t) => t.estabilidad);
  const labels = telemetria.map((t) =>
    new Date(t.creado_en).toLocaleTimeString()
  );

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      {/* HEADER */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={Radar} color="cyan" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Telemetría Avanzada · Operaciones Cognitivas
            </h1>
            <p className="text-sm text-slate-500">
              Monitoreo avanzado con IA, gráficos reales y correlación operativa.
            </p>
          </div>
        </div>
      </section>

      {estado && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-700 text-sm">
          {estado}
        </div>
      )}

      {/* BOTÓN MANUAL */}
      <button
        onClick={registrarEventoManual}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm hover:bg-indigo-700"
      >
        Registrar evento manual
      </button>

      {/* GRÁFICO DE ACTIVIDAD */}
      <ChartCard title="Actividad del sistema">
        <Chart
          type="line"
          height={300}
          series={[{ name: "Actividad", data: actividadData }]}
          options={{
            chart: { toolbar: { show: false } },
            stroke: { curve: "smooth" },
            xaxis: { categories: labels },
            colors: ["#06b6d4"],
          }}
        />
      </ChartCard>

      {/* GRÁFICO DE LATENCIA */}
      <ChartCard title="Latencia del sistema">
        <Chart
          type="area"
          height={300}
          series={[{ name: "Latencia", data: latenciaData }]}
          options={{
            chart: { toolbar: { show: false } },
            stroke: { curve: "smooth" },
            xaxis: { categories: labels },
            colors: ["#f43f5e"],
          }}
        />
      </ChartCard>

      {/* GRÁFICO DE ESTABILIDAD */}
      <ChartCard title="Estabilidad operativa">
        <Chart
          type="bar"
          height={300}
          series={[{ name: "Estabilidad", data: estabilidadData }]}
          options={{
            chart: { toolbar: { show: false } },
            xaxis: { categories: labels },
            colors: ["#8b5cf6"],
          }}
        />
      </ChartCard>

      {/* IA COGNITIVA */}
      <AIInsight
        title="Explicación IA"
        data={[actividadData.length, latenciaData.length, estabilidadData.length]}
        type="telemetria"
        timeframe="24h"
      />

      <AIScenarios
        title="Escenarios IA"
        data={[actividadData.length, latenciaData.length, estabilidadData.length]}
        type="telemetria"
      />

      <AIAnomalias
        title="Anomalías detectadas por IA"
        riesgos={[]}
        senales={[]}
        decisiones={[]}
        predicciones={[]}
        telemetria={telemetria}
      />

      <AICorrelationEngine
        riesgos={[]}
        senales={[]}
        decisiones={[]}
        predicciones={[]}
        telemetria={telemetria}
      />

    </div>
  );
}

/* ============================ CARD DE GRÁFICO ============================ */
function ChartCard({ title, children }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      {children}
    </div>
  );
}
