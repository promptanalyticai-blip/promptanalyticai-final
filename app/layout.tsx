// app/layout.tsx
import "./globals.css";
import "@/styles/blayzit-enterprise.css";
import { GeistSans } from "geist/font/sans";
import "@/app/animations.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-gray-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
