// lib/wow-security.ts
// FASE 52 — WOW Security Layer
// Seguridad adaptativa por rol, nivel, sensibilidad, tenant y contexto.

type WOWRole =
  | "owner"
  | "admin"
  | "manager"
  | "analyst"
  | "viewer";

type WOWLevel =
  | "individual"
  | "professional"
  | "enterprise";

type Sensitivity = "low" | "medium" | "high" | "critical";

type WOWContext = {
  role: WOWRole;
  level: WOWLevel;
  tenantType?: string;
};

type SecurityRules = {
  canViewDNIP: boolean;
  canViewADIP: boolean;
  canViewBLAYZIT: boolean;
  canViewSensitiveSignals: boolean;
  canViewSensitiveDecisions: boolean;
  canViewSensitiveActions: boolean;
  canManageUsers: boolean;
  canManageRoles: boolean;
  canExecuteCriticalActions: boolean;
  canExecuteHighActions: boolean;
  canExecuteMediumActions: boolean;
  canExecuteLowActions: boolean;
  maskFields: string[];
};

// -----------------------------
// CORE RULES
// -----------------------------

export function getWOWSecurityRules(wow: any): SecurityRules {
  const role: WOWRole = wow.role || "viewer";
  const level: WOWLevel = wow.level || "individual";
  const tenantType: string = wow.tenantType || "basic";

  const rules: SecurityRules = {
    canViewDNIP: false,
    canViewADIP: false,
    canViewBLAYZIT: false,
    canViewSensitiveSignals: false,
    canViewSensitiveDecisions: false,
    canViewSensitiveActions: false,
    canManageUsers: false,
    canManageRoles: false,
    canExecuteCriticalActions: false,
    canExecuteHighActions: false,
    canExecuteMediumActions: false,
    canExecuteLowActions: false,
    maskFields: [],
  };

  // BASE POR ROL
  if (role === "owner") {
    rules.canViewDNIP = true;
    rules.canViewADIP = true;
    rules.canViewBLAYZIT = true;
    rules.canViewSensitiveSignals = true;
    rules.canViewSensitiveDecisions = true;
    rules.canViewSensitiveActions = true;
    rules.canManageUsers = true;
    rules.canManageRoles = true;
    rules.canExecuteCriticalActions = true;
    rules.canExecuteHighActions = true;
    rules.canExecuteMediumActions = true;
    rules.canExecuteLowActions = true;
  }

  if (role === "admin") {
    rules.canViewDNIP = true;
    rules.canViewADIP = true;
    rules.canViewBLAYZIT = true;
    rules.canViewSensitiveSignals = false;
    rules.canViewSensitiveDecisions = true;
    rules.canViewSensitiveActions = true;
    rules.canManageUsers = true;
    rules.canManageRoles = true;
    rules.canExecuteCriticalActions = false;
    rules.canExecuteHighActions = true;
    rules.canExecuteMediumActions = true;
    rules.canExecuteLowActions = true;
  }

  if (role === "manager") {
    rules.canViewDNIP = true;
    rules.canViewADIP = true;
    rules.canViewBLAYZIT = false;
    rules.canViewSensitiveSignals = false;
    rules.canViewSensitiveDecisions = true;
    rules.canViewSensitiveActions = false;
    rules.canManageUsers = false;
    rules.canManageRoles = false;
    rules.canExecuteCriticalActions = false;
    rules.canExecuteHighActions = false;
    rules.canExecuteMediumActions = true;
    rules.canExecuteLowActions = true;
  }

  if (role === "analyst") {
    rules.canViewDNIP = true;
    rules.canViewADIP = false;
    rules.canViewBLAYZIT = false;
    rules.canViewSensitiveSignals = true;
    rules.canViewSensitiveDecisions = false;
    rules.canViewSensitiveActions = false;
    rules.canManageUsers = false;
    rules.canManageRoles = false;
    rules.canExecuteCriticalActions = false;
    rules.canExecuteHighActions = false;
    rules.canExecuteMediumActions = false;
    rules.canExecuteLowActions = false;
  }

  if (role === "viewer") {
    rules.canViewDNIP = true;
    rules.canViewADIP = false;
    rules.canViewBLAYZIT = false;
    rules.canViewSensitiveSignals = false;
    rules.canViewSensitiveDecisions = false;
    rules.canViewSensitiveActions = false;
    rules.canManageUsers = false;
    rules.canManageRoles = false;
    rules.canExecuteCriticalActions = false;
    rules.canExecuteHighActions = false;
    rules.canExecuteMediumActions = false;
    rules.canExecuteLowActions = false;
  }

  // AJUSTES POR NIVEL
  if (level === "enterprise") {
    // Enterprise tiene más visibilidad, pero no necesariamente más ejecución.
    rules.canViewDNIP = true;
    rules.canViewADIP = true;
    rules.canViewBLAYZIT = true;
    rules.maskFields = []; // menos masking
  }

  if (level === "individual") {
    // Más restricciones, más masking.
    rules.maskFields.push("email", "phone", "idNumber");
  }

  if (level === "professional") {
    rules.maskFields.push("idNumber");
  }

  // AJUSTES POR TIPO DE TENANT
  if (tenantType.includes("finance")) {
    rules.maskFields.push("accountNumber", "cardNumber");
    rules.canViewSensitiveSignals = false; // se restringe más
  }

  if (tenantType.includes("health")) {
    rules.maskFields.push("patientId", "diagnosis");
    rules.canViewSensitiveSignals = false;
    rules.canViewSensitiveDecisions = false;
  }

  if (tenantType.includes("tech")) {
    // Tech suele tener más visibilidad técnica
    rules.canViewSensitiveSignals = true;
  }

  return rules;
}

