"use client";

import { AlertTriangle, Zap, Cpu, Activity, Brain } from "lucide-react";

// IA Predictiva BLAYZIT (mock inteligente)
export function generatePredictiveNotifications() {
  const now = new Date();

  const signals = {
    cpuLoad: Math.random() * 100,
    latency: 40 + Math.random() * 120,
    criticalEvents: Math.random() > 0.7,
    anomalyDetected: Math.random() > 0.6,
    aiInsight: Math.random() > 0.5,
  };

  const notifications = [];

  if (signals.anomalyDetected) {
    notifications.push({
      icon: AlertTriangle,
      tone: "text-amber-600",
      title: "Riesgo predictivo detectado",
      desc: "La IA detectó un patrón irregular que podría escalar.",
      time: now.toLocaleTimeString(),
    });
  }

  if (signals.criticalEvents) {
    notifications.push({
      icon: Zap,
      tone: "text-red-600",
      title: "Posible evento crítico",
      desc: "Se detectaron señales que podrían desencadenar un fallo.",
      time: now.toLocaleTimeString(),
    });
  }

  if (signals.cpuLoad > 70) {
    notifications.push({
      icon: Cpu,
      tone: "text-blue-600",
      title: "Carga del sistema en aumento",
      desc: `La carga podría superar el 80% en los próximos minutos.`,
      time: now.toLocaleTimeString(),
    });
  }

  if (signals.latency > 120) {
    notifications.push({
      icon: Activity,
      tone: "text-green-600",
      title: "Latencia proyectada elevada",
      desc: "La latencia podría afectar el rendimiento del sistema.",
      time: now.toLocaleTimeString(),
    });
  }

  if (signals.aiInsight) {
    notifications.push({
      icon: Brain,
      tone: "text-purple-600",
      title: "Insight predictivo de IA",
      desc: "La IA detectó un patrón repetitivo en el comportamiento del sistema.",
      time: now.toLocaleTimeString(),
    });
  }

  return notifications;
}
