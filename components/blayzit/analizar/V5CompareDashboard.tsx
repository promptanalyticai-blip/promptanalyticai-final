"use client";

import DiffPanel from "./DiffPanel";
import RiskPanel from "./RiskPanel";
import InsightsPanel from "./InsightsPanel";
import SmartActionsPanel from "./SmartActionsPanel";

export default function V5CompareDashboard({
  prev,
  next,
  diff,
}: {
  prev: any;
  next: any;
  diff: any;
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-slate-900">
        Comparación de análisis · BLAYZIT V5.6
      </h2>

      <DiffPanel diff={diff} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Versión anterior
          </h3>
          <RiskPanel analysis={prev} />
          <InsightsPanel analysis={prev} />
          <SmartActionsPanel analysis={prev} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Versión nueva
          </h3>
          <RiskPanel analysis={next} />
          <InsightsPanel analysis={next} />
          <SmartActionsPanel analysis={next} />
        </div>
      </div>
    </div>
  );
}
