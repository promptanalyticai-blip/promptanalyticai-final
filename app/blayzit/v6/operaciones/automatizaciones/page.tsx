"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Clock, Radar, Shield, Brain, Activity, Play } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AutomatizacionesPage() {
  const [estado, setEstado] = useState("");
  const [intervalo, setIntervalo] = useState(15);

  async function guardarAutomatizacion(tipo: string) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("automatizaciones").insert({
      user_id: user.id,
      tipo,
      intervalo_minutos: intervalo,
      activo: true,
    });

    setEstado(`✔ Automatización guardada para ${tipo} cada ${intervalo} minutos`);
    setTimeout(() => setEstado(""), 3000);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-10">
      <h1 className="text-2xl font-semibold text-slate-800">Automatizaciones</h1>

      {estado && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-700 text-sm">
          {estado}
        </div>
      )}

      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-800">Intervalo</p>
        </div>

        <input
          type="number"
          value={intervalo}
          onChange={(e) => setIntervalo(Number(e.target.value))}
          className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AutoCard icon={<Radar className="h-6 w-6 text-cyan-600" />} titulo="DNIP" onClick={() => guardarAutomatizacion("DNIP")} />
        <AutoCard icon={<Shield className="h-6 w-6 text-rose-600" />} titulo="ADIP" onClick={() => guardarAutomatizacion("ADIP")} />
        <AutoCard icon={<Brain className="h-6 w-6 text-purple-600" />} titulo="IA" onClick={() => guardarAutomatizacion("IA")} />
        <AutoCard icon={<Activity className="h-6 w-6 text-emerald-600" />} titulo="Telemetría" onClick={() => guardarAutomatizacion("TELEMETRIA")} />
      </div>
    </div>
  );
}

function AutoCard({ icon, titulo, onClick }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-3">{icon}<h3 className="text-sm font-semibold text-slate-800">{titulo}</h3></div>
      <button onClick={onClick} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm flex items-center gap-2 hover:bg-indigo-700">
        <Play className="h-4 w-4" /> Guardar automatización
      </button>
    </div>
  );
}
