// lib/wow-widget-rules.ts

export function getWOWWidgetRules(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const rules = {
    density: "normal", // compact | normal | spacious
    highlightCritical: false,
    highlightHigh: false,
    highlightMedium: false,
    hideLowPriority: false,
    showActions: false,
    showDecisions: false,
    showSignals: true,
  };

  if (role === "owner") {
    rules.density = "spacious";
    rules.highlightCritical = true;
    rules.highlightHigh = true;
    rules.showActions = true;
    rules.showDecisions = true;
  }

  if (role === "admin") {
    rules.density = "normal";
    rules.highlightHigh = true;
    rules.showActions = true;
  }

  if (role === "manager") {
    rules.density = "normal";
    rules.highlightHigh = true;
    rules.showDecisions = true;
  }

  if (role === "analyst") {
    rules.density = "compact";
    rules.highlightCritical = true;
    rules.showSignals = true;
  }

  if (role === "viewer") {
    rules.density = "spacious";
    rules.hideLowPriority = true;
  }

  if (level === "enterprise") {
    rules.highlightCritical = true;
    rules.highlightHigh = true;
    rules.highlightMedium = true;
  }

  return rules;
}
