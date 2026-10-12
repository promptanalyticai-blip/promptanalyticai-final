// lib/wow-action-flow.ts

import { executeWOWAction } from "./wow-action-engine";
import { saveToWOWCache } from "./wow-cache";

export async function processWOWActionFlow(wow: any, decision: any, updateState: Function) {
  const result = await executeWOWAction(wow, decision);

  if (!result.executed) return;

  updateState((prev: any) => {
    const updated = [...(prev.adip?.actions || []), result.payload];
    saveToWOWCache("actions", updated, 30000);

    return {
      ...prev,
      adip: {
        ...prev.adip,
        actions: updated,
      },
    };
  });
}
