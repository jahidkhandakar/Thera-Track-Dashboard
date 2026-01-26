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
        <div className="flex min-h-screen bg-gray-50">
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

            <div className="flex flex-col flex-1 lg:ml-[280px]">
                {/* Header */}
                <div className="sticky top-0 z-30 p-4">
                    <Header toggleMobileMenu={toggleMobileMenu} />
                </div>

                {/* Main Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Main;

 