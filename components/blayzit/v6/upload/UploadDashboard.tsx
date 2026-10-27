"use client";

export default function UploadDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="max-w-6xl mx-auto py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            BLAYZIT V6 · Upload
          </h1>
          <p className="text-sm text-slate-500">
            Subida de archivos, señales y trazas DNIP/ADIP.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-lg shadow-slate-200">
          <div className="p-6 space-y-4">
            <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Subir archivo
            </h2>

            <div className="border border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50/60">
              <p className="text-sm text-slate-600 mb-4">
                Arrastra un archivo o selecciona uno desde tu dispositivo.
              </p>

              <button className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium shadow-sm hover:bg-slate-800 transition">
                Seleccionar archivo
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200">
          <div className="p-5 space-y-2">
            <h2 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Motor de ingestión V6
            </h2>
            <p className="text-xs text-slate-500">
              Arquitectura WOW ULTRA PRIME aplicada sobre ingestión de señales y
              trazas DNIP/ADIP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
