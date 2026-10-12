//app/admin/system/events.tsx
"use client";

import { useEffect, useState } from "react";
import { getSystemEvents } from "@/core/system/events";

export default function SystemEventsPanel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getSystemEvents().then(setEvents);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Eventos del Sistema</h2>

      <div className="grid grid-cols-3 gap-4">
        {events.map((ev: any) => (
          <div
            key={ev.id}
            className="p-4 border rounded bg-gray-50 space-y-2 shadow-sm"
          >
            <h3 className="font-semibold">{ev.type}</h3>
            <p className="text-sm">{ev.detail}</p>
            <p className="text-xs text-gray-500">
              {new Date(ev.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
