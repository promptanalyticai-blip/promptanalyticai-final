// app/blayzit/layout.tsx
import "@/app/globals.css";

export default function BlayzitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {children}
      </div>
    </div>
  );
}
