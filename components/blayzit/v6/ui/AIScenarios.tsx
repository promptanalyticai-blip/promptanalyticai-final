"use client";

export default function AIScenarios({ title, data, type }) {
  const escenarios = generarEscenarios(data, type);

  return (
    <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-sm text-slate-700">
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>

      {escenarios.map((e, i) => (
        <div key={i} className="mb-3">
          <p className="leading-relaxed">{e.descripcion}</p>
          <p className="text-indigo-600 font-medium mt-1">{e.impacto}</p>
          <p className="text-emerald-600 font-medium mt-1">{e.recomendacion}</p>
        </div>
      ))}
    </div>
  );
}

/* MOTOR DE ESCENARIOS */
function generarEscenarios(data, type) {
  if (!data || data.length < 2) {
    return [
      {
        descripcion: "No hay suficiente información para generar escenarios.",
        impacto: "",
        recomendacion: "",
      },
    ];
  }

  const tendencia = calcularTendencia(data);

  const escenarios = [];

  // Escenario 1: tendencia continúa
  escenarios.push({
    descripcion: `Si la tendencia actual continúa, el módulo de ${type} podría experimentar cambios significativos.`,
    impacto: impactoContinuo(type, tendencia),
    recomendacion: recomendacionContinuo(type, tendencia),
  });

  // Escenario 2: tendencia aumenta
  escenarios.push({
    descripcion: `Si la tendencia aumenta un 20%, el impacto podría ser mayor de lo esperado.`,
    impacto: impactoAumentado(type, tendencia),
    recomendacion: recomendacionAumentado(type, tendencia),
  });

  // Escenario 3: tendencia disminuye
  escenarios.push({
    descripcion: `Si la tendencia disminuye un 20%, podrías ver mejoras en la estabilidad del sistema.`,
    impacto: impactoReducido(type, tendencia),
    recomendacion: recomendacionReducido(type, tendencia),
  });

  return escenarios;
}

/* TENDENCIA */
function calcularTendencia(data) {
  const inicio = data[0];
  const fin = data[data.length - 1];
  return ((fin - inicio) / inicio) * 100;
}

/* IMPACTO Y RECOMENDACIONES POR TIPO */
function impactoContinuo(type, tendencia) {
  if (type === "riesgos")
    return `En 15 días podrías ver un aumento del ${(
      tendencia * 2
    ).toFixed(1)}% en riesgos críticos.`;

  if (type === "decisiones")
    return `En 10 días podrías tener un incremento del ${(
      tendencia * 1.5
    ).toFixed(1)}% en decisiones rechazadas.`;

  if (type === "senales")
    return `En 7 días podrías activar 2–3 pipelines DNIP automáticamente.`;

  return `En 30 días podrías ver un impacto del ${(tendencia * 1.2).toFixed(
    1
  )}%.`;
}

function recomendacionContinuo(type, tendencia) {
  if (type === "riesgos")
    return "Recomendación: activar acciones preventivas en módulos críticos.";

  if (type === "decisiones")
    return "Recomendación: revisar criterios ADIP para mejorar la tasa de aprobación.";

  if (type === "senales")
    return "Recomendación: activar pipeline inteligente para reducir señales DNIP.";

  return "Recomendación: monitorear la tendencia y ajustar parámetros.";
}

function impactoAumentado(type, tendencia) {
  return `El impacto podría aumentar hasta ${(tendencia * 2.5).toFixed(1)}%.`;
}

function recomendacionAumentado(type, tendencia) {
  return "Recomendación: preparar acciones ADIP y revisar módulos sensibles.";
}

function impactoReducido(type, tendencia) {
  return `El impacto podría reducirse hasta ${(tendencia * 0.5).toFixed(1)}%.`;
}

function recomendacionReducido(type, tendencia) {
  return "Recomendación: mantener las acciones actuales para estabilizar la tendencia.";
}
