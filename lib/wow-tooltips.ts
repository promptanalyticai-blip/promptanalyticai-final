//lib/wow-tooltips.ts
export function getWOWTooltip(wow: any, topic: string) {
  const tones = {
    executive: {
      icon: "⭐",
      color: "text-yellow-300 bg-yellow-900/20 border-yellow-300/30",
      depth: "corporate",
    },
    operational: {
      icon: "⚙️",
      color: "text-green-300 bg-green-900/20 border-green-300/30",
      depth: "strategic",
    },
    technical: {
      icon: "📊",
      color: "text-indigo-300 bg-indigo-900/20 border-indigo-300/30",
      depth: "technical",
    },
    light: {
      icon: "💡",
      color: "text-blue-700 bg-blue-100 border-blue-300",
      depth: "basic",
    },
  };

  const tone = tones[wow.tone];

  return {
    icon: tone.icon,
    color: tone.color,
    text: getTooltipMessage(topic, tone.depth),
  };
}

function getTooltipMessage(topic: string, depth: string) {
  const messages: any = {
    signals: {
      basic: "Las señales son datos que describen tu estado actual.",
      technical: "Las señales son variables que alimentan el motor DNIP.",
      strategic: "Las señales permiten detectar oportunidades operativas.",
      corporate: "Las señales son indicadores clave para decisiones ejecutivas.",
    },
    decisions: {
      basic: "Las decisiones son sugerencias basadas en tus datos.",
      technical: "Las decisiones son inferencias generadas por DNIP.",
      strategic: "Las decisiones guían acciones operativas y de gestión.",
      corporate: "Las decisiones son recomendaciones estratégicas de alto nivel.",
    },
    actions: {
      basic: "Las acciones son tareas sugeridas para mejorar tu flujo.",
      technical: "Las acciones son ejecuciones derivadas del análisis ADIP.",
      strategic: "Las acciones optimizan procesos y operaciones.",
      corporate: "Las acciones son movimientos corporativos de impacto.",
    },
    blayzit: {
      basic: "BLAYZIT administra tu cuenta.",
      technical: "BLAYZIT gestiona roles, permisos y auditoría.",
      strategic: "BLAYZIT controla la estructura organizacional.",
      corporate: "BLAYZIT es el centro administrativo corporativo.",
    },
  };

  return messages[topic]?.[depth] || "Información no disponible.";
}
