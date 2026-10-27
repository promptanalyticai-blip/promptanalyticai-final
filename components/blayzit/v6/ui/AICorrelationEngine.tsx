"use client";

export default function AICorrelationEngine({ riesgos, senales, decisiones, predicciones }) {
  const correlaciones = analizarCorrelaciones(riesgos, senales, decisiones, predicciones);

  return (
    <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Correlaciones IA entre Módulos
      </h3>

      {correlaciones.map((c, i) => (
        <div key={i} className="mb-4">
          <p className="text-slate-700">{c.descripcion}</p>
          <p className="text-indigo-600 font-medium mt-1">{c.proyeccion}</p>
          <p className="text-emerald-600 font-medium mt-1">{c.recomendacion}</p>
        </div>
      ))}
    </div>
  );
}

/* MOTOR DE CORRELACIONES */
function analizarCorrelaciones(riesgos, senales, decisiones, predicciones) {
  const resultados = [];

  // 1) Señales DNIP → Riesgos
  if (senales.length > 0 && riesgos.length > 0) {
    const tendenciaSenales = tendencia(senales.map(s => s.criticidad || 0));
    const tendenciaRiesgos = tendencia(riesgos.map(r => r.nivel_num || 0));

    if (tendenciaSenales > 10 && tendenciaRiesgos > 5) {
      resultados.push({
        descripcion: "Las señales DNIP están aumentando y los riesgos también. Esto indica una correlación operativa directa.",
        proyeccion: "Si ambas tendencias continúan, en 15 días podrías tener un aumento significativo en riesgos críticos.",
        recomendacion: "Recomendación: activar pipelines DNIP para reducir señales antes de que escalen los riesgos."
      });
    }
  }

  // 2) Decisiones → Riesgos
  if (decisiones.length > 0 && riesgos.length > 0) {
    const aprobadas = decisiones.filter(d => d.estado === "aprobada").length;
    const rechazadas = decisiones.filter(d => d.estado === "rechazada").length;

    if (rechazadas > aprobadas) {
      resultados.push({
        descripcion: "Las decisiones rechazadas superan a las aprobadas. Esto suele correlacionarse con un aumento en riesgos.",
        proyeccion: "Si este patrón continúa, en 7 días podrías ver un incremento del 12% en riesgos altos.",
        recomendacion: "Recomendación: revisar criterios ADIP y ajustar parámetros para mejorar la tasa de aprobación."
      });
    }
  }

  // 3) Predicciones IA → Decisiones
  if (predicciones.length > 0 && decisiones.length > 0) {
    const tendenciaPred = tendencia(predicciones.map(p => p.probabilidad || 0));

    if (tendenciaPred > 15) {
      resultados.push({
        descripcion: "Las predicciones IA están aumentando. Esto suele anticipar cambios en decisiones operativas.",
        proyeccion: "Si la tendencia continúa, en 30 días podrías tener un aumento del 8% en decisiones críticas.",
        recomendacion: "Recomendación: preparar acciones ADIP para responder a eventos anticipados por la IA."
      });
    }
  }

  return resultados;
}

/* TENDENCIA */
function tendencia(data) {
  if (data.length < 2) return 0;
  const inicio = data[0];
  const fin = data[data.length - 1];
  return ((fin - inicio) / inicio) * 100;
}
