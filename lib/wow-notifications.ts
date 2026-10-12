// lib/wow-notifications.ts

import { logWOWEvent } from "./wow-audit";

type WOWNotification = {
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  sensitive?: boolean;
  context?: string;
};

export function buildWOWNotification(wow: any, event: any): WOWNotification {
  const role = wow.role;
  const level = wow.level;

  const base: WOWNotification = {
    title: "Notificación",
    message: "Evento registrado",
    type: "info",
    sensitive: false,
    context: event.context || "system",
  };

  // TONO POR ROL
  if (role === "owner") {
    base.title = "🔔 Alerta Ejecutiva";
  }
  if (role === "admin") {
    base.title = "⚙️ Notificación Operativa";
  }
  if (role === "manager") {
    base.title = "📁 Notificación de Gestión";
  }
  if (role === "analyst") {
    base.title = "📊 Notificación Técnica";
  }
  if (role === "viewer") {
    base.title = "💡 Notificación";
  }

  // PROFUNDIDAD POR NIVEL
  if (level === "individual") {
    base.message = event.short || event.message;
  }
  if (level === "professional") {
    base.message = event.medium || event.message;
  }
  if (level === "enterprise") {
    base.message = event.full || event.message;
  }

  // SENSIBILIDAD
  if (event.sensitive) {
    base.type = "warning";
    base.sensitive = true;
  }

  return base;
}

export async function sendWOWNotification(wow: any, event: any) {
  const notification = buildWOWNotification(wow, event);

  // Registrar en auditoría (FASE 33)
  logWOWEvent(wow, {
    type: "notification",
    context: notification.context,
    description: notification.message,
    sensitive: notification.sensitive,
  });

  // Enviar al backend
  try {
    await fetch("/api/notifications/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notification),
    });
  } catch (err) {
    console.error("WOW Notification Error:", err);
  }

  return notification;
}
