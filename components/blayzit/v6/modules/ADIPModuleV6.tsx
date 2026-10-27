"use client";

import NotaIA from "@/components/blayzit/v6/ui/NotaIA";

export default function ADIPModuleV6() {
  return (
    <div className="w-full">

      {/* Título del módulo */}
      <h1 className="text-xl font-semibold text-slate-800 mb-1">
        Adip
      </h1>
      <p className="text-sm text-slate-500 mb-4">
        Análisis de Decisiones Inteligentes del Sistema.
      </p>

      {/* ⭐ Nota IA Global */}
      <NotaIA modulo="adip" />

      {/* Contenido del módulo */}
      <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        Aquí va tu tabla o tus métricas ADIP (ADIPTable).
      </div>

    </div>
  );
}
