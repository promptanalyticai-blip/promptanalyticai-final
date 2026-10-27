"use client";

export default function AIAnomalias({ title, riesgos, senales, decisiones, predicciones }) {
  const anomalías = detectarAnomalias(riesgos, senales, decisiones, predicciones);

  return (
    <div className="mt-6 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
      <h3 className="text-lg font-semibold text-yellow-700 mb-2">
        {title}
      </h3>

      {anomalías.length === 0 && (
        <p className="text-slate-700 text-sm">No se detectaron anomalías hoy.</p>
      )}

      {anomalías.map((a, i) => (
        <div key={i} className="mb-4">
          <p className="text-slate-800 text-sm leading-relaxed">{a.descripcion}</p>
          <p className="text-red-600 font-medium mt-1">{a.alerta}</p>
          <p className="text-emerald-600 font-medium mt-1">{a.recomendacion}</p>
        </div>
      ))}
    </div>
  );
}

/* MOTOR DE ANOMALÍAS */
function detectarAnomalias(riesgos, senales, decisiones, predicciones) {
  const resultados = [];

  // 1) Anomalías en Riesgos
  if (riesgos.length > 2) {
    const variacion = variacionRapida(riesgos.map(r => r.nivel_num || 0));
    if (variacion > 25) {
      resultados.push({
        descripcion: "Se detectó un aumento repentino en riesgos. Esto no coincide con el patrón histórico.",
        alerta: `Alerta: variación de riesgos ${variacion.toFixed(1)}% ↑`,
        recomendacion: "Recomendación: revisar módulos críticos y activar acciones preventivas."
      });
    }
  }

  // 2) Anomalías en Señales DNIP
  if (senales.length > 2) {
    const variacion = variacionRapida(senales.map(s => s.criticidad || 0));
    if (variacion > 30) {
      resultados.push({
        descripcion: "Las señales DNIP muestran un comportamiento anómalo. El aumento no coincide con la tendencia previa.",
        alerta: `Alerta: señales DNIP ${variacion.toFixed(1)}% ↑`,
        recomendacion: "Recomendación: activar pipeline inteligente para estabilizar señales."
      });
    }
  }

  // 3) Anomalías en Decisiones ADIP
  if (decisiones.length > 2) {
    const rechazadas = decisiones.filter(d => d.estado === "rechazada").length;
    const aprobadas = decisiones.filter(d => d.estado === "aprobada").length;

    if (rechazadas > aprobadas * 2) {
      resultados.push({
        descripcion: "Las decisiones rechazadas aumentaron de forma anómala. Esto puede indicar un problema en criterios ADIP.",
        alerta: "Alerta: decisiones rechazadas fuera de rango.",
        recomendacion: "Recomendación: revisar parámetros ADIP y ajustar criterios."
      });
    }
  }

  // 4) Anomalías en Predicciones IA
  if (predicciones.length > 2) {
    const variacion = variacionRapida(predicciones.map(p => p.probabilidad || 0));
    if (variacion > 40) {
      resultados.push({
        descripcion: "La IA detecta un comportamiento anómalo en predicciones. Esto podría anticipar un evento inesperado.",
        alerta: `Alerta: predicciones IA ${variacion.toFixed(1)}% ↑`,
        recomendacion: "Recomendación: preparar acciones ADIP para responder a eventos anticipados."
      });
    }
  }

  return resultados;
}

/* DETECCIÓN DE VARIACIÓN REPENTINA */
function variacionRapida(data) {
  const inicio = data[0];
  const fin = data[data.length - 1];
  return ((fin - inicio) / inicio) * 100;
}
