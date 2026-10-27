"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SlidersHorizontal, Radar, Shield, Brain } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function OperacionesParametrosPage() {
  const [estado, setEstado] = useState("");
  const [profundidadDNIP, setProfundidadDNIP] = useState(3);
  const [sensibilidadADIP, setSensibilidadADIP] = useState(2);
  const [modeloIA, setModeloIA] = useState("baseline");

  async function ejecutarDNIP() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("dnip_senales").insert({
      user_id: user.id,
      tipo: "operativa",
      criticidad: profundidadDNIP,
      descripcion: `Señal generada con profundidad ${profundidadDNIP}`,
      origen: "DNIP",
      estado: "activa",
    });

    setEstado("✔ DNIP ejecutado con parámetros personalizados");
    setTimeout(() => setEstado(""), 3000);
  }

  async function ejecutarADIP() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("adip_riesgos").insert({
      user_id: user.id,
      nivel: sensibilidadADIP,
      descripcion: `Riesgo evaluado con sensibilidad ${sensibilidadADIP}`,
      categoria: "operativo",
      estado: "activo",
    });

    setEstado("✔ ADIP ejecutado con parámetros personalizados");
    setTimeout(() => setEstado(""), 3000);
  }

  async function ejecutarIA() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("ia_predicciones").insert({
      user_id: user.id,
      tipo: `modelo:${modeloIA}`,
      probabilidad: Math.floor(Math.random() * 40) + 60,
      descripcion: `Predicción generada con modelo ${modeloIA}`,
      origen: "IA",
      criticidad: Math.floor(Math.random() * 5) + 1,
      estado: "activa",
    });

    setEstado("✔ IA ejecutada con modelo personalizado");
    setTimeout(() => setEstado(""), 3000);
  }

  return (
    <div className="w-full min-h-screen bg-white px-10 py-12 space-y-10">
      <h1 className="text-2xl font-semibold text-slate-800">Operaciones con parámetros</h1>

      {estado && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-700 text-sm">
          {estado}
        </div>
      )}

      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-slate-700" />
          <p className="text-sm font-semibold text-slate-800">Parámetros DNIP / ADIP / IA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-slate-600 mb-1">Profundidad DNIP</p>
            <input type="number" value={profundidadDNIP} onChange={(e) => setProfundidadDNIP(Number(e.target.value))} className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm" />
          </div>

          <div>
            <p className="text-xs text-slate-600 mb-1">Sensibilidad ADIP</p>
            <input type="number" value={sensibilidadADIP} onChange={(e) => setSensibilidadADIP(Number(e.target.value))} className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm" />
          </div>

          <div>
            <p className="text-xs text-slate-600 mb-1">Modelo IA</p>
            <select value={modeloIA} onChange={(e) => setModeloIA(e.target.value)} className="px-3 py-2 border border-slate-200 rounded-lg text-sm">
              <option value="baseline">baseline</option>
              <option value="riesgos">riesgos</option>
              <option value="tendencias">tendencias</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ParamCard icon={<Radar className="h-6 w-6 text-cyan-600" />} titulo="Ejecutar DNIP" onClick={ejecutarDNIP} />
        <ParamCard icon={<Shield className="h-6 w-6 text-rose-600" />} titulo="Ejecutar ADIP" onClick={ejecutarADIP} />
        <ParamCard icon={<Brain className="h-6 w-6 text-purple-600" />} titulo="Ejecutar IA" onClick={ejecutarIA} />
      </div>
    </div>
  );
}

function ParamCard({ icon, titulo, onClick }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-3">{icon}<h3 className="text-sm font-semibold text-slate-800">{titulo}</h3></div>
      <button onClick={onClick} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Ejecutar</button>
    </div>
  );
}
