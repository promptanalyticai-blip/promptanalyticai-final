"use client";

import BlayzitThemeProvider from "@ui/theme-provider";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlayzitThemeProvider>{children}</BlayzitThemeProvider>;
}
