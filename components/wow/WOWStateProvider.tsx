"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useDashboardTenant } from "@/app/tech/state/context";

import { wowAutohealEngine } from "@/lib/wow-autoheal-engine";
import { wowStabilityEngine } from "@/lib/wow-stability-engine";

const WOWStateContext = createContext(null);

export function WOWStateProvider({ children }) {
  const tenant = useDashboardTenant();
  const [state, setState] = useState({
    stability: "stable",
    autoheal: false,
    threatLevel: "low",
  });

  useEffect(() => {
    if (!tenant) return;

    const stability = wowStabilityEngine(tenant);
    const autoheal = wowAutohealEngine(tenant);

    setState({
      stability,
      autoheal,
      threatLevel: stability === "critical" ? "high" : "low",
    });
  }, [tenant]);

  return (
    <WOWStateContext.Provider value={state}>
      {children}
    </WOWStateContext.Provider>
  );
}

export function useWOWState() {
  return useContext(WOWStateContext);
}
