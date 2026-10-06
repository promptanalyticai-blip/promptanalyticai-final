// components/providers/UserProvider.tsx
"use client";

import { createContext, useContext, useState } from "react";

export type UserContextValue = {
  userId: string | null;
  tenant_id: string | null;
  setUserId: (id: string | null) => void;
  setTenantId: (id: string | null) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [tenant_id, setTenantId] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        userId,
        tenant_id,
        setUserId,
        setTenantId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
}
