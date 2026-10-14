iimport DashboardGrid from "@/components/core/DashboardGrid";
import DashboardPageHeader from "@/components/core/DashboardPageHeader";
import DashboardSection from "@/components/core/DashboardSection";
import WOWCriticalBanner from "@/components/wow/WOWCriticalBanner";
import WOWRecoveryBanner from "@/components/wow/WOWRecoveryBanner";
import WOWThreatPanel from "@/components/wow/WOWThreatPanel";

export default function WowPage() {
  return (
    <>
      <DashboardPageHeader
        title="WOW Engine"
        subtitle="Estado, amenazas y modos críticos."
      />

      <DashboardSection>
        <DashboardGrid>
          <WOWCriticalBanner />
          <WOWRecoveryBanner />
          <WOWThreatPanel />
        </DashboardGrid>
      </DashboardSection>
    </>
  );
}
