//lib/session.ts
"use client";

//
// SESIÓN ENTERPRISE — DNIP / ADIP / BLAYZIT
// ÚNICO ARCHIVO DE SESIÓN
//

// Clave única para almacenar la sesión en localStorage
const SESSION_KEY = "dnip_enterprise_session";

// Guardar sesión después del login
export function saveSession(data: any) {
  try {
    const session = {
      user: data.user || null,
      company: data.company || null,
      workspace: data.workspace || null,
      roles: data.roles || [],
      timestamp: Date.now(),
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (err) {
    console.error("Error guardando sesión:", err);
  }
}

// Leer sesión en cualquier parte del frontend
export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error leyendo sesión:", err);
    return null;
  }
}

// Eliminar sesión (logout)
export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (err) {
    console.error("Error eliminando sesión:", err);
  }
}

// Verificar si el usuario está logueado
export function isLoggedIn() {
  const session = getSession();
  return !!session?.user;
}

// Verificar si el usuario tiene empresa
export function hasCompany() {
  const session = getSession();
  return !!session?.company;
}

// Verificar si el usuario tiene workspace
export function hasWorkspace() {
  const session = getSession();
  return !!session?.workspace;
}

// Verificar si el usuario tiene roles
export function hasRoles() {
  const session = getSession();
  return session?.roles && session.roles.length > 0;
}
