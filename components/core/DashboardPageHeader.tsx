"use client";

export default function DashboardPageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-10">
      {/* Título principal estilo Stripe */}
      <h1 className="
        text-3xl 
        font-semibold 
        text-slate-900 
        tracking-tight
      ">
        {title}
      </h1>

      {/* Subtítulo corporativo */}
      {subtitle && (
        <p className="
          text-slate-600 
          text-base 
          mt-2
        ">
          {subtitle}
        </p>
      )}

      {/* Línea suave estilo Stripe */}
      <div className="mt-6 border-b border-slate-200"></div>
    </header>
  );
}
