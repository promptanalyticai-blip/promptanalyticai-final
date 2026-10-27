"use client";

export default function ChartBar({ data }) {
  return (
    <div className="flex items-end gap-3 h-40">
      {data.map((v, i) => (
        <div
          key={i}
          className="w-8 bg-indigo-500/70 rounded-md transition-all duration-300"
          style={{ height: `${v * 4}px` }}
        />
      ))}
    </div>
  );
}
