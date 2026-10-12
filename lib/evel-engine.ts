// -------------------------------------------------------------
// LevelActivationEngine
// Módulo universal para activar niveles y profundidad progresiva
// -------------------------------------------------------------

export type UserLevel = "individual" | "professional" | "enterprise";

interface LevelInput {
  tenant: any;
  workspace: any;
  users: any[];
  datasets: any[];
  signals: any[];
  actions: any[];
  exports: any[];
  auditLog: any[];
}

interface LevelOutput {
  level: UserLevel;
  reason: string;
  capabilities: {
    dnipDepth: "basic" | "medium" | "advanced";
    adipDepth: "basic" | "medium" | "advanced";
    blayzitMode: "minimal" | "expanded" | "enterprise";
    exportLevel: "simple" | "advanced" | "universal";
    auditLevel: "none" | "basic" | "full";
  };
}

// -------------------------------------------------------------
// 1. DETECTAR NIVEL DEL USUARIO
// -------------------------------------------------------------

export function detectUserLevel(input: LevelInput): LevelOutput {
  const { tenant, workspace, users, datasets, signals, actions, exports, auditLog } = input;

  // --- Nivel Empresa ---
  if (users.length > 1 || workspace?.length > 1 || tenant?.plan === "enterprise") {
    return {
      level: "enterprise",
      reason: "Multiple users, multiple workspaces or enterprise plan detected.",
      capabilities: {
        dnipDepth: "advanced",
        adipDepth: "advanced",
        blayzitMode: "enterprise",
        exportLevel: "universal",
        auditLevel: "full",
      },
    };
  }

  // --- Nivel Profesional ---
  if (
    users.length === 1 &&
    datasets.length > 3 &&
    signals.length > 10 &&
    actions.length > 10
  ) {
    return {
      level: "professional",
      reason: "Single user with advanced dataset and signal usage.",
      capabilities: {
        dnipDepth: "medium",
        adipDepth: "medium",
        blayzitMode: "expanded",
        exportLevel: "advanced",
        auditLevel: "basic",
      },
    };
  }

  // --- Nivel Individual ---
  return {
    level: "individual",
    reason: "Single user with simple usage patterns.",
    capabilities: {
      dnipDepth: "basic",
      adipDepth: "basic",
      blayzitMode: "minimal",
      exportLevel: "simple",
      auditLevel: "none",
    },
  };
}

// -------------------------------------------------------------
// 2. APLICAR NIVEL A LA UI (solo lógica, no UI)
// -------------------------------------------------------------

export function applyLevelToUI(level: UserLevel) {
  return {
    showWorkspace: level !== "individual",
    showEnterprisePanels: level === "enterprise",
    showProfessionalDepth: level === "professional",
    showMinimalUI: level === "individual",
  };
}

// -------------------------------------------------------------
// 3. APLICAR NIVEL A DNIP
// -------------------------------------------------------------

export function applyLevelToDNIP(level: UserLevel) {
  if (level === "individual") {
    return {
      signals: "basic",
      decisions: "basic",
      correlations: false,
      predictions: false,
    };
  }

  if (level === "professional") {
    return {
      signals: "medium",
      decisions: "medium",
      correlations: true,
      predictions: false,
    };
  }

  return {
    signals: "advanced",
    decisions: "advanced",
    correlations: true,
    predictions: true,
  };
}

// -------------------------------------------------------------
// 4. APLICAR NIVEL A ADIP
// -------------------------------------------------------------

export function applyLevelToADIP(level: UserLevel) {
  if (level === "individual") {
    return {
      actions: "simple",
      tracking: "basic",
      departments: false,
    };
  }

  if (level === "professional") {
    return {
      actions: "strategic",
      tracking: "medium",
      departments: false,
    };
  }

  return {
    actions: "operational",
    tracking: "advanced",
    departments: true,
  };
}

// -------------------------------------------------------------
// 5. APLICAR NIVEL A BLAYZIT ADMIN
// -------------------------------------------------------------

export function applyLevelToBlayzit(level: UserLevel) {
  if (level === "individual") {
    return {
      mode: "minimal",
      audit: false,
      roles: false,
      multiTenant: false,
    };
  }

  if (level === "professional") {
    return {
      mode: "expanded",
      audit: true,
      roles: false,
      multiTenant: false,
    };
  }

  return {
    mode: "enterprise",
    audit: true,
    roles: true,
    multiTenant: true,
  };
}
