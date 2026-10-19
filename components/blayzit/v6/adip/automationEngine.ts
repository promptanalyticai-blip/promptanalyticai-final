export function automationEngine({ risk, tags }) {
  const actions = [];

  if (risk >= 0.8) {
    actions.push({
      id: crypto.randomUUID(),
      type: "critical",
      message: "Riesgo crítico detectado. Acción inmediata requerida.",
      level: risk,
      timestamp: new Date().toISOString(),
    });
  }

  if (risk >= 0.5 && risk < 0.8) {
    actions.push({
      id: crypto.randomUUID(),
      type: "alert",
      message: "Riesgo alto detectado. Revisar el contenido.",
      level: risk,
      timestamp: new Date().toISOString(),
    });
  }

  if (risk >= 0.3 && risk < 0.5) {
    actions.push({
      id: crypto.randomUUID(),
      type: "review",
      message: "Riesgo medio detectado. Marcar para revisión.",
      level: risk,
      timestamp: new Date().toISOString(),
    });
  }

  if (tags.includes("demo")) {
    actions.push({
      id: crypto.randomUUID(),
      type: "info",
      message: "Contenido marcado como demo.",
      level: 0.2,
      timestamp: new Date().toISOString(),
    });
  }

  return actions;
}
