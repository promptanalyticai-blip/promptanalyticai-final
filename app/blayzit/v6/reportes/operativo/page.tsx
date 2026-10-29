"use client";

import { useEffect, useState } from "react";

// Supabase correcto
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
import {
  Briefcase,
  Activity,
  AlertTriangle,
  Brain,
  Radar,
  Sparkles,
  FileSearch,
} from "lucide-react";

export default function ReporteOperativoV6() {
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetria, setTelemetria] = useState([]);
  const [auditoria, setAuditoria] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [r, s, d, p, t, a] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
      supabase.from("telemetry").select("*").eq("user_id", user.id),
      supabase.from("auditoria_eventos").select("*").eq("user_id", user.id),
    ]);

    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
    setTelemetria(t.data || []);
    setAuditoria(a.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <PremiumIcon icon={Briefcase} color="indigo" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Reporte Operativo V6 · Executive Intelligence Report
          </h1>
          <p className="text-sm text-slate-500">
            Visión ejecutiva completa · IA Cognitiva · Telemetría Avanzada · Auditoría Global
          </p>
        </div>
      </div>

      {/* MÉTRICAS EJECUTIVAS */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        <Metric title="Riesgos" value={riesgos.length} icon={AlertTriangle} color="rose" />
        <Metric title="Señales" value={senales.length} icon={Radar} color="cyan" />
        <Metric title="Decisiones" value={decisiones.length} icon={Brain} color="purple" />
        <Metric title="Predicciones IA" value={predicciones.length} icon={Sparkles} color="amber" />
        <Metric title="Telemetría" value={telemetria.length} icon={Activity} color="emerald" />
        <Metric title="Eventos Auditoría" value={auditoria.length} icon={FileSearch} color="blue" />

      </div>

      {/* RESUMEN EJECUTIVO */}
      <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Resumen Ejecutivo
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          Este reporte integra la actividad completa del sistema, combinando inteligencia operativa,
          auditoría avanzada, telemetría, predicciones IA y correlación global. Proporciona una visión
          ejecutiva del rendimiento, estabilidad, riesgos y oportunidades detectadas por la IA Cognitiva.
        </p>
      </section>

      {/* AUDITORÍA EJECUTIVA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Auditoría Ejecutiva
        </h2>

        {auditoria.length === 0 ? (
          <p className="text-sm text-slate-500">No hay eventos de auditoría registrados.</p>
        ) : (
          <div className="space-y-3">
            {auditoria.map((e) => (
              <div
                key={e.id}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-900">{e.tipo}</p>
                  <p className="text-sm text-slate-500">{e.descripcion}</p>
                </div>
                <span className="text-xs text-slate-500">
                  {new Date(e.creado_en).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* IA GLOBAL EJECUTIVA */}
      <AICorrelationEngine
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={auditoria}
      />

      <AIPrioridad
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={auditoria}
      />

      <AIAnomalias
        title="Anomalías globales detectadas por IA"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={auditoria}
      />

      <AIInsight
        title="Explicación IA Ejecutiva"
        data={[
          riesgos.length,
          senales.length,
          decisiones.length,
          predicciones.length,
          telemetria.length,
          auditoria.length,
        ]}
        type="reporte-operativo"
        timeframe="30d"
      />

      <AIScenarios
        title="Escenarios Ejecutivos IA"
        data={[
          riesgos.length,
          senales.length,
          decisiones.length,
          predicciones.length,
          telemetria.length,
          auditoria.length,
        ]}
        type="reporte-operativo"
      />

    </div>
  );
}

/* MÉTRICA EJECUTIVA */
function Metric({ title, value, icon: Icon, color }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <PremiumIcon icon={Icon} color={color} size={22} />
      <h3 className="mt-4 text-sm font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
