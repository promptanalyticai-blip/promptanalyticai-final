"use client";

import { getDashboardLayout } from "@/lib/wow-dashboard-engine";
import { getWOWResponsive } from "@/lib/wow-responsive";

import KPICard from "../widgets/KPICard";
import DecisionCard from "../widgets/DecisionCard";
import ActionCard from "../widgets/ActionCard";
import SignalCard from "../widgets/SignalCard";
import UserCard from "../widgets/UserCard";

export default function OwnerDashboard({ wow, dnip, adip, blayzit }: any) {
  const layout = getDashboardLayout(wow);
  const responsive = getWOWResponsive(wow);

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case "kpi":
        return dnip.kpis?.map((k: any, i: number) => (
          <KPICard key={i} wow={wow} kpi={k} />
        ));
      case "decision":
        return dnip.decisions?.map((d: any, i: number) => (
          <DecisionCard key={i} wow={wow} decision={d} />
        ));
      case "action":
        return adip.actions?.map((a: any, i: number) => (
          <ActionCard key={i} wow={wow} action={a} />
        ));
      case "signal":
        return dnip.signals?.map((s: any, i: number) => (
          <SignalCard key={i} wow={wow} signal={s} />
        ));
      case "user":
        return blayzit.users?.map((u: any, i: number) => (
          <UserCard key={i} wow={wow} user={u} />
        ));
      default:
        return null;
    }
  };

  return (
    <div className={responsive.density}>
      <h1 className="text-3xl font-bold text-yellow-300">
        ⭐ Dashboard Ejecutivo
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
