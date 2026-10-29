"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { CalendarDays, CalendarRange, CalendarCheck, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ReportesV6Page() {
  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-12">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <PremiumIcon icon={CalendarDays} color="indigo" size={26} />
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Reportes V6 · Inteligencia Operativa
          </h1>
          <p className="text-sm text-slate-500">
            Acceso rápido a reportes diarios, semanales, mensuales y ejecutivos.
          </p>
        </div>
      </div>

      {/* GRID DE REPORTES */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <ReportCard
          href="/blayzit/v6/reportes/diario"
          icon={CalendarDays}
          color="indigo"
          title="Reporte Diario V6"
          description="Resumen completo del día con IA Cognitiva."
        />

        <ReportCard
          href="/blayzit/v6/reportes/semanal"
          icon={CalendarRange}
          color="blue"
          title="Reporte Semanal V6"
          description="Análisis de los últimos 7 días, tendencias y correlación."
        />

        <ReportCard
          href="/blayzit/v6/reportes/mensual"
          icon={CalendarCheck}
          color="purple"
          title="Reporte Mensual V6"
          description="Visión de 30 días, estabilidad y salud operativa."
        />

        <ReportCard
          href="/blayzit/v6/reportes/operativo"
          icon={Briefcase}
          color="emerald"
          title="Reporte Operativo V6"
          description="Executive Intelligence Report con visión global."
        />

      </div>
    </div>
  );
}

function ReportCard({ href, icon: Icon, color, title, description }) {
  return (
    <Link href={href} className="block">
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-300 hover:shadow-md transition">
        <PremiumIcon icon={Icon} color={color} size={22} />
        <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>
    </Link>
  );
}
