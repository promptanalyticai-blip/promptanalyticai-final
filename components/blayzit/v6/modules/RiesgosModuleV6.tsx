"use client";

import NotaIA from "@/components/blayzit/v6/ui/NotaIA";

export default function RiesgosModuleV6() {
  return (
    <div className="w-full">

      {/* Título del módulo */}
      <h1 className="text-xl font-semibold text-slate-800 mb-1">
        Riesgos
      </h1>
      <p className="text-sm text-slate-500 mb-4">
        Análisis de riesgos detectados en el sistema.
      </p>

      {/* ⭐ Nota IA Global */}
      <NotaIA modulo="riesgos" />

      {/* Contenido del módulo */}
      <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        aquí va tu tabla de riesgos (RiesgosTable).
      </div>

    </div>
  );
}
