"use client";

import { BlayzitIntelligenceBridge } from "./BlayzitIntelligenceBridge";

export default function BlayzitIntelligencePanel() {
  const intel = BlayzitIntelligenceBridge();

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        Blayzit Intelligence V6
      </h2>

      <p className="text-slate-600">Estado: {intel.status}</p>
      <p className="text-slate-600">Versión: {intel.version}</p>
      <p className="text-slate-600">{intel.message}</p>
    </div>
  );
}
