// lib/adip-engine.ts
// -------------------------------------------------------------
// ADIP Engine — Motor de acciones adaptado por nivel
// -------------------------------------------------------------

import { UserLevel } from "./level-engine";

interface ADIPInput {
  level: UserLevel;
  signals: any[];
  decisions: any[];
}

interface ADIPOutput {
  actions: any[];
  meta: {
    depth: "simple" | "strategic" | "operational";
    tracking: "basic" | "medium" | "advanced";
    departments: boolean;
  };
}

// -------------------------------------------------------------
// Función principal: ejecutar ADIP según nivel
// -------------------------------------------------------------

export function runADIP(input: ADIPInput): ADIPOutput {
  const { level, signals, decisions } = input;

  // -----------------------------
  // Nivel Individual — Simple
  // -----------------------------
  if (level === "individual") {
    return {
      actions: generateSimpleActions(signals, decisions),
      meta: {
        depth: "simple",
        tracking: "basic",
        departments: false,
      },
    };
  }

  // -----------------------------
  // Nivel Profesional — Estratégico
  // -----------------------------
  if (level === "professional") {
    return {
      actions: generateStrategicActions(signals, decisions),
      meta: {
        depth: "strategic",
        tracking: "medium",
        departments: false,
      },
    };
  }

  // -----------------------------
  // Nivel Empresa — Operativo
  // -----------------------------
  return {
    actions: generateOperationalActions(signals, decisions),
    meta: {
      depth: "operational",
      tracking: "advanced",
      departments: true,
    },
  };
}

// -------------------------------------------------------------
// Acciones por nivel
// -------------------------------------------------------------

function generateSimpleActions(signals: any[], decisions: any[]) {
  return [
    {
      type: "adjust",
      message: "Ajusta tu estrategia en los días con mejor rendimiento.",
    },
    {
      type: "optimize",
      message: "Optimiza el producto con mayor tendencia positiva.",
    },
  ];
}

function generateStrategicActions(signals: any[], decisions: any[]) {
  return [
    {
      type: "segment",
      message: "Segmenta tus clientes según los patrones detectados.",
    },
    {
      type: "pricing",
      message: "Ajusta precios en las categorías con mejor correlación.",
    },
    {
      type: "campaign",
      message: "Crea una campaña dirigida a los segmentos más fuertes.",
    },
  ];
}

function generateOperationalActions(signals: any[], decisions: any[]) {
  return [
    {
      type: "assign",
      message: "Asigna tareas al departamento correspondiente.",
    },
    {
      type: "coordinate",
      message: "Coordina acciones entre áreas para reducir riesgo.",
    },
    {
      type: "protocol",
      message: "Define un protocolo operativo basado en correlaciones críticas.",
    },
  ];
}
