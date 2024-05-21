import Header from "../components/Header";
import SideNav from "../components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-grow lg:overflow-hidden pt-14 lg:flex-row">
                <div className="hidden lg:block flex-none lg:w-64  bg-gray-50">
                    <SideNav />
                </div>
                <div className="flex-grow p-6 lg:overflow-y-auto lg:p-4  bg-black/20">
                    {children}
                </div>
            </div>
        </div>
    );
}
