"use client";

import DNIPPanel from "@/components/dnip/DNIPPanel";

export default function BlayzitDNIPIngest() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">DNIP — Ingesta Operativa</h1>

      <p className="text-gray-600">
        Este módulo permite la ingesta de señales operativas del sistema BLAYZIT.
      </p>

      <DNIPPanel />
    </div>
  );
}
