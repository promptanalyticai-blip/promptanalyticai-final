import SidebarV6 from "@/components/blayzit/layout/SidebarV6";

export default function V6Layout({ children }) {
  return (
    <div className="flex bg-[#F7FAFC] min-h-screen">
      <SidebarV6 />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
