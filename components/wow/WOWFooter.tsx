//app/dashboard/components/WOWFooter.tsx
"use client";

export default function WOWFooter({ wow }: any) {
  if (!wow) return null;

  return (
    <footer
      className={`w-full p-4 mt-10 border-t border-white/20 text-sm opacity-70
        ${wow.tone === "executive" ? "text-yellow-300" : ""}
        ${wow.tone === "operational" ? "text-green-300" : ""}
        ${wow.tone === "technical" ? "text-indigo-300" : ""}
        ${wow.tone === "light" ? "text-blue-700" : ""}
      `}
    >
      Decision Intelligence Platform — Adaptado a tu rol y nivel
    </footer>
  );
}
