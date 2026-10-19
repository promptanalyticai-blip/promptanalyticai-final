"use client";

export default function SecurityPanel({ analysis }: { analysis: any }) {
  const { file, signals } = analysis;

  const isLarge = file.size > 5_000_000;
  const hasSuspiciousWords = /error|critical|alert|warning|fail/i.test(
    file.content
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        Seguridad del archivo
      </h2>

      <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1">
        <li>
          Tamaño:{" "}
          <strong>{(file.size / 1024).toFixed(1)} KB</strong>{" "}
          {isLarge && <span className="text-red-500">(archivo grande)</span>}
        </li>

        <li>
          Palabras sospechosas:{" "}
          {hasSuspiciousWords ? (
            <span className="text-red-500 font-semibold">detectadas</span>
          ) : (
            <span className="text-green-600 font-semibold">no detectadas</span>
          )}
        </li>

        <li>
          Anomalías DNIP:{" "}
          {signals.dnip.anomalies ? (
            <span className="text-red-500 font-semibold">sí</span>
          ) : (
            <span className="text-green-600 font-semibold">no</span>
          )}
        </li>
      </ul>
    </div>
  );
}
