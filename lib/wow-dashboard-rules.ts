// lib/wow-dashboard-rules.ts

export function getWOWDashboardRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    density: "normal", // compact | normal | spacious
    highlightCritical: false,
    highlightHigh: false,
    hideLowPriority: false,
    reorderByPriority: false,
    showActionsPanel: false,
    showDecisionsPanel: false,
    showSignalsPanel: true,
  };

  // OWNER → dashboard ejecutivo
  if (role === "owner") {
    rules.density = "spacious";
    rules.highlightCritical = true;
    rules.highlightHigh = true;
    rules.reorderByPriority = true;
    rules.showActionsPanel = true;
    rules.showDecisionsPanel = true;
  }

  // ADMIN → dashboard operativo
  if (role === "admin") {
    rules.density = "normal";
    rules.highlightHigh = true;
    rules.showActionsPanel = true;
  }

  // MANAGER → dashboard de gestión
  if (role === "manager") {
    rules.density = "normal";
    rules.highlightHigh = true;
    rules.showDecisionsPanel = true;
  }

  // ANALYST → dashboard técnico
  if (role === "analyst") {
    rules.density = "compact";
    rules.highlightCritical = true;
    rules.showSignalsPanel = true;
  }

  // VIEWER → dashboard simple
  if (role === "viewer") {
    rules.density = "spacious";
    rules.hideLowPriority = true;
  }

  // ENTERPRISE → dashboard extendido
  if (level === "enterprise") {
    rules.reorderByPriority = true;
    rules.highlightCritical = true;
    rules.highlightHigh = true;
  }

  return rules;
}
