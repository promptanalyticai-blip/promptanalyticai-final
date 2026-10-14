//components/DashboardTopbar.tsx
"use client";

export default function DashboardTopbar() {
  return (
    <header className="h-14 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
      <div className="font-medium text-gray-700">Panel Enterprise</div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Mindy</span>
      </div>
    </header>
  );
}
