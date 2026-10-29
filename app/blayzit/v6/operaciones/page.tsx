"use client";

import { useState } from "react";

// UI
import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";

// Icons
import {
  Bot,
  SlidersHorizontal,
  Activity,
  Workflow,
  ListChecks,
  Radar,
  Shield,
  Brain,
  Sparkles,
} from "lucide-react";

export default function OperacionesPage() {
  const [section, setSection] = useState("ia");

  const menu = [
    { id: "ia", label: "IA Operaciones", icon: Bot, color: "purple" },
    { id: "auto", label: "Automatizaciones", icon: Activity, color: "emerald" },
    { id: "param", label: "Parámetros", icon: SlidersHorizontal, color: "orange" },
    { id: "hist", label: "Historial", icon: ListChecks, color: "rose" },
    { id: "pipe", label: "Pipelines", icon: Workflow, color: "indigo" },
  ];

  return (
    <div className="flex w-full min-h-screen bg-white">

      {/* PANEL LATERAL */}
      <aside className="w-64 border-r border-slate-200 p-6 space-y-6 bg-white">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Centro de Operaciones
        </h2>

        <nav className="space-y-3">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`
                flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition
                ${
                  section === item.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              <PremiumIcon icon={item.icon} color={item.color} size={18} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-10 space-y-10">
        {section === "ia" && <IAOperaciones />}
        {section === "auto" && <Automatizaciones />}
        {section === "param" && <Parametros />}
        {section === "hist" && <Historial />}
        {section === "pipe" && <Pipelines />}
      </main>
    </div>
  );
}

/* ============================ IA OPERACIONES ============================ */
function IAOperaciones() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-800">IA Operaciones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={Bot}
          color="purple"
          title="Recomendación IA"
          desc="La IA analiza riesgos y señales para decidir qué ejecutar."
        />
        <Card
          icon={Brain}
          color="indigo"
          title="Ejecutar según IA"
          desc="La IA decide qué operación ejecutar automáticamente."
        />
      </div>
    </div>
  );
}

/* ============================ AUTOMATIZACIONES ============================ */
function Automatizaciones() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-800">Automatizaciones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={Activity}
          color="emerald"
          title="DNIP Automático"
          desc="Detecta señales automáticamente cada intervalo."
        />
        <Card
          icon={Shield}
          color="rose"
          title="ADIP Automático"
          desc="Evalúa riesgos automáticamente según reglas."
        />
        <Card
          icon={Brain}
          color="purple"
          title="IA Predictiva Automática"
          desc="Genera predicciones automáticamente."
        />
        <Card
          icon={Radar}
          color="cyan"
          title="Telemetría Automática"
          desc="Registra actividad del sistema automáticamente."
        />
      </div>
    </div>
  );
}

/* ============================ PARÁMETROS ============================ */
function Parametros() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-800">Parámetros de Operación</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={SlidersHorizontal}
          color="orange"
          title="Profundidad DNIP"
          desc="Controla la sensibilidad de detección de señales."
        />
        <Card
          icon={Shield}
          color="rose"
          title="Sensibilidad ADIP"
          desc="Controla el nivel de riesgo detectado."
        />
        <Card
          icon={Brain}
          color="purple"
          title="Modelo IA"
          desc="Selecciona el modelo predictivo a utilizar."
        />
      </div>
    </div>
  );
}

/* ============================ HISTORIAL ============================ */
function Historial() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-800">Historial de Operaciones</h1>

      <Card
        icon={ListChecks}
        color="rose"
        title="Ver historial"
        desc="Consulta las últimas ejecuciones del sistema."
      />
    </div>
  );
}

/* ============================ PIPELINES ============================ */
function Pipelines() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-800">Pipelines Inteligentes</h1>

      <Card
        icon={Workflow}
        color="indigo"
        title="Pipeline DNIP → ADIP → IA → Telemetría"
        desc="Ejecuta un flujo completo de análisis y predicción."
      />
    </div>
  );
}

/* ============================ CARD ============================ */
function Card({ icon, color, title, desc }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-3">
      <PremiumIcon icon={icon} color={color} size={22} />
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}
