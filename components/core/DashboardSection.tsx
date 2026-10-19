"use client";

export default function DashboardSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
        {title}
      </h2>

      <div className="space-y-6">{children}</div>
    </section>
  );
}
