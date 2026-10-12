// lib/wow-error-messages.ts

export function getWOWErrorMessage(wow: any, error: any) {
  const role = wow.role;
  const level = wow.level;

  const base = {
    title: "Error",
    short: "Ocurrió un error.",
    medium: `Se produjo un error: ${error?.message || "desconocido"}`,
    full: `Se produjo un error en el sistema: ${error?.message || "desconocido"}. El incidente ha sido registrado.`,
  };

  // TONO POR ROL
  if (role === "owner") base.title = "⚠️ Alerta Ejecutiva";
  if (role === "admin") base.title = "⚙️ Error Operativo";
  if (role === "manager") base.title = "📁 Error de Gestión";
  if (role === "analyst") base.title = "📊 Error Técnico";
  if (role === "viewer") base.title = "💡 Error";

  // PROFUNDIDAD POR NIVEL
  if (level === "individual") return { title: base.title, message: base.short };
  if (level === "professional") return { title: base.title, message: base.medium };
  if (level === "enterprise") return { title: base.title, message: base.full };

  return { title: base.title, message: base.medium };
}
