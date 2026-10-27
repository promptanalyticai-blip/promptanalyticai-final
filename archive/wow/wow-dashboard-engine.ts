// lib/wow-dashboard-engine.ts

import { getWOWDashboardRules } from "./wow-dashboard-rules";

export function adaptWOWDashboard(wow: any, state: any) {
  const rules = getWOWDashboardRules(wow);

  const signals = state.dnip?.signals || [];
  const decisions = state.dnip?.decisions || [];
  const actions = state.adip?.actions || [];

  let widgets = [...(state.widgets || [])];

  // Ocultar widgets de baja prioridad
  if (rules.hideLowPriority) {
    widgets = widgets.filter((w) => w.priority !== "low");
  }

  // Reordenar widgets por prioridad
  if (rules.reorderByPriority) {
    const priorityMap: any = {
      critical: 5,
      high: 4,
      medium: 3,
      low: 2,
      info: 1,
    };

    widgets.sort((a, b) => {
      const pa = priorityMap[a.priority] || 1;
      const pb = priorityMap[b.priority] || 1;
      return pb - pa;
    });
  }

  // Resaltar widgets según señales
  widgets = widgets.map((w) => {
    const relatedSignal = signals.find((s) => s.context === w.context);

    if (!relatedSignal) return w;

    if (relatedSignal.priority === "critical" && rules.highlightCritical) {
      return { ...w, highlight: "critical" };
    }

    if (relatedSignal.priority === "high" && rules.highlightHigh) {
      return { ...w, highlight: "high" };
    }

    return w;
  });

  // Paneles especiales
  const panels: any[] = [];

  if (rules.showSignalsPanel) {
    panels.push({ id: "signals-panel", type: "signals", data: signals });
  }

  if (rules.showDecisionsPanel) {
    panels.push({ id: "decisions-panel", type: "decisions", data: decisions });
  }

  if (rules.showActionsPanel) {
    panels.push({ id: "actions-panel", type: "actions", data: actions });
  }

  return { widgets, panels, density: rules.density };
}
