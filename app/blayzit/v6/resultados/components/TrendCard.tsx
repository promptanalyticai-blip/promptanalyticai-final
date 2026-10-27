"use client";

export default function TrendCard({ icon, title, trend }) {
  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm font-medium text-slate-700">{title}</span>
      </div>
      <p className="text-lg font-semibold text-slate-800">{trend}</p>
    </div>
  );
}
