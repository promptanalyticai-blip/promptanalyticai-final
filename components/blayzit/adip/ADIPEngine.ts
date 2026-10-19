"use client";

export function runADIP(decisions: any[]) {
  const actions: any[] = [];

  decisions.forEach((d) => {
    let action = "";

    switch (d.type) {
      case "riesgo":
        action = "Mitigación automática de riesgo";
        break;

      case "patrones":
        action = "Análisis automático de patrones";
        break;

      default:
        action = "Acción automática general";
        break;
    }

    // 🔥 CORRECCIÓN: asegurar que level SIEMPRE sea número válido
    const safeLevel = Number(d.level);
    const finalLevel = isNaN(safeLevel) ? 0 : safeLevel;

    actions.push({
      id: crypto.randomUUID(),
      type: d.type,
      message: action,
      level: finalLevel,
      timestamp: new Date().toLocaleTimeString(),
    });
  });

  return actions;
}
