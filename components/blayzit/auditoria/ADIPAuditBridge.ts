"use client";

import { ADIPAction } from "@/components/blayzit/adip/ADIPEngine";

export function convertActionsToAuditLogs(actions: ADIPAction[]) {
  return actions.map((a) => ({
    id: a.id,
    actor: "ADIP",
    event: a.action,
    time: a.timestamp,
  }));
}
