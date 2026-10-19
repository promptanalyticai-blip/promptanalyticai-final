export async function summarize(content: string) {
  try {
    const response = await fetch("/api/blayzit/analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    // Leemos la respuesta como texto primero
    const text = await response.text();

    // Si está vacía → devolvemos un fallback
    if (!text || text.trim() === "") {
      return "No se pudo generar resumen (respuesta vacía).";
    }

    // Intentamos parsear JSON
    const data = JSON.parse(text);

    return data.summary || "Sin resumen disponible.";
  } catch (err) {
    return "Error al generar resumen (JSON inválido).";
  }
}
