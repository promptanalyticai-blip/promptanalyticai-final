// components/blayzit/v6/audit/auditEngine.ts

export const auditEngine = {
  logs: [] as any[],

  log(eventType: string, payload: any) {
    const entry = {
      eventType,
      payload,
      timestamp: new Date().toISOString(),
    };

    this.logs.push(entry);

    // Aquí puedes enviar a Supabase, PostgreSQL, API, etc.
    // fetch("/api/audit", { method: "POST", body: JSON.stringify(entry) });

    console.log("AUDIT:", entry);
  },

  getAll() {
    return this.logs;
  },
};
