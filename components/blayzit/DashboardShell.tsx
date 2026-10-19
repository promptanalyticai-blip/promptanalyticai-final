"use client";

import EnterpriseTopbar from "@/components/blayzit/EnterpriseTopbar";
import EnterpriseSidebar from "@/components/blayzit/EnterpriseSidebar";
import Breadcrumbs from "@/components/blayzit/Breadcrumbs";
import { BlayzitProvider, useBlayzit } from "@/components/blayzit/BlayzitContext";

function ModuleBanner() {
  const { activeModule } = useBlayzit();

  const messages: Record<string, string> = {
    inicio: "Bienvenida a tu panel principal.",
    notificaciones: "Monitorea eventos y alertas del sistema.",
    telemetria: "Datos en tiempo real del motor BLAYZIT.",
    auditoria: "Registro detallado de acciones y eventos.",
    seguridad: "Estado de riesgo y seguridad del sistema.",
  };

  return (
    <div className="mb-4 text-sm text-slate-600">
      {messages[activeModule] ?? ""}
    </div>
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <BlayzitProvider>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <EnterpriseTopbar />

        <div className="flex flex-1">
          <EnterpriseSidebar />

          <main className="flex-1 p-8">
            <Breadcrumbs />
            <ModuleBanner />
            {children}
          </main>
        </div>
      </div>
    </BlayzitProvider>
  );
}
