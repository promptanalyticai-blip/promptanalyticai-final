"use client";

import { useEffect, useState } from "react";
import { Shield, ListChecks } from "lucide-react";
import { subscribeToEvents } from "@/components/blayzit/BlayzitEventStream";

export default function AuditLogPanel({ open, onClose }) {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToEvents((event) => {
      setLogs((prev) => [
        {
          ...event,
          actor: "BLAYZIT Intelligence",
          type: "system_event",
        },
        ...prev,
      ].slice(0, 200));
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
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Auditoría avanzada
          </h2>
        </div>

        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2">
          {logs.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-4">
              No hay eventos auditados aún.
            </p>
          )}

          {logs.map((log, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-1 
                bg-slate-50 
                border border-slate-200 
                rounded-xl 
                p-4
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  {log.title}
                </span>
                <span className="text-xs text-slate-500">{log.time}</span>
              </div>
              <span className="text-sm text-slate-600">{log.desc}</span>
              <span className="text-xs text-slate-500 mt-1">
                Actor: {log.actor} · Tipo: {log.type}
              </span>
            </div>
          ))}
        </div>

        <div className="text-xs text-slate-500 text-center pt-2">
          BLAYZIT Audit Trail
        </div>
      </div>
    </div>
  );
}
