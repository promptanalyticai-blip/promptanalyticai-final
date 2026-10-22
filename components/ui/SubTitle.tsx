export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      {children}
    </h3>
  );
}
