import SidebarV6 from "@/components/blayzit/layout/SidebarV6";
import HeaderV6 from "@/components/blayzit/layout/HeaderV6";

export default function V6Layout({ children }) {
  return (
    <div className="flex bg-[#F7FAFC] min-h-screen">
      
      {/* Sidebar */}
      <SidebarV6 />

      {/* Contenido */}
      <main className="flex-1 flex flex-col">
        
        {/* Header */}
        <HeaderV6 />

        {/* Página */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
