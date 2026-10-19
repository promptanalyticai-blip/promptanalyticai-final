"use client";

import { ADIPAction } from "@/components/blayzit/adip/ADIPEngine";

export function convertActionsToNotifications(actions: ADIPAction[]) {
  return actions.map((a) => ({
    icon: null,
    title: "Acción ejecutada",
    desc: a.action,
    time: a.timestamp,
    priority: "medium",
  }));
}
