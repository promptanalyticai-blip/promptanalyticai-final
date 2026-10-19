"use client";

import { useBlayzit } from "@/components/blayzit/BlayzitContext";

export default function NotificacionesPage() {
  const { activeModule } = useBlayzit();

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-900">
        {activeModule === "notificaciones"
          ? "Centro de Notificaciones"
          : "Notificaciones"}
      </h1>

      <p className="text-sm text-slate-700">
        Aquí irá tu Panel de Notificaciones Enterprise.
      </p>
    </section>
  );
}
