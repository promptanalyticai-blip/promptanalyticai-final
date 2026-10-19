export async function adipClient(signals: any[]) {
  const res = await fetch("/api/blayzit/v6/adip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ signals }),
  });

  if (!res.ok) {
    return {
      engine: "ADIP_V6",
      error: true,
      message: "Error al procesar señales DNIP en ADIP.",
      status: res.status,
    };
  }

  return await res.json();
}
