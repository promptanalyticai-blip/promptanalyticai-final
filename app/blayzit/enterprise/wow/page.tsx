// app/blayzit/enterprise/wow/page.tsx
import WOWThreatPanel from "@/components/wow/WOWThreatPanel";
import WOWCriticalBanner from "@/components/wow/WOWCriticalBanner";
import WOWRecoveryBanner from "@/components/wow/WOWRecoveryBanner";
import WOWStateProvider from "@/components/wow/WOWStateProvider";

export default function BlayzitWOWEngine() {
  return (
    <WOWStateProvider>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">WOW Engine — IA Avanzada</h1>

        <p className="text-gray-600">
          Este módulo analiza el estado del sistema BLAYZIT en tiempo real,
          detecta amenazas, predice fallas y activa mecanismos de auto-recuperación.
        </p>

        <WOWCriticalBanner />
        <WOWRecoveryBanner />
        <WOWThreatPanel />
      </div>
    </WOWStateProvider>
  );
}
