"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/Client";

const supabase = createClient();

export default function BuscadorV6() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ type: string; text: string }[]>([]);
  const [insight, setInsight] = useState<string | null>(null);
  const [openPanel, setOpenPanel] = useState(false);
  const [loading, setLoading] = useState(false);

  const typeStyles: Record<string, string> = {
    riesgos: "bg-rose-50 border-rose-200",
    senales: "bg-amber-50 border-amber-200",
    decisiones: "bg-indigo-50 border-indigo-200",
    predicciones: "bg-cyan-50 border-cyan-200",
    otros: "bg-slate-50 border-slate-200",
  };

  function detectarIntencion(texto: string) {
    const t = texto.toLowerCase();

    if (t.includes("qué debo revisar") || t.includes("importante") || t.includes("prioridad"))
      return "revision_global";

    if (t.includes("registrar actividad")) return "registrar_actividad";
    if (t.includes("crear evento")) return "crear_evento";
    if (t.includes("acción sugerida")) return "accion_ia";

    if (t.includes("riesgo")) return "riesgos";
    if (t.includes("señal") || t.includes("senal")) return "senales";
    if (t.includes("decisión") || t.includes("decision")) return "decisiones";
    if (t.includes("predicción") || t.includes("prediccion")) return "predicciones";

    return "busqueda_general";
  }

  function generarInsight(
    riesgos: any[],
    senales: any[],
    decisiones: any[],
    predicciones: any[]
  ) {
    const criticos = riesgos.filter(r => r.nivel === "critico").length;
    const anomalias = senales.filter(s => s.criticidad >= 4).length;
    const pendientes = decisiones.filter(d => d.estado === "pendiente").length;
    const altas = predicciones.filter(p => p.probabilidad >= 70).length;

    if (criticos >= 2) return "IA: Riesgos críticos detectados. Revisión urgente recomendada.";
    if (anomalias >= 2) return "IA: Señales relevantes detectadas en DNIP.";
    if (pendientes >= 3) return "IA: Varias decisiones pendientes. Revisión sugerida.";
    if (altas >= 2) return "IA: Predicciones con alta probabilidad detectadas.";

    return "IA: Sistema estable. Sin eventos críticos.";
  }

  async function buscar() {
    if (!query.trim()) return;

    setLoading(true);

    const intencion = detectarIntencion(query);

    // Navegación / acciones directas (siempre permitidas)
    if (intencion === "revision_global") {
      router.push("/blayzit/v6/overview");
      setLoading(false);
      return;
    }

    if (intencion === "registrar_actividad") {
      window.dispatchEvent(new CustomEvent("abrirDrawerActividad"));
      setLoading(false);
      return;
    }

    if (intencion === "crear_evento") {
      window.dispatchEvent(new CustomEvent("abrirDrawerEvento"));
      setLoading(false);
      return;
    }

    if (intencion === "accion_ia") {
      window.dispatchEvent(new CustomEvent("abrirDrawerIA"));
      setLoading(false);
      return;
    }

    // Seguridad: sesión requerida para datos reales
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setResults([
        {
          type: "otros",
          text: "Acceso restringido. Inicia sesión para ver datos reales del sistema.",
        },
      ]);
      setInsight("IA: No hay sesión activa. Modo seguro habilitado.");
      setOpenPanel(true);
      setLoading(false);
      return;
    }

    // Búsqueda real con datos del usuario
    const [r, s, d, p] = await Promise.all([
      supabase.from("adip_riesgos").select("*").eq("user_id", user.id),
      supabase.from("dnip_senales").select("*").eq("user_id", user.id),
      supabase.from("adip_decisiones").select("*").eq("user_id", user.id),
      supabase.from("ia_predicciones").select("*").eq("user_id", user.id),
    ]);

    const riesgos = r.data || [];
    const senales = s.data || [];
    const decisiones = d.data || [];
    const predicciones = p.data || [];

    const resultados: { type: string; text: string }[] = [];

    if (intencion === "riesgos")
      resultados.push(
        ...riesgos.map((x: any) => ({
          type: "riesgos",
          text: x.descripcion || "Riesgo detectado",
        }))
      );

    if (intencion === "senales")
      resultados.push(
        ...senales.map((x: any) => ({
          type: "senales",
          text: x.descripcion || "Señal detectada",
        }))
      );

    if (intencion === "decisiones")
      resultados.push(
        ...decisiones.map((x: any) => ({
          type: "decisiones",
          text: x.descripcion || "Decisión pendiente",
        }))
      );

    if (intencion === "predicciones")
      resultados.push(
        ...predicciones.map((x: any) => ({
          type: "predicciones",
          text: x.descripcion || "Predicción IA",
        }))
      );

    if (intencion === "busqueda_general") {
      resultados.push(
        ...riesgos.map((x: any) => ({
          type: "riesgos",
          text: x.descripcion || "Riesgo detectado",
        })),
        ...senales.map((x: any) => ({
          type: "senales",
          text: x.descripcion || "Señal detectada",
        })),
        ...decisiones.map((x: any) => ({
          type: "decisiones",
          text: x.descripcion || "Decisión pendiente",
        })),
        ...predicciones.map((x: any) => ({
          type: "predicciones",
          text: x.descripcion || "Predicción IA",
        }))
      );
    }

    setResults(resultados);
    setInsight(generarInsight(riesgos, senales, decisiones, predicciones));
    setOpenPanel(true);
    setLoading(false);
  }

  return (
    <div className="relative w-1/2 max-w-md">
      {/* INPUT + LUPA */}
      <div className="flex items-center bg-slate-100 px-3 py-2 rounded-md border border-slate-200">
        <input
          type="text"
          placeholder="buscar riesgos, señales, decisiones, IA..."
          className="bg-transparent text-sm outline-none text-slate-700 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscar()}
        />

        <button
          onClick={buscar}
          className="ml-2 text-slate-600 hover:text-indigo-600 transition disabled:opacity-50"
          disabled={loading}
        >
          <Search size={18} />
        </button>
      </div>

      {/* PANEL DE RESULTADOS */}
      {openPanel && (
        <div className="absolute left-0 top-12 w-full bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-50 space-y-4">
          {insight && (
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-xs text-indigo-700 font-medium">
              {insight}
            </div>
          )}

          <div className="space-y-2">
            {results.slice(0, 6).map((r, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border ${typeStyles[r.type]} flex items-center justify-between`}
              >
                <p className="text-sm text-slate-700 capitalize">
                  {r.type}: {r.text}
                </p>
                <ArrowRight className="h-4 w-4 text-slate-500" />
              </div>
            ))}

            {results.length === 0 && (
              <div className="p-3 rounded-lg border bg-slate-50 border-slate-200 text-xs text-slate-600">
                No se encontraron resultados para esta búsqueda.
              </div>
            )}
          </div>

          <button
            onClick={() => setOpenPanel(false)}
            className="w-full text-center text-slate-600 text-sm hover:text-rose-600 transition"
          >
            cerrar
          </button>
        </div>
      )}
    </div>
  );
}
