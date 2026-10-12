"use client";

export default function ExportModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center p-6">
      <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-8 w-full max-w-lg shadow-2xl">
        <h3 className="text-2xl font-semibold mb-4">Exportar Datos</h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-400">Rango de Fechas</label>
            <input
              type="text"
              placeholder="Sept 01 - Sept 30"
              className="w-full mt-1 p-2 rounded bg-slate-800 border border-slate-700 text-slate-200"
            />
          </div>

          <div>
            <label className="text-sm text-slate-400">Dominio</label>
            <input
              type="text"
              placeholder="Real Estate Sector"
              className="w-full mt-1 p-2 rounded bg-slate-800 border border-slate-700 text-slate-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <button className="p-3 rounded bg-sky-700/40 border border-sky-600 text-sky-200">
              XLSX
            </button>
            <button className="p-3 rounded bg-red-700/40 border border-red-600 text-red-200">
              PDF
            </button>
            <button className="p-3 rounded bg-emerald-700/40 border border-emerald-600 text-emerald-200">
              CSV
            </button>
            <button className="p-3 rounded bg-yellow-700/40 border border-yellow-600 text-yellow-200">
              JSON
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full p-3 rounded bg-slate-700 hover:bg-slate-600 transition text-slate-200"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
