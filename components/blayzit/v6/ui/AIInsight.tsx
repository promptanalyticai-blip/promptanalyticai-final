"use client";

export default function AIInsight({ title, data, type, timeframe }) {
  const insight = generarInsight(data, type, timeframe);

  return (
    <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
      <p className="leading-relaxed">{insight.explicacion}</p>

      <p className="mt-2 text-indigo-600 font-medium">
        {insight.proyeccion}
      </p>

      <p className="mt-2 text-emerald-600 font-medium">
        {insight.recomendacion}
      </p>
    </div>
  );
}

/* MOTOR DE IA EXPLICATIVA */
function generarInsight(data, type, timeframe) {
  if (!data || data.length === 0) {
    return {
      explicacion: "No hay suficiente información para generar un análisis.",
      proyeccion: "",
      recomendacion: "",
    };
  }

  const tendencia = calcularTendencia(data);
  const impacto = calcularImpacto(data);
  const proyeccion = proyectar(tendencia, timeframe);

  return {
    explicacion: construirExplicacion(type, tendencia, impacto),
    proyeccion: construirProyeccion(type, proyeccion, timeframe),
    recomendacion: construirRecomendacion(type, tendencia),
  };
}

/* TENDENCIA */
function calcularTendencia(data) {
  if (data.length < 2) return 0;
  const inicio = data[0];
  const fin = data[data.length - 1];
  return ((fin - inicio) / inicio) * 100;
}

/* IMPACTO */
function calcularImpacto(data) {
  return Math.max(...data) - Math.min(...data);
}

/* PROYECCIÓN */
function proyectar(tendencia, timeframe) {
  const dias = timeframe === "7d" ? 7 : timeframe === "15d" ? 15 : 30;
  return tendencia * (dias / 7);
}

/* NARRATIVA IA */
function construirExplicacion(type, tendencia, impacto) {
  if (type === "riesgos") {
    return `Los riesgos muestran una variación de ${tendencia.toFixed(
      1
    )}%. El impacto reciente indica cambios relevantes en la estabilidad del sistema.`;
  }

  if (type === "senales") {
    return `Las señales DNIP presentan una tendencia de ${tendencia.toFixed(
      1
    )}%. Esto sugiere actividad operativa creciente.`;
  }

  if (type === "ia") {
    return `Las predicciones IA muestran una variación de ${tendencia.toFixed(
      1
    )}%. Esto indica cambios en la probabilidad de eventos futuros.`;
  }

  return `La actividad total presenta una variación de ${tendencia.toFixed(
    1
  )}%.`;
}

/* PROYECCIÓN IA */
function construirProyeccion(type, proyeccion, timeframe) {
  const dias = timeframe.replace("d", "");

  if (proyeccion > 0) {
    return `Si esta tendencia continúa, en ${dias} días podría aumentar aproximadamente ${proyeccion.toFixed(
      1
    )}%.`;
  }

  return `Si la tendencia se mantiene, en ${dias} días no se esperan cambios significativos.`;
}

/* RECOMENDACIÓN IA */
function construirRecomendacion(type, tendencia) {
  if (type === "riesgos") {
    if (tendencia > 10)
      return "Recomendación: revisar módulos críticos y activar acciones preventivas.";
    return "Los riesgos están estables. No se requieren acciones inmediatas.";
  }

  if (type === "senales") {
    if (tendencia > 15)
      return "Recomendación: activar pipeline inteligente para reducir señales DNIP.";
    return "Las señales DNIP se mantienen dentro de parámetros normales.";
  }

  if (type === "ia") {
    if (tendencia > 20)
      return "Recomendación: revisar predicciones IA y preparar acciones ADIP.";
    return "Las predicciones IA muestran estabilidad.";
  }

  return "La actividad total se mantiene estable.";
}
