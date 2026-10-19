import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    if (!content || content.trim() === "") {
      return NextResponse.json({
        summary: "Contenido vacío, no se puede generar resumen.",
      });
    }

    // Resumen simple (puedes reemplazarlo con IA real)
    const summary = `Resumen automático: ${content.slice(0, 120)}...`;

    return NextResponse.json({
      summary,
    });
  } catch (error) {
    return NextResponse.json({
      summary: "Error procesando contenido.",
    });
  }
}
