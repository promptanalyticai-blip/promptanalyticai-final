// lib/wow-metacognition-engine.ts
// FASE 60 — WOW Meta-Cognition Mode
// El sistema analiza su propio comportamiento y ajusta sus umbrales internos.

export function analyzeModeEffectiveness(state: any) {
  const history = state.threats || [];
  const signals = state.dnip?.signals || [];
  const decisions = state.dnip?.decisions || [];
  const actions = state.adip?.actions || [];

  let effectiveness = 100;

  // Penalizaciones por repetición de amenazas
  const recentThreats = history.slice(-10);
  const criticalCount = recentThreats.filter((t: any) => t.level === "critical").length;
  const highCount = recentThreats.filter((t: any) => t.level === "high").length;

  effectiveness -= criticalCount * 10;
  effectiveness -= highCount * 5;

  // Penalizaciones por señales repetitivas
  const recentSignals = signals.slice(-10);
  const repeatedSignals = recentSignals.filter((s: any) => s.priority === "critical").length;
  effectiveness -= repeatedSignals * 8;

  // Penalizaciones por decisiones automáticas excesivas
  const autoDecisions = decisions.filter((d: any) => d.auto).length;
  effectiveness -= autoDecisions * 3;

  // Penalizaciones por acciones automáticas excesivas
  const autoActions = actions.filter((a: any) => a.auto).length;
  effectiveness -= autoActions * 3;

  if (effectiveness < 0) effectiveness = 0;
  if (effectiveness > 100) effectiveness = 100;

  return effectiveness;
}

export function detectMetaCognitionMode(state: any) {
  const effectiveness = analyzeModeEffectiveness(state);

  // Meta-cognition se activa cuando:
  // - El sistema está estable o en auto-healing
  // - La efectividad es menor a 70
  if ((state.stableMode || state.autoHealMode) && effectiveness < 70) {
    return true;
  }

  return false;
}

export function adaptMetaCognitionDashboard(dashboard: any, metaMode: boolean) {
  if (!metaMode) return dashboard;

  const widgets = dashboard.widgets || [];
  const panels = dashboard.panels || [];

  const metaWidgets = widgets.map((w: any) => ({
    ...w,
    highlight: "meta",
    density: "analytic",
  }));

  const metaPanels = panels.map((p: any) => ({
    ...p,
    meta: true,
  }));

  return {
    ...dashboard,
    widgets: metaWidgets,
    panels: metaPanels,
    metaCognitionMode: true,
  };
}
