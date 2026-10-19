"use client";

export default function ClusterPanel({ clusters }: { clusters: any[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Grupos inteligentes de archivos
      </h2>

      {clusters.map((cluster, idx) => (
        <div key={idx} className="border border-slate-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-slate-800">
            Cluster {idx + 1}
          </h3>

          <ul className="list-disc pl-4 text-sm text-slate-700 mt-2">
            {cluster.items.map((item: any) => (
              <li key={item.file.name}>{item.file.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
