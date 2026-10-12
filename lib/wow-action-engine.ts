// lib/wow-action-engine.ts
// Motor de acciones WOW con Audit Shield (FASE 53)

import { getWOWActionRules } from "./wow-action-rules";
import { auditActionEvent } from "./wow-audit-shield";

export async function executeWOWAction(wow: any, decision: any) {
  const rules = getWOWActionRules(wow);
  const priority = decision.priority;

  const allowed =
    (priority === "critical" && rules.allowCritical) ||
    (priority === "high" && rules.allowHigh) ||
    (priority === "medium" && rules.allowMedium) ||
    (priority === "low" && rules.allowLow);

  if (!allowed) {
    await auditActionEvent(wow, {
      priority,
      context: decision.context,
      allowed: false,
      reason: "Action not allowed for this role/level.",
    });

    return {
      executed: false,
      reason: "Action not allowed for this role/level.",
    };
  }

  const auto = rules.autoExecute;

  const actionPayload = {
    decisionId: decision.id,
    priority,
    auto,
    timestamp: Date.now(),
    context: decision.context,
    sensitive: decision.sensitive || false,
  };

  const result = {
    executed: true,
    auto,
    payload: actionPayload,
  };

  await auditActionEvent(wow, actionPayload);

  return result;
}
