// lib/wow-offline-rules.ts

export function getWOWOfflineMessage(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const base = {
    title: "Sin conexión",
    short: "Estás offline.",
    medium: "Estás offline. Algunos datos pueden no estar disponibles.",
    full: "Estás offline. El sistema está funcionando en modo resiliente utilizando cache y datos locales. Algunas funciones pueden estar limitadas.",
  };

  if (role === "owner") base.title = "⚠️ Modo Offline Ejecutivo";
  if (role === "admin") base.title = "⚙️ Modo Offline Administrativo";
  if (role === "manager") base.title = "📁 Modo Offline de Gestión";
  if (role === "analyst") base.title = "📊 Modo Offline Técnico";
  if (role === "viewer") base.title = "💡 Sin conexión";

  if (level === "individual") return { title: base.title, message: base.short };
  if (level === "professional") return { title: base.title, message: base.medium };
  if (level === "enterprise") return { title: base.title, message: base.full };

  return { title: base.title, message: base.medium };
}
