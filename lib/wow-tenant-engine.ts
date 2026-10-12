// lib/wow-tenant-engine.ts

import { classifyWOWTenant } from "./wow-tenant-classifier";
import { getWOWTenantRules } from "./wow-tenant-rules";

export function adaptWOWTenant(wow: any, state: any) {
  const tenant = state.tenant;
  const type = classifyWOWTenant(tenant);
  const rules = getWOWTenantRules(type);

  const signals = state.dnip?.signals || [];
  const decisions = state.dnip?.decisions || [];
  const actions = state.adip?.actions || [];
  const widgets = state.widgets || [];

  // Prioridad adaptada por tenant
  const boostedSignals = signals.map((s) => {
    if (rules.priorityBoost.includes(s.priority)) {
      return { ...s, boosted: true };
    }
    return s;
  });

  // Ocultar widgets según tenant
  const filteredWidgets = widgets.filter((w) => !rules.hideWidgets.includes(w.id));

  // Auto decisiones según tenant
  const adaptedDecisions = decisions.map((d) => {
    if (rules.autoDecisions) {
      return { ...d, auto: true, approved: true };
    }
    return d;
  });

  // Auto acciones según tenant
  const adaptedActions = actions.map((a) => {
    if (rules.autoActions) {
      return { ...a, auto: true };
    }
    return a;
  });

  return {
    tenantType: type,
    tenantRules: rules,
    signals: boostedSignals,
    decisions: adaptedDecisions,
    actions: adaptedActions,
    widgets: filteredWidgets,
  };
}
