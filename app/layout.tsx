import "./globals.css";
import { ThemeProviderWrapper } from "@/components/ui/theme-provider-wrapper";

export const metadata = {
  title: "BLAYZIT",
  description: "Enterprise SaaS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-background text-foreground">
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
