"use client";

export default function MetricCard({ icon, title, value }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm font-medium text-slate-700">{title}</span>
      </div>
      <p className="text-2xl font-semibold text-slate-800">{value}</p>
    </div>
  );
}
