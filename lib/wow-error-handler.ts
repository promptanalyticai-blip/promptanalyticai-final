// lib/wow-error-handler.ts

import { auditError } from "./wow-audit";
import { sendWOWNotification } from "./wow-notifications";
import { getWOWErrorMessage } from "./wow-error-messages";

export function handleWOWError(wow: any, error: any) {
  // Auditoría (FASE 33)
  auditError(wow, error);

  // Mensaje adaptativo (FASE 40)
  const msg = getWOWErrorMessage(wow, error);

  // Notificación inteligente (FASE 34)
  sendWOWNotification(wow, {
    context: "error",
    sensitive: true,
    message: msg.message,
    short: msg.message,
    medium: msg.message,
    full: msg.message,
  });

  return msg;
}
