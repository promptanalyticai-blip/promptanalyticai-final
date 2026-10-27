"use client";

import PremiumIcon from "@/components/blayzit/v6/ui/PremiumIcon";
import { Upload, FileSearch, Gauge, Sparkles } from "lucide-react";
import { useState } from "react";

export default function UploadV6() {
  const [fileName, setFileName] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  }

  return (
    <div className="space-y-12">

      {/* HEADER DEL MÓDULO */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <PremiumIcon icon={Upload} color="blue" size={26} />
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Upload V6 · Carga de Archivos
            </h1>
            <p className="text-sm text-slate-500">
              Sube archivos para análisis inteligente con DNIP, ADIP e IA.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREA DE SUBIDA */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Subir archivo
        </h2>

        <label
          className="
            flex flex-col items-center justify-center gap-4 p-10 rounded-2xl border-2 border-dashed 
            border-blue-300 bg-white shadow-sm hover:border-blue-500 transition cursor-pointer
          "
        >
          <PremiumIcon icon={Upload} color="blue" size={26} />

          <span className="text-sm text-slate-600">
            Haz clic para seleccionar un archivo
          </span>

          <input
            type="file"
            className="hidden"
            onChange={handleFile}
          />
        </label>

        {fileName && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
            <PremiumIcon icon={FileSearch} color="blue" size={18} />
            <span className="text-sm font-medium text-slate-700">
              Archivo seleccionado: {fileName}
            </span>
          </div>
        )}

        <button
          className="
            flex items-center gap-3 px-6 py-3 rounded-xl 
            bg-gradient-to-br from-blue-500 to-blue-700 
            text-white font-medium shadow-md hover:shadow-lg transition
          "
        >
          <PremiumIcon icon={Upload} color="blue" size={18} />
          Procesar archivo
        </button>
      </section>

      {/* RESULTADOS */}
      <section className="space-y-6">
        <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          Resultados del procesamiento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MÉTRICA 1 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Gauge} color="purple" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Intensidad del archivo
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Nivel de impacto del contenido procesado.
            </p>
            <p className="mt-4 text-3xl font-bold text-purple-600">0.72</p>
          </div>

          {/* MÉTRICA 2 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={Sparkles} color="indigo" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Señales detectadas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Señales encontradas en el archivo.
            </p>
            <p className="mt-4 text-3xl font-bold text-indigo-600">14</p>
          </div>

          {/* MÉTRICA 3 */}
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
            <PremiumIcon icon={FileSearch} color="amber" size={22} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Patrones encontrados
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Coincidencias con patrones DNIP/ADIP.
            </p>
            <p className="mt-4 text-3xl font-bold text-amber-600">6</p>
          </div>

        </div>
      </section>

    </div>
  );
}
