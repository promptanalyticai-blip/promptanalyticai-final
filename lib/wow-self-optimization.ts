// lib/wow-self-optimization.ts
// FASE 61 — WOW Self-Optimization Mode
// El sistema ajusta sus propios umbrales internos basándose en su historial.

export function computeOptimizationProfile(state: any) {
  const threats = state.threats || [];
  const signals = state.dnip?.signals || [];
  const decisions = state.dnip?.decisions || [];
  const actions = state.adip?.actions || [];

  let profile = {
    threatWeight: 1,
    signalWeight: 1,
    decisionWeight: 1,
    actionWeight: 1,
    autoHealAggressiveness: 1,
    predictiveSensitivity: 1,
    stabilityThreshold: 85,
    recoveryThreshold: 50,
    criticalThreshold: 80,
  };

  // Ajustes basados en historial
  const recentThreats = threats.slice(-20);
  const criticalCount = recentThreats.filter((t: any) => t.level === "critical").length;
  const highCount = recentThreats.filter((t: any) => t.level === "high").length;

  if (criticalCount > 3) {
    profile.threatWeight += 0.5;
    profile.criticalThreshold -= 5;
  }

  if (highCount > 5) {
    profile.predictiveSensitivity += 0.3;
  }

  const recentSignals = signals.slice(-20);
  const criticalSignals = recentSignals.filter((s: any) => s.priority === "critical").length;

  if (criticalSignals > 4) {
    profile.signalWeight += 0.4;
    profile.autoHealAggressiveness += 0.5;
  }

  const autoDecisions = decisions.filter((d: any) => d.auto).length;
  if (autoDecisions > 10) {
    profile.decisionWeight -= 0.2;
  }

  const autoActions = actions.filter((a: any) => a.auto).length;
  if (autoActions > 10) {
    profile.actionWeight -= 0.2;
  }

  return profile;
}

export function detectSelfOptimizationMode(state: any) {
  const meta = state.metaCognitionMode;
  const autoHeal = state.autoHealMode;

  const profile = computeOptimizationProfile(state);

  // Self-Optimization se activa cuando:
  // - Meta-cognition está activa
  // - Auto-healing está activo
  // - El perfil muestra cambios significativos
  const significantChange =
    profile.threatWeight !== 1 ||
    profile.signalWeight !== 1 ||
    profile.decisionWeight !== 1 ||
    profile.actionWeight !== 1 ||
    profile.autoHealAggressiveness !== 1 ||
    profile.predictiveSensitivity !== 1;

  return meta && autoHeal && significantChange;
}

export function applySelfOptimization(state: any) {
  const profile = computeOptimizationProfile(state);

  return {
    ...state,
    optimizationProfile: profile,
  };
}

export function adaptSelfOptimizationDashboard(dashboard: any, selfOptMode: boolean) {
  if (!selfOptMode) return dashboard;

  const widgets = dashboard.widgets || [];
  const panels = dashboard.panels || [];

  const optimizedWidgets = widgets.map((w: any) => ({
    ...w,
    highlight: "optimized",
    density: "adaptive",
  }));

  const optimizedPanels = panels.map((p: any) => ({
    ...p,
    optimized: true,
  }));

  return {
    ...dashboard,
    widgets: optimizedWidgets,
    panels: optimizedPanels,
    selfOptimizationMode: true,
  };
}
