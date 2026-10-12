//lib/role-wow.ts
// -------------------------------------------------------------
// WOW por Rol — Capa visual y funcional adaptativa por rol
// -------------------------------------------------------------

export type UserRole =
  | "owner"
  | "admin"
  | "manager"
  | "analyst"
  | "viewer";

export interface RoleWOW {
  tone: "executive" | "operational" | "technical" | "light";
  permissions: {
    canViewDNIP: boolean;
    canViewADIP: boolean;
    canViewBlayzit: boolean;
    canManageUsers: boolean;
    canManageRoles: boolean;
    canManageDepartments: boolean;
    canViewAudit: boolean;
  };
  ui: {
    header: string;
    dashboardDepth: "minimal" | "medium" | "full";
    insightsDepth: "basic" | "strategic" | "corporate";
    actionsDepth: "simple" | "advanced" | "operational";
  };
}

// -------------------------------------------------------------
// WOW por rol
// -------------------------------------------------------------

export function getRoleWOW(role: UserRole): RoleWOW {
  switch (role) {
    case "owner":
      return {
        tone: "executive",
        permissions: {
          canViewDNIP: true,
          canViewADIP: true,
          canViewBlayzit: true,
          canManageUsers: true,
          canManageRoles: true,
          canManageDepartments: true,
          canViewAudit: true,
        },
        ui: {
          header: "Vista Ejecutiva",
          dashboardDepth: "full",
          insightsDepth: "corporate",
          actionsDepth: "operational",
        },
      };

    case "admin":
      return {
        tone: "operational",
        permissions: {
          canViewDNIP: true,
          canViewADIP: true,
          canViewBlayzit: true,
          canManageUsers: true,
          canManageRoles: true,
          canManageDepartments: true,
          canViewAudit: false,
        },
        ui: {
          header: "Panel Administrativo",
          dashboardDepth: "medium",
          insightsDepth: "strategic",
          actionsDepth: "advanced",
        },
      };

    case "manager":
      return {
        tone: "operational",
        permissions: {
          canViewDNIP: true,
          canViewADIP: true,
          canViewBlayzit: false,
          canManageUsers: false,
          canManageRoles: false,
          canManageDepartments: true,
          canViewAudit: false,
        },
        ui: {
          header: "Panel de Gestión",
          dashboardDepth: "medium",
          insightsDepth: "strategic",
          actionsDepth: "advanced",
        },
      };

    case "analyst":
      return {
        tone: "technical",
        permissions: {
          canViewDNIP: true,
          canViewADIP: true,
          canViewBlayzit: false,
          canManageUsers: false,
          canManageRoles: false,
          canManageDepartments: false,
          canViewAudit: false,
        },
        ui: {
          header: "Panel Analítico",
          dashboardDepth: "medium",
          insightsDepth: "strategic",
          actionsDepth: "advanced",
        },
      };

    default:
      return {
        tone: "light",
        permissions: {
          canViewDNIP: true,
          canViewADIP: false,
          canViewBlayzit: false,
          canManageUsers: false,
          canManageRoles: false,
          canManageDepartments: false,
          canViewAudit: false,
        },
        ui: {
          header: "Vista Básica",
          dashboardDepth: "minimal",
          insightsDepth: "basic",
          actionsDepth: "simple",
        },
      };
  }
}
