"use client";

import { createContext, useContext, useState } from "react";

const WOWContext = createContext(null);

export function WOWStateProvider({ children }) {
  const [offline, setOffline] = useState(false);

  return (
    <WOWContext.Provider value={{ offline, setOffline }}>
      {children}
    </WOWContext.Provider>
  );
}

export function useWOWState() {
  return useContext(WOWContext);
}
