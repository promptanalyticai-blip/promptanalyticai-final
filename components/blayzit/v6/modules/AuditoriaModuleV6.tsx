"use client";

import { useEffect, useState } from "react";

// Supabase correcto
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import NotaIA from "@/components/blayzit/v6/ui/NotaIA";

// IA Cognitiva
import AIInsight from "@/components/blayzit/v6/ui/AIInsight";
import AIScenarios from "@/components/blayzit/v6/ui/AIScenarios";
import AICorrelationEngine from "@/components/blayzit/v6/ui/AICorrelationEngine";
import AIPrioridad from "@/components/blayzit/v6/ui/AIPrioridad";
import AIAnomalias from "@/components/blayzit/v6/ui/AIAnomalias";

// Icons
import { ShieldCheck, FileSearch, Activity } from "lucide-react";

export default function AuditoriaModuleV6() {
  const [eventos, setEventos] = useState([]);
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetria, setTelemetria] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [ev, r, s, d, p, t] = await Promise.all([
      supabase.from("auditoria_eventos").select("*").eq("user_id", user.id),
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
      supabase.from("telemetry").select("*").eq("user_id", user.id),
    ]);

    setEventos(ev.data || []);
    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
    setTelemetria(t.data || []);
  }

  return (
    <div className="space-y-12">

      {/* ⭐ Nota IA Global */}
      <NotaIA modulo="auditoria" />

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={ShieldCheck} color="rose" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Auditoría Omniversal V6
            </h1>
            <p className="text-sm text-slate-500">
              Auditoría completa del sistema · IA Cognitiva · Telemetría avanzada
            </p>
          </div>
        </div>
      </section>

      {/* EVENTOS DEL SISTEMA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Eventos del sistema
        </h2>

        {eventos.length === 0 ? (
          <p className="text-sm text-slate-500">No hay eventos registrados.</p>
        ) : (
          <div className="space-y-3">
            {eventos.map((e) => (
              <div
                key={e.id}
                className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200 flex justify-between"
              >
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-slate-900">
                    {e.tipo}
                  </p>
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

      {/* TELEMETRÍA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Auditoría de telemetría
        </h2>

        {telemetria.length === 0 ? (
          <p className="text-sm text-slate-500">No hay telemetría registrada.</p>
        ) : (
          <div className="space-y-3">
            {telemetria.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-50 shadow-sm border border-slate-200 flex justify-between"
              >
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-slate-900">
                    Actividad: {t.actividad}
                  </p>
                  <p className="text-sm text-slate-500">
                    Latencia: {t.latencia}ms · Estabilidad: {t.estabilidad}%
                  </p>
                </div>

                <span className="text-xs text-slate-500">
                  {new Date(t.creado_en).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* IA GLOBAL */}
      <AICorrelationEngine
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={eventos}
      />

      <AIPrioridad
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={eventos}
      />

      <AIAnomalias
        title="Anomalías globales detectadas por IA"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={eventos}
      />

      <AIInsight
        title="Explicación IA"
        data={[
          riesgos.length,
          senales.length,
          decisiones.length,
          predicciones.length,
          telemetria.length,
          eventos.length,
        ]}
        type="auditoria"
        timeframe="30d"
      />

      <AIScenarios
        title="Escenarios IA"
        data={[
          riesgos.length,
          senales.length,
          decisiones.length,
          predicciones.length,
          telemetria.length,
          eventos.length,
        ]}
        type="auditoria"
      />

    </div>
  );
}
