"use client";

import { useState } from "react";
import ExportModal from "./ExportModal";

export default function ExportUniversal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Exportación Universal</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => setOpen(true)}
          className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition border border-slate-700 text-slate-200"
        >
          Exportar por Dominio
        </button>

        <button
          onClick={() => setOpen(true)}
          className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition border border-slate-700 text-slate-200"
        >
          Exportar por Workspace
        </button>

        <button
          onClick={() => setOpen(true)}
          className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition border border-slate-700 text-slate-200"
        >
          Exportar por Fecha
        </button>

        <button
          onClick={() => setOpen(true)}
          className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition border border-slate-700 text-slate-200"
        >
          Exportar por Señal
        </button>
      </div>

      {open && <ExportModal onClose={() => setOpen(false)} />}
    </div>
  );
}
