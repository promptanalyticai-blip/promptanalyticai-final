"use client";

import { notaIAConfig } from "@/lib/blayzit/v6/notaIAConfig";

export default function NotaIA({ modulo }) {
  const config = notaIAConfig[modulo];

  if (!config) return null;

  return (
    <div className={`p-5 border border-${config.color}-200 bg-${config.color}-50 rounded-xl mb-6`}>
      <h3 className={`text-sm font-semibold text-${config.color}-700`}>
        {config.titulo}
      </h3>
      <p className="text-xs text-slate-600 mt-1">
        {config.descripcion}
      </p>
    </div>
  );
}
