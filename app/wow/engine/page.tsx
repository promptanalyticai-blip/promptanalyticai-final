"use client";

import DashboardGrid from "@/components/core/DashboardGrid";
import DashboardPageHeader from "@/components/core/DashboardPageHeader";
import DashboardSection from "@/components/core/DashboardSection";

import WOWCriticalBanner from "@/components/wow/WOWCriticalBanner";
import WOWRecoveryBanner from "@/components/wow/WOWRecoveryBanner";
import WOWThreatPanel from "@/components/wow/WOWThreatPanel";

export default function WowEnginePage() {
  return (
    <div className="space-y-10 p-6">
      <DashboardPageHeader title="WOW Engine — Autonomous Stability AI" />

      <DashboardSection title="Real‑Time Engine Status">
        <DashboardGrid>
          <WOWCriticalBanner />
          <WOWRecoveryBanner />
          <WOWThreatPanel />
        </DashboardGrid>
      </DashboardSection>
    </div>
  );
}
