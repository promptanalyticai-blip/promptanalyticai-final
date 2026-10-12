"use client";

import { getWOWResponsive } from "@/lib/wow-responsive";
import SignalCard from "../widgets/SignalCard";

export default function ViewerDashboard({ wow, dnip }: any) {
  const responsive = getWOWResponsive(wow);

  return (
    <div className={responsive.density}>
      <h1 className="text-3xl font-bold text-blue-700">
        💡 Dashboard Básico
      </h1>

      <div
        className={`grid gap-6 
          ${responsive.breakpoints.mobile}
          ${responsive.breakpoints.tablet}
          ${responsive.breakpoints.desktop}
        `}
      >
        {dnip.signals?.map((s: any, i: number) => (
          <SignalCard key={i} wow={wow} signal={s} />
        ))}
      </div>
    </div>
  );
}
