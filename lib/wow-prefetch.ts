// lib/wow-prefetch.ts

import { getWOWPrefetchRules } from "./wow-prefetch-rules";
import { saveToWOWCache } from "./wow-cache";

export async function runWOWPrefetch(wow: any, dnip: any, adip: any, blayzit: any) {
  const rules = getWOWPrefetchRules(wow);

  // Prefetch de señales DNIP
  if (rules.prefetchSignals && dnip?.signals) {
    saveToWOWCache("signals", dnip.signals, 30000);
  }

  // Prefetch de decisiones DNIP
  if (rules.prefetchDecisions && dnip?.decisions) {
    saveToWOWCache("decisions", dnip.decisions, 30000);
  }

  // Prefetch de acciones ADIP
  if (rules.prefetchActions && adip?.actions) {
    saveToWOWCache("actions", adip.actions, 30000);
  }

  // Prefetch de usuarios BLAYZIT
  if (rules.prefetchUsers && blayzit?.users) {
    saveToWOWCache("users", blayzit.users, 60000);
  }

  // Prefetch de roles BLAYZIT
  if (rules.prefetchRoles && blayzit?.roles) {
    saveToWOWCache("roles", blayzit.roles, 60000);
  }
}
