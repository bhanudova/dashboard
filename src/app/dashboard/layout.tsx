import Footer from "../components/Footer";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { LuArrowLeftToLine } from "react-icons/lu";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-grow lg:overflow-hidden pt-14 lg:flex-row">
                <div className="hidden lg:block flex-none lg:w-64 relative bg-gray-50">
                    <SideNav />
                    <div className='absolute bottom-[0.7px] p-4 text-sm font-semibold border-t bg-white w-full'>
                        <div className="flex justify-center gap-1 items-center">
                            <LuArrowLeftToLine className="text-xl"/><h2>Collapsed View</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-grow relative lg:overflow-y-auto  bg-black/20">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}
