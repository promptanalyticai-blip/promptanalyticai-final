// lib/wow-tenant-rules.ts

export function getWOWTenantRules(type: string) {
  const rules: any = {
    priorityBoost: [],
    hideWidgets: [],
    highlightSignals: [],
    autoDecisions: false,
    autoActions: false,
  };

  if (type.includes("finance")) {
    rules.priorityBoost = ["critical", "high"];
    rules.highlightSignals = ["fraud", "risk"];
    rules.autoDecisions = true;
  }

  if (type.includes("health")) {
    rules.priorityBoost = ["critical"];
    rules.highlightSignals = ["patient", "compliance"];
  }

  if (type.includes("retail")) {
    rules.priorityBoost = ["high", "medium"];
    rules.highlightSignals = ["inventory", "sales"];
  }

  if (type.includes("tech")) {
    rules.priorityBoost = ["critical", "high", "medium"];
    rules.highlightSignals = ["performance", "errors"];
    rules.autoActions = true;
  }

  if (type.includes("enterprise")) {
    rules.autoDecisions = true;
    rules.autoActions = true;
  }

  if (type.includes("advanced")) {
    rules.hideWidgets = ["tutorials", "onboarding"];
  }

  return rules;
}
