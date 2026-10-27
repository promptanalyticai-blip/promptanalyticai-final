"use client";

export default function PanelAnaliticoV6({ children }) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white overflow-auto">

      {/* Header Analítico */}
      <div className="border-b border-slate-200 bg-white px-8 py-4">
        <h2 className="text-sm font-semibold text-slate-700">
          ANÁLISIS INTELIGENTE
        </h2>
        <p className="text-xs text-slate-500">
          vista analítica sin navegación lateral
        </p>
      </div>

      {/* Contenido */}
      <main className="w-full min-h-screen overflow-auto p-10">
        {children}
      </main>
    </div>
  );
}
