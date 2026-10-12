//lib/wow-routing.ts
export function getWOWRoute(wow: any) {
  // Rutas base por rol
  const roleRoutes = {
    owner: "/dashboard",
    admin: "/dashboard",
    manager: "/adip",
    analyst: "/dnip",
    viewer: "/dnip",
  };

  // Rutas base por nivel
  const levelRoutes = {
    individual: "/dnip",
    professional: "/dashboard",
    enterprise: "/dashboard",
  };

  // Permisos
  const canView = {
    dnip: wow.permissions.canViewDNIP,
    adip: wow.permissions.canViewADIP,
    blayzit: wow.permissions.canViewBlayzit,
  };

  // Decisión final
  const roleRoute = roleRoutes[wow.role];
  const levelRoute = levelRoutes[wow.level];

  // Si el rol tiene prioridad (owner/admin)
  if (wow.role === "owner" || wow.role === "admin") {
    return roleRoute;
  }

  // Si el nivel define la experiencia (individual/professional)
  if (wow.level === "individual" || wow.level === "professional") {
    return levelRoute;
  }

  // Si el rol no tiene acceso a la ruta base, buscar fallback
  if (roleRoute === "/adip" && !canView.adip) return "/dnip";
  if (roleRoute === "/blayzit" && !canView.blayzit) return "/dashboard";

  // Fallback general
  return roleRoute || "/dashboard";
}
