//lib/ui-wow.ts
// -------------------------------------------------------------
// UI WOW Engine — Capa visual adaptativa por nivel
// -------------------------------------------------------------

import { UserLevel } from "./level-engine";

export interface UIWOW {
  theme: string;
  accent: string;
  animations: "none" | "soft" | "medium" | "full";
  panels: {
    header: string;
    dashboard: string;
    insights: string;
    actions: string;
  };
  tone: "emotional" | "technical" | "executive";
}

// -------------------------------------------------------------
// WOW por nivel
// -------------------------------------------------------------

export function getUIWOW(level: UserLevel): UIWOW {
  // -----------------------------
  // Nivel Individual — Emocional
  // -----------------------------
  if (level === "individual") {
    return {
      theme: "gradient-blue-soft",
      accent: "sky",
      animations: "soft",
      tone: "emotional",
      panels: {
        header: "Bienvenida suave",
        dashboard: "Panel minimalista",
        insights: "Insights amigables",
        actions: "Acciones simples",
      },
    };
  }

  // -----------------------------
  // Nivel Profesional — Técnico
  // -----------------------------
  if (level === "professional") {
    return {
      theme: "gradient-blue-gray",
      accent: "indigo",
      animations: "medium",
      tone: "technical",
      panels: {
        header: "Panel técnico",
        dashboard: "Dashboard analítico",
        insights: "Insights avanzados",
        actions: "Acciones estratégicas",
      },
    };
  }

  // -----------------------------
  // Nivel Empresa — Ejecutivo
  // -----------------------------
  return {
    theme: "gradient-dark-blue",
    accent: "gold",
    animations: "full",
    tone: "executive",
    panels: {
      header: "Vista ejecutiva",
      dashboard: "Dashboard enterprise",
      insights: "Insights corporativos",
      actions: "Acciones operativas",
    },
  };
}
