"use client";

import { createContext, useContext, useState } from "react";

type BlayzitContextValue = {
  activeModule: string;
  setActiveModule: (value: string) => void;
};

const BlayzitContext = createContext<BlayzitContextValue | null>(null);

export function BlayzitProvider({ children }: { children: React.ReactNode }) {
  const [activeModule, setActiveModule] = useState("inicio");

  return (
    <BlayzitContext.Provider value={{ activeModule, setActiveModule }}>
      {children}
    </BlayzitContext.Provider>
  );
}

export function useBlayzit() {
  const ctx = useContext(BlayzitContext);
  if (!ctx) {
    throw new Error("useBlayzit must be used within BlayzitProvider");
  }
  return ctx;
}
