// lib/wow-skeleton-rules.ts

export function getWOWSkeletonStyle(wow: any) {
  const role = wow.role;
  const level = wow.level;

  const style = {
    radius: "rounded-md",
    bg: "bg-gray-200",
    pulse: "animate-pulse",
    height: "h-6",
  };

  // TONO POR ROL
  if (role === "owner") {
    style.bg = "bg-yellow-200";
    style.radius = "rounded-lg";
  }

  if (role === "admin") {
    style.bg = "bg-purple-200";
  }

  if (role === "manager") {
    style.bg = "bg-green-200";
  }

  if (role === "analyst") {
    style.bg = "bg-cyan-200";
  }

  if (role === "viewer") {
    style.bg = "bg-gray-200";
  }

  // PROFUNDIDAD POR NIVEL
  if (level === "enterprise") {
    style.height = "h-8";
  }

  return style;
}
