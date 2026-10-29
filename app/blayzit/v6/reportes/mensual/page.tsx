"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";

import { CalendarCheck, Activity, AlertTriangle, Brain, Radar, Sparkles } from "lucide-react";

export default function ReporteMensualV6() {
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetria, setTelemetria] = useState([]);

  useEffect(() => { cargarTodo(); }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const hoy = new Date();
    const hace30dias = new Date(hoy.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const [r, s, d, p, t] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id).gte("creado_en", hace30dias),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id).gte("creado_en", hace30dias),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id).gte("creado_en", hace30dias),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id).gte("creado_en", hace30dias),
      supabase.from("telemetry").select("*").eq("user_id", user.id).gte("creado_en", hace30dias),
    ]);

    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
    setTelemetria(t.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      <div className="flex items-center gap-4">
        <PremiumIcon icon={CalendarCheck} color="purple" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Reporte Mensual V6</h1>
          <p className="text-sm text-slate-500">Resumen de los últimos 30 días · IA Cognitiva</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Metric title="Riesgos del mes" value={riesgos.length} icon={AlertTriangle} color="rose" />
        <Metric title="Señales del mes" value={senales.length} icon={Radar} color="cyan" />
        <Metric title="Decisiones del mes" value={decisiones.length} icon={Brain} color="purple" />
        <Metric title="Predicciones IA" value={predicciones.length} icon={Sparkles} color="amber" />
        <Metric title="Eventos del sistema" value={telemetria.length} icon={Activity} color="emerald" />
      </div>

      <AICorrelationEngine riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} telemetria={telemetria} />
      <AIPrioridad riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} telemetria={telemetria} />
      <AIAnomalias title="Anomalías detectadas este mes" riesgos={riesgos} senales={senales} decisiones={decisiones} predicciones={predicciones} telemetria={telemetria} />

      <AIInsight title="Explicación IA mensual" data={[riesgos.length, senales.length, decisiones.length, predicciones.length, telemetria.length]} type="reporte-mensual" timeframe="30d" />
      <AIScenarios title="Escenarios IA mensuales" data={[riesgos.length, senales.length, decisiones.length, predicciones.length, telemetria.length]} type="reporte-mensual" />

    </div>
  );
}

function Metric({ title, value, icon: Icon, color }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <PremiumIcon icon={Icon} color={color} size={22} />
      <h3 className="mt-4 text-sm font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
