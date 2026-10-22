// app/layout.tsx
import "./globals.css";
import "./styles/blayzit-enterprise.css";   // ⭐ AQUI ⭐
import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./providers/UserProvider";

export const metadata = {
  title: "BLAYZIT V6",
  description: "Inteligencia Operativa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#F7FAFC] antialiased">
        <ThemeProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
