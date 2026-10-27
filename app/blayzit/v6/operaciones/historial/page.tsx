"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ListChecks, Clock, AlertTriangle } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function HistorialOperacionesPage() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    cargarHistorial();
  }, []);

  async function cargarHistorial() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("historial_operaciones")
      .select("*")
      .eq("user_id", user.id)
      .order("creado_en", { ascending: false })
      .limit(50);

    setHistorial(data || []);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-10">
      <h1 className="text-2xl font-semibold text-slate-800">Historial de operaciones</h1>

      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-800">Últimas ejecuciones</p>
        </div>

        {historial.length === 0 ? (
          <p className="text-sm text-slate-500">No hay operaciones registradas.</p>
        ) : (
          <div className="space-y-3">
            {historial.map((op) => (
              <div key={op.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-slate-800">{op.tipo}</p>
                  <p className="text-xs text-slate-500">{op.detalle}</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {new Date(op.creado_en).toLocaleString()}
                  </span>
                  {op.error && (
                    <span className="text-xs text-rose-600 flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" /> Error: {op.error}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
