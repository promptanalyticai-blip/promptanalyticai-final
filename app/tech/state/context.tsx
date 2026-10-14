//app/dashboard/state/context.tsx
"use client";

import { createContext, useContext, useState } from "react";

interface DashboardContextValue {
  tenantId: string;
  setTenantId: (id: string) => void;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [tenantId, setTenantId] = useState<string>("tenant-A");

  return (
    <DashboardContext.Provider value={{ tenantId, setTenantId }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardTenant() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboardTenant must be used within DashboardProvider");
  return ctx;
}
