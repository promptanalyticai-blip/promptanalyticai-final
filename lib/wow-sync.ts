// lib/wow-sync.ts

import { getWOWSyncRules } from "./wow-sync-rules";
import { saveToWOWCache } from "./wow-cache";
import { auditEvent } from "./wow-audit";
import { sendWOWNotification } from "./wow-notifications";

export async function runWOWSync(wow: any, updateState: Function) {
  const rules = getWOWSyncRules(wow);

  const endpoints = [
    { key: "signals", enabled: rules.syncSignals, url: "/api/dnip/signals" },
    { key: "decisions", enabled: rules.syncDecisions, url: "/api/dnip/decisions" },
    { key: "actions", enabled: rules.syncActions, url: "/api/adip/actions" },
    { key: "users", enabled: rules.syncUsers, url: "/api/blayzit/users" },
    { key: "roles", enabled: rules.syncRoles, url: "/api/blayzit/roles" },
  ];

  for (const ep of endpoints) {
    if (!ep.enabled) continue;

    try {
      const res = await fetch(ep.url);
      const data = await res.json();

      saveToWOWCache(ep.key, data[ep.key], 30000);

      updateState((prev: any) => {
        const updated = { ...prev };

        if (ep.key === "signals" || ep.key === "decisions") {
          updated.dnip = { ...prev.dnip, [ep.key]: data[ep.key] };
        }

        if (ep.key === "actions") {
          updated.adip = { ...prev.adip, actions: data.actions };
        }

        if (ep.key === "users" || ep.key === "roles") {
          updated.blayzit = { ...prev.blayzit, [ep.key]: data[ep.key] };
        }

        return updated;
      });

      auditEvent(wow, `SYNC_${ep.key.toUpperCase()}`);

      sendWOWNotification(wow, {
        context: "sync",
        sensitive: false,
        message: `Datos sincronizados: ${ep.key}`,
        short: `Sync: ${ep.key}`,
        medium: `Los datos de ${ep.key} fueron sincronizados.`,
        full: `Los datos de ${ep.key} fueron sincronizados correctamente con el backend.`,
      });

    } catch (err) {
      console.error("WOW Sync Error:", err);
    }
  }
}
