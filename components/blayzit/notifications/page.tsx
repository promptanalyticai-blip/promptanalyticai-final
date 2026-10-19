"use client";

import { runBlayzitIntelligence } from "@/components/blayzit/BlayzitIntelligence";
import { convertActionsToNotifications } from "@/components/blayzit/notifications/ADIPNotificationsBridge";

export default function NotificacionesPage() {
  const { actions } = runBlayzitIntelligence();
  const adipNotifications = convertActionsToNotifications(actions);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Notificaciones del Sistema
      </h1>

      <div className="flex flex-col gap-4">
        {adipNotifications.length === 0 && (
          <p className="text-sm text-slate-500">
            No hay notificaciones generadas por ADIP.
          </p>
        )}

        {adipNotifications.map((n, i) => (
          <div
            key={i}
            className="
              bg-white border border-slate-200 rounded-xl p-4 shadow-sm
            "
          >
            <p className="text-sm font-semibold text-slate-900">{n.title}</p>
            <p className="text-sm text-slate-700">{n.desc}</p>
            <p className="text-xs text-slate-500 mt-1">{n.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
