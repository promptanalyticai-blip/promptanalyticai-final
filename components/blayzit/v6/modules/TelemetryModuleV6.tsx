"use client";

import NotaIA from "@/components/blayzit/v6/ui/NotaIA";

export default function TelemetriaModuleV6() {
  return (
    <div className="w-full">

      {/* Título del módulo */}
      <h1 className="text-xl font-semibold text-slate-800 mb-1">
        Telemetría
      </h1>
      <p className="text-sm text-slate-500 mb-4">
        Monitoreo en tiempo real de actividad del sistema.
      </p>

      {/* ⭐ Nota IA Global */}
      <NotaIA modulo="telemetria" />

      {/* Contenido del módulo */}
      <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        aquí va tu tabla de telemetría (TelemetriaTable).
      </div>

    </div>
  );
}
