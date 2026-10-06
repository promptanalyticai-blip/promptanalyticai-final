//components/ui/theme-provider-wrapper.tsx
"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default ThemeProviderWrapper;
