"use client";

import { useEffect, useState } from "react";
import { Activity, Zap, Cpu, AlertTriangle, Brain } from "lucide-react";
import { subscribeToEvents } from "@/components/blayzit/BlayzitEventStream";

export default function SystemEventsPanel({ open, onClose }) {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToEvents((event) => {
      setEvents((prev) => [event, ...prev].slice(0, 100));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-16 z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Eventos del Sistema
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
          {events.length === 0 && (
            <p className="text-sm text-slate-500 col-span-2 text-center py-4">
              No hay eventos registrados aún.
            </p>
          )}

          {events.map((e, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-2 
                bg-slate-50 
                border border-slate-200 
                rounded-xl 
                p-4
                hover:bg-slate-100
                transition
              "
            >
              {e.icon && <e.icon className="w-5 h-5 text-slate-700" />}
              <span className="text-sm font-semibold text-slate-900">
                {e.title}
              </span>
              <span className="text-sm text-slate-600">{e.desc}</span>
              <span className="text-xs text-slate-500 mt-1">{e.time}</span>
            </div>
          ))}
        </div>

        <div className="text-xs text-slate-500 text-center pt-2">
          BLAYZIT System Events
        </div>
      </div>
    </div>
  );
}
