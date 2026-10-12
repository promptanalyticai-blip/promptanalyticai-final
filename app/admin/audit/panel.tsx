//app/admin/audit/panel.tsx
"use client";

import { useEffect, useState } from "react";
import { getAuditEvents } from "@/core/audit";

export default function AuditPanel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAuditEvents().then(setEvents);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Auditoría del Sistema</h2>

      <div className="space-y-4">
        {events.map((ev: any) => (
          <div
            key={ev.id}
            className={`p-4 rounded border ${
              ev.type === "action" && ev.event === "failed"
                ? "border-red-600 bg-red-50"
                : ev.type === "wow-mode" && ev.event === "activated"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 bg-gray-50"
            }`}
          >
            <div className="flex justify-between">
              <span className="font-semibold">{ev.event}</span>
              <span className="text-sm text-gray-500">
                {new Date(ev.timestamp).toLocaleString()}
              </span>
            </div>

            <p className="text-sm mt-2">{ev.detail}</p>

            <div className="text-xs text-gray-500 mt-2">
              {ev.tenantId && <>Tenant: {ev.tenantId} — </>}
              {ev.userId && <>Usuario: {ev.userId}</>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
