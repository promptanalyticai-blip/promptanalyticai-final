// app/dashboard/page.tsx
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashboardContainer from "@/components/dashboard/DashboardContainer";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardContainer />
    </DashboardShell>
  );
}
