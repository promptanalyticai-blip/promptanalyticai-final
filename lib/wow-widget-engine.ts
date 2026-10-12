// lib/wow-widget-engine.ts

import { getWOWWidgetRules } from "./wow-widget-rules";

export function adaptWOWWidget(wow: any, widget: any, state: any) {
  const rules = getWOWWidgetRules(wow);

  const signals = state.dnip?.signals || [];
  const decisions = state.dnip?.decisions || [];
  const actions = state.adip?.actions || [];

  let adapted = { ...widget };

  // Ocultar widgets de baja prioridad
  if (rules.hideLowPriority && widget.priority === "low") {
    adapted.hidden = true;
  }

  // Resaltar según señales
  const relatedSignal = signals.find((s) => s.context === widget.context);

  if (relatedSignal) {
    if (relatedSignal.priority === "critical" && rules.highlightCritical) {
      adapted.highlight = "critical";
    }
    if (relatedSignal.priority === "high" && rules.highlightHigh) {
      adapted.highlight = "high";
    }
    if (relatedSignal.priority === "medium" && rules.highlightMedium) {
      adapted.highlight = "medium";
    }
  }

  // Mostrar decisiones relacionadas
  if (rules.showDecisions) {
    adapted.decisions = decisions.filter((d) => d.context === widget.context);
  }

  // Mostrar acciones relacionadas
  if (rules.showActions) {
    adapted.actions = actions.filter((a) => a.context === widget.context);
  }

  // Densidad del widget
  adapted.density = rules.density;

  return adapted;
}
