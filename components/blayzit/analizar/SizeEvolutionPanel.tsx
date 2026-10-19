"use client";

export default function SizeEvolutionPanel({ trend }: { trend: any }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Evolución del tamaño del archivo
      </h2>

      <div className="text-sm text-slate-700 space-y-2 mt-4">
        {trend.size.map((size: number, idx: number) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="w-32 text-slate-500">{trend.timestamps[idx]}</span>
            <div className="h-2 bg-slate-200 rounded-full flex-1 overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${Math.min(size / 100000, 100)}%` }}
              />
            </div>
            <span className="text-slate-700 font-semibold">
              {(size / 1024).toFixed(1)} KB
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
