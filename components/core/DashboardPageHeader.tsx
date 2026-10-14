//components/DashboardPageHeader.tsx
export default function DashboardPageHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="blz-header-title">{title}</h1>
      {subtitle && <p className="blz-header-subtitle">{subtitle}</p>}
    </div>
  );
}