// -----------------------------
// HELPERS DE ACCESO
// -----------------------------

export function canViewDNIP(wow: any): boolean {
  const rules = getWOWSecurityRules(wow);
  return rules.canViewDNIP;
}

export function canViewADIP(wow: any): boolean {
  const rules = getWOWSecurityRules(wow);
  return rules.canViewADIP;
}

export function canViewBLAYZIT(wow: any): boolean {
  const rules = getWOWSecurityRules(wow);
  return rules.canViewBLAYZIT;
}

export function canViewSensitive(
  wow: any,
  domain: "signals" | "decisions" | "actions"
): boolean {
  const rules = getWOWSecurityRules(wow);

  if (domain === "signals") return rules.canViewSensitiveSignals;
  if (domain === "decisions") return rules.canViewSensitiveDecisions;
  if (domain === "actions") return rules.canViewSensitiveActions;

  return false;
}

export function canExecuteAction(
  wow: any,
  priority: Sensitivity
): boolean {
  const rules = getWOWSecurityRules(wow);

  if (priority === "critical") return rules.canExecuteCriticalActions;
  if (priority === "high") return rules.canExecuteHighActions;
  if (priority === "medium") return rules.canExecuteMediumActions;
  if (priority === "low") return rules.canExecuteLowActions;

  return false;
}

// -----------------------------
// MASKING DE DATOS
// -----------------------------

export function maskWOWData(wow: any, data: any): any {
  const rules = getWOWSecurityRules(wow);

  if (!rules.maskFields || rules.maskFields.length === 0) {
    return data;
  }

  const masked = { ...data };

  for (const field of rules.maskFields) {
    if (field in masked && masked[field] != null) {
      masked[field] = "••••••";
    }
  }

  return masked;
}

// -----------------------------
// FILTRADO DE LISTAS
// -----------------------------

export function filterSensitiveList(
  wow: any,
  items: any[],
  domain: "signals" | "decisions" | "actions"
): any[] {
  const canView = canViewSensitive(wow, domain);

  if (canView) return items;

  // Si no puede ver sensibles, filtramos por flag `sensitive`
  return items.filter((item) => !item.sensitive);
}

// -----------------------------
// APLICACIÓN A DNIP / ADIP / BLAYZIT
// -----------------------------

export function secureDNIP(wow: any, dnip: any): any {
  if (!canViewDNIP(wow)) return null;

  const signals = dnip.signals || [];
  const decisions = dnip.decisions || [];

  return {
    ...dnip,
    signals: filterSensitiveList(wow, signals, "signals"),
    decisions: filterSensitiveList(wow, decisions, "decisions"),
  };
}

export function secureADIP(wow: any, adip: any): any {
  if (!canViewADIP(wow)) return null;

  const actions = adip.actions || [];

  return {
    ...adip,
    actions: filterSensitiveList(wow, actions, "actions"),
  };
}

export function secureBLAYZIT(wow: any, blayzit: any): any {
  if (!canViewBLAYZIT(wow)) return null;

  const users = blayzit.users || [];
  const roles = blayzit.roles || [];

  const maskedUsers = users.map((u: any) => maskWOWData(wow, u));

  return {
    ...blayzit,
    users: maskedUsers,
    roles,
  };
}
