"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  Zap,
  Cpu,
  Brain,
  Activity,
} from "lucide-react";

import { generatePredictiveNotifications } from "@/components/blayzit/NotificationsPredictiveAI";
import {
  classifyPriority,
  PRIORITY_STYLES,
} from "@/components/blayzit/NotificationsPriority";

import {
  fetchBlayzitSignals,
  generateIntelligenceNotifications,
} from "@/components/blayzit/BlayzitIntelligenceBridge";

import {
  subscribeToEvents,
  startEventStream,
} from "@/components/blayzit/BlayzitEventStream";

export default function NotificationsPanel({ open, onClose }) {
  const [realtimeEvents, setRealtimeEvents] = useState([]);

  // Hook 1 — cerrar con ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Hook 2 — iniciar stream realtime UNA sola vez
  useEffect(() => {
    startEventStream();
  }, []);

  // Hook 3 — escuchar eventos realtime
  useEffect(() => {
    const unsubscribe = subscribeToEvents((event) => {
      setRealtimeEvents((prev) => [event, ...prev]);
    });

    return unsubscribe;
  }, []);

  // IA Predictiva
  const predictive = generatePredictiveNotifications();

  // BLAYZIT Intelligence
  const signals = fetchBlayzitSignals();
  const intelligence = generateIntelligenceNotifications(signals);

  // Notificaciones base + IA + BLAYZIT Intelligence + realtime
  const baseNotifications = [
    ...realtimeEvents,
    ...intelligence,
    ...predictive,
    {
      icon: AlertTriangle,
      title: "Riesgo detectado",
      desc: "Se detectó un incremento leve en eventos críticos.",
      time: "Hace 3 min",
    },
    {
      icon: Cpu,
      title: "Carga del sistema estable",
      desc: "La capacidad operativa se mantiene en rango óptimo.",
      time: "Hace 12 min",
    },
    {
      icon: Zap,
      title: "Evento crítico resuelto",
      desc: "El sistema neutralizó un proceso inestable.",
      time: "Hace 20 min",
    },
    {
      icon: Activity,
      title: "Latencia normalizada",
      desc: "La latencia regresó a valores estándar.",
      time: "Hace 25 min",
    },
    {
      icon: Brain,
      title: "Insight de IA",
      desc: "La IA detectó patrones de uso repetitivo.",
      time: "Hace 40 min",
    },
    {
      icon: CheckCircle,
      title: "Sin incidentes",
      desc: "No se registran anomalías adicionales.",
      time: "Hace 1 hora",
    },
  ];

  // Añadir prioridad
  const notifications = baseNotifications.map((n) => ({
    ...n,
    priority: classifyPriority(n),
  }));

  // Ordenar por prioridad
  const sorted = notifications.sort((a, b) => {
    const order = ["critical", "high", "medium", "low"];
    return order.indexOf(a.priority) - order.indexOf(b.priority);
  });

  // Hook 4 — guardar historial
  useEffect(() => {
    if (!open) return;

    const saved = localStorage.getItem("blayzit_notifications_history");
    const history = saved ? JSON.parse(saved) : [];

    const updated = [...sorted, ...history].slice(0, 200);

    localStorage.setItem(
      "blayzit_notifications_history",
      JSON.stringify(updated)
    );
  }, [open, sorted]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/40 
        backdrop-blur-sm 
        flex items-start justify-end 
        pt-20 pr-10
        z-[9999]
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white 
          w-full max-w-sm 
          rounded-2xl 
          shadow-2xl 
          border border-slate-200 
          p-6 
          space-y-6
          animate-[fadeIn_0.2s_ease-out]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Notificaciones del Sistema
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2">
          {sorted.map((n, i) => {
            const style = PRIORITY_STYLES[n.priority];

            return (
              <div
                key={i}
                className={`
                  flex items-start gap-3 
                  ${style.bg}
                  ${style.border}
                  border 
                  rounded-xl 
                  p-4
                  hover:bg-slate-100
                  transition
                `}
              >
                {n.icon && <n.icon className={`w-6 h-6 ${style.tone}`} />}

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">
                    {n.title}
                  </span>
                  <span className="text-sm text-slate-600">{n.desc}</span>
                  <span className="text-xs text-slate-500 mt-1">{n.time}</span>
                  <span className="text-xs font-medium mt-1 text-slate-700">
                    Prioridad: {n.priority.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-xs text-slate-500 text-center pt-2">
          Motor de Notificaciones BLAYZIT — Realtime
        </div>
      </div>
    </div>
  );
}
