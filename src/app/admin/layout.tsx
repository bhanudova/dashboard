"use client"
import React, { useState } from 'react';
import AdminFooter from "./components/AdminFooter";
import AdminHeader from "./components/AdminHeader";
import AdminSideNav from "./components/AdminSideNav";
import CollapseSideBar from "./components/CollapseSideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="flex flex-col h-screen">
            <AdminHeader />
            <div className="flex flex-grow lg:overflow-hidden pt-14 lg:flex-row">
                <div
                    className={`relative border-r border-r-gray-300 transition-width duration-300 ease-in-out ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}
                >
                    {isCollapsed ? (
                        <CollapseSideBar toggleSidebar={toggleSidebar} />
                    ) : (
                        <AdminSideNav toggleSidebar={toggleSidebar} />
                    )}
                </div>
                <div className="flex-grow relative lg:overflow-y-auto bg-[#F5F7FA]">
                    {children}
                    <AdminFooter />
                </div>
            </div>
        </div>
    );
}
