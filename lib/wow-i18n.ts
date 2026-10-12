// lib/wow-i18n.ts

type Locale = "es" | "en";

type WOWDictionary = {
  [key: string]: {
    es: string;
    en: string;
  };
};

const baseDictionary: WOWDictionary = {
  // GENERALES
  "dashboard.executive.title": {
    es: "Dashboard Ejecutivo",
    en: "Executive Dashboard",
  },
  "dashboard.operational.title": {
    es: "Dashboard Operativo",
    en: "Operational Dashboard",
  },
  "dashboard.manager.title": {
    es: "Dashboard de Gestión",
    en: "Management Dashboard",
  },
  "dashboard.analyst.title": {
    es: "Dashboard Técnico",
    en: "Technical Dashboard",
  },
  "dashboard.viewer.title": {
    es: "Dashboard Básico",
    en: "Basic Dashboard",
  },

  // SECCIONES
  "section.kpis": {
    es: "KPIs Estratégicos",
    en: "Strategic KPIs",
  },
  "section.decisions": {
    es: "Decisiones",
    en: "Decisions",
  },
  "section.actions": {
    es: "Acciones",
    en: "Actions",
  },
  "section.signals": {
    es: "Señales",
    en: "Signals",
  },
  "section.users": {
    es: "Usuarios",
    en: "Users",
  },
  "section.roles": {
    es: "Roles y Permisos",
    en: "Roles & Permissions",
  },
};

const toneVariants: Record<string, Partial<WOWDictionary>> = {
  executive: {
    "section.kpis": {
      es: "KPIs Corporativos",
      en: "Corporate KPIs",
    },
    "section.decisions": {
      es: "Decisiones Estratégicas",
      en: "Strategic Decisions",
    },
  },
  technical: {
    "section.signals": {
      es: "Señales Técnicas",
      en: "Technical Signals",
    },
    "section.decisions": {
      es: "Decisiones Analíticas",
      en: "Analytical Decisions",
    },
  },
};

export function getWOWLocale(wow: any): Locale {
  // por ahora fijo, luego lo conectas a usuario/tenant
  return wow.locale || "es";
}

export function tWOW(wow: any, key: string): string {
  const locale = getWOWLocale(wow);

  const toneDict = toneVariants[wow.tone] || {};
  const toneEntry = toneDict[key];
  if (toneEntry) return toneEntry[locale];

  const baseEntry = baseDictionary[key];
  if (baseEntry) return baseEntry[locale];

  return key;
}
