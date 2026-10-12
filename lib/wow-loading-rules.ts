// lib/wow-loading-rules.ts

export function getWOWLoadingStyle(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const style = {
    size: "md",
    color: "blue",
    message: "Cargando...",
  };

  // TONO POR ROL
  if (role === "owner") {
    style.size = "xl";
    style.color = "yellow";
    style.message = "Preparando panel ejecutivo…";
  }

  if (role === "admin") {
    style.size = "lg";
    style.color = "purple";
    style.message = "Cargando herramientas administrativas…";
  }

  if (role === "manager") {
    style.size = "lg";
    style.color = "green";
    style.message = "Cargando métricas de gestión…";
  }

  if (role === "analyst") {
    style.size = "md";
    style.color = "cyan";
    style.message = "Cargando datos técnicos…";
  }

  if (role === "viewer") {
    style.size = "sm";
    style.color = "gray";
    style.message = "Cargando vista…";
  }

  // PROFUNDIDAD POR NIVEL
  if (level === "enterprise") {
    style.message += " (modo enterprise)";
  }

  return style;
}
