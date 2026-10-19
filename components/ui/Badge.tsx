"use client";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "success" | "danger";
};

export default function Badge({ children, tone = "default" }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  const styles =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
      : tone === "danger"
      ? "bg-rose-50 text-rose-700 border border-rose-100"
      : "bg-slate-50 text-slate-700 border border-slate-100";

  return <span className={`${base} ${styles}`}>{children}</span>;
}
