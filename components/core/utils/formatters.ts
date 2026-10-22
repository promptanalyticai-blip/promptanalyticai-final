export function formatDate(date: string | Date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(num);
}

export function formatStatus(status: string) {
  const map: Record<string, string> = {
    operational: "Operational",
    warning: "Warning",
    critical: "Critical",
    offline: "Offline",
  };

  return map[status] ?? "Unknown";
}
