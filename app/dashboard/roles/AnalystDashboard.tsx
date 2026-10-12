"use client";

import { getDashboardLayout } from "@/lib/wow-dashboard-engine";
import { getWOWResponsive } from "@/lib/wow-responsive";

import SignalCard from "../widgets/SignalCard";
import DecisionCard from "../widgets/DecisionCard";

export default function AnalystDashboard({ wow, dnip }: any) {
  const layout = getDashboardLayout(wow);
  const responsive = getWOWResponsive(wow);

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case "signal":
        return dnip.signals?.map((s: any, i: number) => (
          <SignalCard key={i} wow={wow} signal={s} />
        ));
      case "correlation":
        return dnip.correlations?.map((c: any, i: number) => (
          <div key={i} className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-300/30">
            <h3 className="text-lg font-semibold mb-2">Correlación</h3>
            <pre className="text-sm">{JSON.stringify(c, null, 2)}</pre>
          </div>
        ));
      case "decision":
        return dnip.decisions?.map((d: any, i: number) => (
          <DecisionCard key={i} wow={wow} decision={d} />
        ));
      default:
        return null;
    }
  };

  return (
    <div className={responsive.density}>
      <h1 className="text-3xl font-bold text-indigo-300">
        📊 Dashboard Técnico
      </h1>

      {layout.widgets
        .sort((a, b) => a.priority - b.priority)
        .map((widget, i) => (
          <div
            key={i}
            className={`grid gap-6 
              ${responsive.breakpoints.mobile}
              ${responsive.breakpoints.tablet}
              ${responsive.breakpoints.desktop}
            `}
          >
            {renderWidget(widget)}
          </div>
        ))}
    </div>
  );
}
