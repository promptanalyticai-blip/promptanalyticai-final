import DashboardPageHeader from "@/components/DashboardPageHeader";
import DashboardSection from "@/components/DashboardSection";
import DashboardGrid from "@/components/DashboardGrid";
import WOWThreatPanel from "@/components/WOWThreatPanel";
import WOWCriticalBanner from "@/components/WOWCriticalBanner";
import WOWRecoveryBanner from "@/components/WOWRecoveryBanner";

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
