"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { v6Routes } from "./v6Routes";
import Link from "next/link";

export default function BuscadorV6() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // SUPERADMIN TEMPORAL — permite buscar TODO
  const superadmin = true;

  const results = query.length > 0
    ? v6Routes.filter(r =>
        r.label.toLowerCase().includes(query.toLowerCase()) ||
        r.path.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-full max-w-xl">
      {/* INPUT */}
      <div className="flex items-center gap-3 bg-white border border-slate-300 rounded-xl px-4 py-2 shadow-sm">
        <Search className="h-5 w-5 text-slate-500" />
        <input
          type="text"
          placeholder="Buscar módulo, ruta o sección..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          className="w-full bg-transparent outline-none text-sm text-slate-700"
        />
      </div>

      {/* PANEL DE RESULTADOS */}
      {open && query.length > 0 && (
        <div className="absolute top-12 w-full bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 space-y-2">
          {results.length === 0 && (
            <p className="text-sm text-slate-500">No se encontraron resultados</p>
          )}

          {results.map((r, i) => (
            <Link
              key={i}
              href={r.path}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-slate-700"
              onClick={() => setOpen(false)}
            >
              <span className="font-semibold">{r.label}</span>
              <p className="text-xs text-slate-500">{r.path}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
