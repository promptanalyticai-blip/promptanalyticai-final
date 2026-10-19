"use client";

export default function StatWidget({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  const isNegative = trend.startsWith("-");
  const trendColor = isNegative ? "text-red-600" : "text-green-600";
  const glowColor = isNegative ? "ring-red-200/40" : "ring-green-200/40";

  return (
    <div
      className={`
        bg-white 
        rounded-2xl 
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        border border-slate-200 
        p-6 
        transition-all 
        duration-300 
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
        hover:-translate-y-[3px]
        relative
        overflow-hidden
      `}
    >
      {/* Glow semántico */}
      <div
        className={`
          absolute inset-0 
          pointer-events-none 
          rounded-2xl 
          ring-1 ${glowColor}
        `}
      />

      {/* Label */}
      <p className="text-sm text-slate-500 mb-2 tracking-wide">
        {label}
      </p>

      {/* Value */}
      <p className="text-3xl font-semibold text-slate-900 tracking-tight">
        {value}
      </p>

      {/* Trend */}
      <p className={`mt-1 text-sm font-medium ${trendColor}`}>
        {trend}
      </p>

      {/* Mini Trendline */}
      <div
        className="
          mt-5 
          h-10 
          bg-gradient-to-r 
          from-slate-100 
          via-slate-50 
          to-transparent 
          rounded-xl 
          border border-slate-200
          shadow-inner
          flex items-center justify-center
          text-slate-400 text-xs
        "
      >
        [ mini trendline ]
      </div>
    </div>
  );
}
