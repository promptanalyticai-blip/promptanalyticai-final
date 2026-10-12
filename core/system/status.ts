//core/system/status.ts
export function getSystemStatus(tenantId: string) {
  // Simulación ligera por tenant
  if (tenantId === "tenant-A") {
    return Promise.resolve({
      state: "stable",
      detail: "Sistema funcionando correctamente"
    });
  }

  if (tenantId === "tenant-B") {
    return Promise.resolve({
      state: "recovering",
      detail: "Recuperación automática en progreso"
    });
  }

  if (tenantId === "tenant-C") {
    return Promise.resolve({
      state: "critical",
      detail: "Eventos críticos detectados"
    });
  }

  // Default
  return Promise.resolve({
    state: "stable",
    detail: "Sin eventos relevantes"
  });
}
