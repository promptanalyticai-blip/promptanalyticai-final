"use client";

import { theme } from "@/lib/theme";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border shadow-sm"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
        borderRadius: theme.radius.md,
        padding: theme.spacing.card,
        boxShadow: theme.shadow.soft,
      }}
    >
      {children}
    </div>
  );
}
