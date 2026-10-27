"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function IntelligenceSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const intelligenceMap = [
    { keywords: ["riesgo", "fraude", "alerta"], label: "Riesgos", href: "/blayzit/v6/riesgos" },
    { keywords: ["decisión", "pendiente", "resolver"], label: "Decisiones", href: "/blayzit/v6/decisiones" },
    { keywords: ["acción", "ejecutar"], label: "Acciones Inteligentes", href: "/blayzit/v6/adip" },
    { keywords: ["insight", "analisis", "ia"], label: "Insights", href: "/blayzit/v6/ia" },
    { keywords: ["seguridad", "protección"], label: "Seguridad", href: "/blayzit/v6/security" },
    { keywords: ["auditoría", "auditoria"], label: "Auditoría", href: "/blayzit/v6/audit" },
    { keywords: ["telemetría", "actividad", "monitoreo"], label: "Telemetría / Monitoreo", href: "/blayzit/v6/telemetry" },
    { keywords: ["inteligencia", "operativa"], label: "Inteligencia Operativa", href: "/blayzit/v6/intelligence" },
    { keywords: ["subir", "upload"], label: "Upload", href: "/blayzit/v6/upload" },
    { keywords: ["analizar", "analisis"], label: "Analizar", href: "/blayzit/v6/analizar" },
    { keywords: ["operaciones"], label: "Centro de Operaciones", href: "/blayzit/v6/operaciones" },
  ];

  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const found = intelligenceMap.filter((item) =>
      item.keywords.some((k) => value.toLowerCase().includes(k))
    );

    setResults(found);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Buscar inteligencia, riesgos, decisiones, insights..."
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      />

      {results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg p-3 z-50">
          {results.map((r, i) => (
            <a
              key={i}
              href={r.href}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700"
            >
              {r.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
