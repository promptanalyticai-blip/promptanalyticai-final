"use client";

import { getDashboardLayout } from "@/lib/wow-dashboard-engine";
import { getWOWResponsive } from "@/lib/wow-responsive";

import ActionCard from "../widgets/ActionCard";
import UserCard from "../widgets/UserCard";
import RoleCard from "../widgets/RoleCard";
import SignalCard from "../widgets/SignalCard";
import DecisionCard from "../widgets/DecisionCard";

export default function AdminDashboard({ wow, dnip, adip, blayzit }: any) {
  const layout = getDashboardLayout(wow);
  const responsive = getWOWResponsive(wow);

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case "action":
        return adip.actions?.map((a: any, i: number) => (
          <ActionCard key={i} wow={wow} action={a} />
        ));
      case "user":
        return blayzit.users?.map((u: any, i: number) => (
          <UserCard key={i} wow={wow} user={u} />
        ));
      case "role":
        return blayzit.roles?.map((r: any, i: number) => (
          <RoleCard key={i} wow={wow} role={r} />
        ));
      case "signal":
        return dnip.signals?.map((s: any, i: number) => (
          <SignalCard key={i} wow={wow} signal={s} />
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
      <h1 className="text-3xl font-bold text-green-300">
        ⚙️ Dashboard Operativo
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
