//app/dashboard/components/WOWNavbar.tsx
"use client";

export default function WOWNavbar({ wow, user }: any) {
  if (!wow) return null;

  return (
    <header
      className={`w-full p-4 flex justify-between items-center border-b border-white/20
        ${wow.tone === "executive" ? "text-yellow-300" : ""}
        ${wow.tone === "operational" ? "text-green-300" : ""}
        ${wow.tone === "technical" ? "text-indigo-300" : ""}
        ${wow.tone === "light" ? "text-blue-700" : ""}
      `}
    >
      <h1 className="text-2xl font-bold">
        {wow.ui.header}
      </h1>

      <div className="opacity-80">
        <span className="mr-4">Rol: {user.role.toUpperCase()}</span>
        <span>Nivel: {user.level.level.toUpperCase()}</span>
      </div>
    </header>
  );
}
