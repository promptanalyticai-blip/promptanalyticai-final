//lib/wow-onboarding.ts
export function getWOWOnboarding(wow: any) {
  const tones = {
    executive: {
      icon: "⭐",
      welcome: "Bienvenida Ejecutiva",
      intro: "Tu panel está optimizado para decisiones estratégicas.",
      next: "Revisa señales clave y decisiones corporativas.",
    },
    operational: {
      icon: "⚙️",
      welcome: "Bienvenida Operativa",
      intro: "Tu panel está configurado para eficiencia y gestión.",
      next: "Explora acciones operativas y flujos de trabajo.",
    },
    technical: {
      icon: "📊",
      welcome: "Bienvenida Técnica",
      intro: "Tu panel está listo para análisis y correlaciones.",
      next: "Revisa señales técnicas y decisiones analíticas.",
    },
    light: {
      icon: "💡",
      welcome: "Bienvenida",
      intro: "Tu panel está listo para comenzar.",
      next: "Explora tus señales y acciones sugeridas.",
    },
  };

  const tone = tones[wow.tone];

  const levelMessages = {
    individual: "Tu experiencia será suave, guiada y clara.",
    professional: "Tu experiencia será técnica, precisa y analítica.",
    enterprise: "Tu experiencia será corporativa, profunda y estratégica.",
  };

  return {
    icon: tone.icon,
    welcome: tone.welcome,
    intro: tone.intro,
    next: tone.next,
    levelMessage: levelMessages[wow.level],
    permissions: wow.permissions,
  };
}
