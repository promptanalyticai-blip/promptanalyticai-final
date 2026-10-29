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
  Plug,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Brain,
} from "lucide-react";

export default function IntegracionesV6() {
  const [integraciones, setIntegraciones] = useState([]);
  const [auditoria, setAuditoria] = useState([]);
  const [telemetria, setTelemetria] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [i, a, t] = await Promise.all([
      supabase.from("integraciones").select("*").eq("user_id", user.id),
      supabase.from("auditoria_eventos").select("*").eq("user_id", user.id),
      supabase.from("telemetry").select("*").eq("user_id", user.id),
    ]);

    setIntegraciones(i.data || []);
    setAuditoria(a.data || []);
    setTelemetria(t.data || []);
  }

  const activas = integraciones.filter(i => i.estado === "activa");
  const fallidas = integraciones.filter(i => i.estado === "fallida");
  const desconectadas = integraciones.filter(i => i.estado === "desconectada");

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <PremiumIcon icon={Plug} color="purple" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Integraciones V6 · Panel Maestro
          </h1>
          <p className="text-sm text-slate-500">
            Estado completo de integraciones · IA Cognitiva · Telemetría avanzada
          </p>
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Metric
          title="Integraciones activas"
          value={activas.length}
          icon={CheckCircle}
          color="emerald"
        />

        <Metric
          title="Integraciones fallidas"
          value={fallidas.length}
          icon={AlertTriangle}
          color="rose"
        />

        <Metric
          title="Desconectadas"
          value={desconectadas.length}
          icon={XCircle}
          color="amber"
        />

        <Metric
          title="Eventos de auditoría"
          value={auditoria.length}
          icon={Brain}
          color="indigo"
        />

      </div>

      {/* LISTA DE INTEGRACIONES */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Integraciones conectadas
        </h2>

        {integraciones.length === 0 ? (
          <p className="text-sm text-slate-500">No hay integraciones registradas.</p>
        ) : (
          <div className="space-y-3">
            {integraciones.map((i) => (
              <div
                key={i.id}
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-900">{i.nombre}</p>
                  <p className="text-sm text-slate-500">{i.descripcion}</p>
                </div>

                <span
                  className={`text-sm font-semibold ${
                    i.estado === "activa"
                      ? "text-emerald-600"
                      : i.estado === "fallida"
                      ? "text-rose-600"
                      : "text-amber-600"
                  }`}
                >
                  {i.estado.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* IA GLOBAL */}
      <AICorrelationEngine
        integraciones={integraciones}
        auditoria={auditoria}
        telemetria={telemetria}
      />

      <AIPrioridad
        integraciones={integraciones}
        auditoria={auditoria}
        telemetria={telemetria}
      />

      <AIAnomalias
        title="Anomalías detectadas en integraciones"
        integraciones={integraciones}
        auditoria={auditoria}
        telemetria={telemetria}
      />

      <AIInsight
        title="Explicación IA"
        data={[
          activas.length,
          fallidas.length,
          desconectadas.length,
          auditoria.length,
          telemetria.length,
        ]}
        type="integraciones"
        timeframe="30d"
      />

      <AIScenarios
        title="Escenarios IA"
        data={[
          activas.length,
          fallidas.length,
          desconectadas.length,
          auditoria.length,
          telemetria.length,
        ]}
        type="integraciones"
      />

    </div>
  );
}

/* MÉTRICA */
function Metric({ title, value, icon: Icon, color }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <PremiumIcon icon={Icon} color={color} size={22} />
      <h3 className="mt-4 text-sm font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
