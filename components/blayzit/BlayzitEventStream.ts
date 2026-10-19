"use client";

import { Zap, Cpu, AlertTriangle, Activity, Brain } from "lucide-react";

// Suscriptores
const listeners = new Set<(event: any) => void>();

// Suscribirse
export function subscribeToEvents(callback: (event: any) => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

// Emitir evento
function emit(event: any) {
  listeners.forEach((cb) => cb(event));
}

// Generador de eventos en tiempo real (mock)
export function startEventStream() {
  setInterval(() => {
    const now = new Date().toLocaleTimeString();

    const events = [
      {
        icon: Zap,
        title: "Evento crítico detectado",
        desc: "El sistema registró un evento crítico.",
        time: now,
      },
      {
        icon: Cpu,
        title: "Carga del sistema aumentó",
        desc: "La carga del sistema incrementó un 15%.",
        time: now,
      },
      {
        icon: AlertTriangle,
        title: "Riesgo detectado",
        desc: "Se detectó un patrón irregular.",
        time: now,
      },
      {
        icon: Activity,
        title: "Latencia elevada",
        desc: "La latencia superó los 120ms.",
        time: now,
      },
      {
        icon: Brain,
        title: "Insight de IA",
        desc: "La IA detectó un comportamiento repetitivo.",
        time: now,
      },
    ];

    const event = events[Math.floor(Math.random() * events.length)];

    emit(event);
  }, 5000); // cada 5 segundos
}
