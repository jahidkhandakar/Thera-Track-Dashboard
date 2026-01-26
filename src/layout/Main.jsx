import { Drawer } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:block w-[280px] fixed h-full p-4 z-40">
        <Sidebar />
      </div>

      {/* Sidebar for Mobile (Drawer) */}
      <Drawer
        placement="left"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        bodyStyle={{ padding: 0, backgroundColor: "#8FCAF8" }}
        width={280}
        closable={false}
      >
        <Sidebar closeDrawer={() => setIsMobileMenuOpen(false)} />
      </Drawer>

      <div className="flex-1 lg:ml-[280px] h-screen overflow-y-auto relative">
        {/* Header Container */}
        <div className="sticky top-0 z-30 p-2 md:p-4 w-full">
          <Header toggleMobileMenu={toggleMobileMenu} />
        </div>

        {/* Main Content */}
        <main className="px-2 md:px-4 lg:px-8 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
