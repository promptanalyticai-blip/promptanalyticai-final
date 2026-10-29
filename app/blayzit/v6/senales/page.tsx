"use client";

import { useEffect, useState } from "react";

// Supabase correcto
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// ApexCharts
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// IA Cognitiva
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// Icons
import { Radar, AlertTriangle } from "lucide-react";

export default function SenalesPage() {
  const [senales, setSenales] = useState([]);

  useEffect(() => {
    cargarSenales();
  }, []);

  async function cargarSenales() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("dnip_senales")
      .select("*")
      .eq("user_id", user.id)
      .order("creado_en", { ascending: false });

    setSenales(data || []);
  }

  const criticidades = senales.map((s) => s.criticidad);
  const labels = senales.map((s) =>
    new Date(s.creado_en).toLocaleTimeString()
  );

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <PremiumIcon icon={Radar} color="cyan" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Inteligencia Operativa · Señales DNIP
          </h1>
          <p className="text-sm text-slate-500">
            Análisis avanzado de señales operativas con IA Cognitiva.
          </p>
        </div>
      </div>

      {/* LISTA DE SEÑALES */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-cyan-600" />
          Señales detectadas
        </h3>

        {senales.length === 0 ? (
          <p className="text-sm text-slate-500">No hay señales registradas.</p>
        ) : (
          <div className="space-y-3">
            {senales.map((s) => (
              <div
                key={s.id}
                className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex justify-between"
              >
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-slate-800">
                    Tipo: {s.tipo}
                  </p>
                  <p className="text-xs text-slate-500">{s.descripcion}</p>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-500">
                    Criticidad: {s.criticidad}
                  </span>
                  <span className="text-xs text-slate-500">
                    {new Date(s.creado_en).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* GRÁFICO DE CRITICIDAD */}
      <ChartCard title="Tendencia de criticidad de señales">
        <Chart
          type="line"
          height={300}
          series={[{ name: "Criticidad", data: criticidades }]}
          options={{
            chart: { toolbar: { show: false } },
            stroke: { curve: "smooth" },
            xaxis: { categories: labels },
            colors: ["#06b6d4"],
          }}
        />
      </ChartCard>

      {/* IA COGNITIVA */}
      <AIInsight
        title="Explicación IA"
        data={[senales.length]}
        type="senales"
        timeframe="24h"
      />

      <AIScenarios
        title="Escenarios IA"
        data={[senales.length]}
        type="senales"
      />

      <AIAnomalias
        title="Anomalías en señales"
        riesgos={[]}
        senales={senales}
        decisiones={[]}
        predicciones={[]}
      />

      <AICorrelationEngine
        riesgos={[]}
        senales={senales}
        decisiones={[]}
        predicciones={[]}
      />

    </div>
  );
}

/* CARD DE GRÁFICO */
function ChartCard({ title, children }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      {children}
    </div>
  );
}
