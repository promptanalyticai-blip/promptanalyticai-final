// lib/wow-realtime.ts

import { getWOWRealtimeRules } from "./wow-realtime-rules";
import { sortWOWSignals } from "./wow-realtime-priority";
import { saveToWOWCache } from "./wow-cache";

export function processWOWRealtimeSignal(wow: any, signal: any, updateState: Function) {
  const rules = getWOWRealtimeRules(wow);

  const allowed =
    (signal.priority === "critical" && rules.allowCritical) ||
    (signal.priority === "high" && rules.allowHigh) ||
    (signal.priority === "medium" && rules.allowMedium) ||
    (signal.priority === "low" && rules.allowLow);

  if (!allowed) return;

  updateState((prev: any) => {
    const updatedSignals = [...(prev.dnip?.signals || []), signal];
    const sorted = sortWOWSignals(updatedSignals);

    saveToWOWCache("signals", sorted, 30000);

    return {
      ...prev,
      dnip: {
        ...prev.dnip,
        signals: sorted,
      },
    };
  });
}
