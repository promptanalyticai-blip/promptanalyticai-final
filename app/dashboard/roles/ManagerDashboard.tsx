"use client";

import { getDashboardLayout } from "@/lib/wow-dashboard-engine";
import { getWOWResponsive } from "@/lib/wow-responsive";

import ActionCard from "../widgets/ActionCard";
import DecisionCard from "../widgets/DecisionCard";
import SignalCard from "../widgets/SignalCard";

export default function ManagerDashboard({ wow, dnip, adip }: any) {
  const layout = getDashboardLayout(wow);
  const responsive = getWOWResponsive(wow);

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case "action":
        return adip.actions?.map((a: any, i: number) => (
          <ActionCard key={i} wow={wow} action={a} />
        ));
      case "decision":
        return dnip.decisions?.map((d: any, i: number) => (
          <DecisionCard key={i} wow={wow} decision={d} />
        ));
      case "signal":
        return dnip.signals?.map((s: any, i: number) => (
          <SignalCard key={i} wow={wow} signal={s} />
        ));
      default:
        return null;
    }
  };

  return (
    <div className={responsive.density}>
      <h1 className="text-3xl font-bold text-green-300">
        ⚙️ Dashboard de Gestión
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
