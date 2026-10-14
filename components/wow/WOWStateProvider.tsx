//app/dashboard/state/WOWStateProvider.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useDashboardTenant } from "@/app/tech/stat@/app/tech/stat@/app/tech/state/context";

import { wowAutohealEngine } from "@/lib/wow-autoheal-engine";
import { wowStabilityEngine } from "@/lib/wow-stability-engine";
import { wowPredictiveEngine } from "@/lib/wow-predictive-engine";

const WOWStateContext = createContext<any>(null);

export function WOWStateProvider({ children }: { children: React.ReactNode }) {
  const { tenantId } = useDashboardTenant();
  const [state, setState] = useState<any>({
    autoheal: false,
    stability: false,
    predictive: false,
  });

  useEffect(() => {
    setState({
      autoheal: true,
      stability: true,
      predictive: true,
    });

    wowAutohealEngine.heal(tenantId, { type: "anomaly" });
    wowStabilityEngine.stabilize(tenantId);
    wowPredictiveEngine.predict(tenantId, { type: "predict" });

  }, [tenantId]);

  return (
    <WOWStateContext.Provider value={state}>
      {children}
    </WOWStateContext.Provider>
  );
}

export function useWOWState() {
  return useContext(WOWStateContext);
}
