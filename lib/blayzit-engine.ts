//lib/blayzit-engine.ts
// -------------------------------------------------------------
// Blayzit Engine — Modo de panel administrativo por nivel
// -------------------------------------------------------------

import { UserLevel } from "./level-engine";

interface BlayzitInput {
  level: UserLevel;
}

interface BlayzitOutput {
  mode: "minimal" | "expanded" | "enterprise";
  features: {
    users: boolean;
    roles: boolean;
    departments: boolean;
    audit: "none" | "basic" | "full";
    multiTenant: boolean;
    workspaces: "hidden" | "single" | "multiple";
    exportLevel: "simple" | "advanced" | "universal";
  };
}

// -------------------------------------------------------------
// Función principal: configurar BLAYZIT según nivel
// -------------------------------------------------------------

export function configureBlayzit(input: BlayzitInput): BlayzitOutput {
  const { level } = input;

  // -----------------------------
  // Nivel Individual — Minimal
  // -----------------------------
  if (level === "individual") {
    return {
      mode: "minimal",
      features: {
        users: false,
        roles: false,
        departments: false,
        audit: "none",
        multiTenant: false,
        workspaces: "hidden",
        exportLevel: "simple",
      },
    };
  }

  // -----------------------------
  // Nivel Profesional — Expandido
  // -----------------------------
  if (level === "professional") {
    return {
      mode: "expanded",
      features: {
        users: false,
        roles: false,
        departments: false,
        audit: "basic",
        multiTenant: false,
        workspaces: "single",
        exportLevel: "advanced",
      },
    };
  }

  // -----------------------------
  // Nivel Empresa — Enterprise
  // -----------------------------
  return {
    mode: "enterprise",
    features: {
      users: true,
      roles: true,
      departments: true,
      audit: "full",
      multiTenant: true,
      workspaces: "multiple",
      exportLevel: "universal",
    },
  };
}
