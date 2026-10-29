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

import {
  LayoutDashboard,
  Activity,
  AlertTriangle,
  Brain,
  Radar,
  Sparkles,
  Plug,
  FileSearch,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  Briefcase,
} from "lucide-react";

import Link from "next/link";

export default function DashboardMaestroV6() {
  const [riesgos, setRiesgos] = useState([]);
  const [senales, setSenales] = useState([]);
  const [decisiones, setDecisiones] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [telemetria, setTelemetria] = useState([]);
  const [auditoria, setAuditoria] = useState([]);
  const [integraciones, setIntegraciones] = useState([]);

  useEffect(() => {
    cargarTodo();
  }, []);

  async function cargarTodo() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const [r, s, d, p, t, a, i] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
      supabase.from("telemetry").select("*").eq("user_id", user.id),
      supabase.from("auditoria_eventos").select("*").eq("user_id", user.id),
      supabase.from("integraciones").select("*").eq("user_id", user.id),
    ]);

    setRiesgos(r.data || []);
    setSenales(s.data || []);
    setDecisiones(d.data || []);
    setPredicciones(p.data || []);
    setTelemetria(t.data || []);
    setAuditoria(a.data || []);
    setIntegraciones(i.data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-14">

      <div className="flex items-center gap-4">
        <PremiumIcon icon={LayoutDashboard} color="indigo" size={28} />
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight">
            Dashboard Maestro V6
          </h1>
          <p className="text-sm text-slate-500">
            Inteligencia Operativa · IA Cognitiva · Auditoría · Integraciones · Reportes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <Metric title="Riesgos" value={riesgos.length} icon={AlertTriangle} color="rose" />
        <Metric title="Señales" value={senales.length} icon={Radar} color="cyan" />
        <Metric title="Decisiones" value={decisiones.length} icon={Brain} color="purple" />
        <Metric title="Predicciones IA" value={predicciones.length} icon={Sparkles} color="amber" />
        <Metric title="Telemetría" value={telemetria.length} icon={Activity} color="emerald" />
        <Metric title="Auditoría" value={auditoria.length} icon={FileSearch} color="blue" />
      </div>

      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Accesos rápidos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <QuickLink href="/blayzit/v6/reportes/diario" icon={CalendarDays} color="indigo" title="Reporte Diario" />
          <QuickLink href="/blayzit/v6/reportes/semanal" icon={CalendarRange} color="blue" title="Reporte Semanal" />
          <QuickLink href="/blayzit/v6/reportes/mensual" icon={CalendarCheck} color="purple" title="Reporte Mensual" />
          <QuickLink href="/blayzit/v6/reportes/operativo" icon={Briefcase} color="emerald" title="Reporte Operativo" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
          Integraciones del sistema
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Metric
            title="Integraciones activas"
            value={integraciones.filter(i => i.estado === "activa").length}
            icon={Plug}
            color="emerald"
          />
          <Metric
            title="Integraciones fallidas"
            value={integraciones.filter(i => i.estado === "fallida").length}
            icon={Plug}
            color="rose"
          />
          <Metric
            title="Integraciones desconectadas"
            value={integraciones.filter(i => i.estado === "desconectada").length}
            icon={Plug}
            color="amber"
          />
        </div>
      </section>

      <AICorrelationEngine
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={auditoria}
        integraciones={integraciones}
      />

      <AIPrioridad
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={auditoria}
        integraciones={integraciones}
      />

      <AIAnomalias
        title="Anomalías globales detectadas por IA"
        riesgos={riesgos}
        senales={senales}
        decisiones={decisiones}
        predicciones={predicciones}
        telemetria={telemetria}
        eventos={auditoria}
        integraciones={integraciones}
      />

      <AIInsight
        title="Explicación IA Global"
        data={[
          riesgos.length,
          senales.length,
          decisiones.length,
          predicciones.length,
          telemetria.length,
          auditoria.length,
          integraciones.length,
        ]}
        type="dashboard-maestro"
        timeframe="30d"
      />

      <AIScenarios
        title="Escenarios IA Global"
        data={[
          riesgos.length,
          senales.length,
          decisiones.length,
          predicciones.length,
          telemetria.length,
          auditoria.length,
          integraciones.length,
        ]}
        type="dashboard-maestro"
      />

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

function QuickLink({ href, icon: Icon, color, title }) {
  return (
    <Link href={href} className="block">
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-300 hover:shadow-md transition">
        <PremiumIcon icon={Icon} color={color} size={22} />
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      </div>
    </Link>
  );
}
