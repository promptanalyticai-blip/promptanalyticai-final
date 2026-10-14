//components/dashboard/widgets/StatWidget.tsx
export default function StatWidget({ title, value, subtitle, trend }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
      <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
    </div>
  );
}
