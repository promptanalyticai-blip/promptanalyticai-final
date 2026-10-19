"use client";

// Simulación de señales del motor BLAYZIT Intelligence
export function fetchBlayzitSignals() {
  return {
    dnip: {
      riskLevel: Math.random(), // 0 a 1
      anomalies: Math.random() > 0.6,
      criticalEvents: Math.random() > 0.7,
      systemLoad: 40 + Math.random() * 60, // %
      latency: 30 + Math.random() * 150, // ms
    },
    adip: {
      autoActionsTriggered: Math.random() > 0.5,
      scriptsExecuted: Math.floor(Math.random() * 3),
    },
    timestamp: new Date().toLocaleTimeString(),
  };
}

// Motor de reglas inteligente
export function generateIntelligenceNotifications(signals) {
  const list = [];

  const { dnip, adip } = signals;

  // Riesgo DNIP
  if (dnip.riskLevel > 0.7) {
    list.push({
      icon: null,
      title: "Riesgo elevado detectado por DNIP",
      desc: "El motor DNIP detectó un nivel de riesgo superior al 70%.",
      time: signals.timestamp,
    });
  }

  // Anomalías DNIP
  if (dnip.anomalies) {
    list.push({
      icon: null,
      title: "Anomalía detectada por DNIP",
      desc: "Se detectó un patrón irregular en los datos del sistema.",
      time: signals.timestamp,
    });
  }

  // Eventos críticos DNIP
  if (dnip.criticalEvents) {
    list.push({
      icon: null,
      title: "Evento crítico detectado por DNIP",
      desc: "El sistema registró un evento crítico que requiere atención.",
      time: signals.timestamp,
    });
  }

  // Latencia
  if (dnip.latency > 120) {
    list.push({
      icon: null,
      title: "Latencia elevada",
      desc: "La latencia supera los 120ms, posible impacto en rendimiento.",
      time: signals.timestamp,
    });
  }

  // Carga del sistema
  if (dnip.systemLoad > 80) {
    list.push({
      icon: null,
      title: "Carga del sistema alta",
      desc: "La carga del sistema supera el 80%.",
      time: signals.timestamp,
    });
  }

  // ADIP — acciones automáticas
  if (adip.autoActionsTriggered) {
    list.push({
      icon: null,
      title: "Acción automática ejecutada por ADIP",
      desc: `ADIP ejecutó ${adip.scriptsExecuted} acciones automáticas.`,
      time: signals.timestamp,
    });
  }

  return list;
}
