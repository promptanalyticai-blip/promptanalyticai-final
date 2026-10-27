//lib/wow-hybrid.ts
import { getUIWOW } from "./ui-wow";
import { getRoleWOW, UserRole } from "./role-wow";
import { UserLevel } from "./level-engine";

export interface HybridWOW {
  tone: string;
  theme: string;
  accent: string;
  animations: string;
  permissions: any;
  ui: any;
}

export function getHybridWOW(level: UserLevel, role: UserRole): HybridWOW {
  const levelWOW = getUIWOW(level);
  const roleWOW = getRoleWOW(role);

  return {
    tone: mergeTone(levelWOW.tone, roleWOW.tone),
    theme: levelWOW.theme,
    accent: levelWOW.accent,
    animations: levelWOW.animations,
    permissions: roleWOW.permissions,
    ui: {
      header: roleWOW.ui.header,
      dashboardDepth: roleWOW.ui.dashboardDepth,
      insightsDepth: roleWOW.ui.insightsDepth,
      actionsDepth: roleWOW.ui.actionsDepth,
    },
  };
}

function mergeTone(levelTone: string, roleTone: string): string {
  if (roleTone === "executive") return "executive";
  if (roleTone === "operational") return "operational";
  if (roleTone === "technical") return "technical";
  return levelTone;
}
