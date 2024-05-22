"use client"
import React, { useState } from 'react';
import { LuArrowLeftToLine } from 'react-icons/lu';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import Link from 'next/link';

const SideNav = () => {
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const toggleMenu = (menu:any) => {
        switch (menu) {
            case 'home':
                setIsHomeOpen(!isHomeOpen);
                break;
            case 'about':
                setIsAboutOpen(!isAboutOpen);
                break;
            case 'services':
                setIsServicesOpen(!isServicesOpen);
                break;
            case 'contact':
                setIsContactOpen(!isContactOpen);
                break;
            default:
                break;
        }
    };

    return (
        <div className='h-full flex flex-col'>
            <div className='flex-grow bg-white overflow-hidden pr-[1px] py-[1px]'>
                <div className='overflow-y-auto h-full p-2 scrollbar' id="style-1">
                <nav>
                        <button
                            className="w-full mb-2 shadow flex items-center justify-between text-left px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300"
                            onClick={() => toggleMenu('home')}
                        >
                            <span>Home</span>
                            <span className={`transition-transform duration-300 ${isHomeOpen ? 'rotate-180' : 'rotate-0'}`}>
                                {isHomeOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </button>
                        <ul className={`overflow-hidden transition-all duration-300 ${isHomeOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} pl-4`}>
                            <li className="px-4 py-1.5 hover:bg-gray-100 rounded-md"><Link href='/dashboard/'>Dashboard</Link></li>
                            <li className="px-4 py-1.5 hover:bg-gray-100 rounded-md"><Link href='/dashboard/invoices'>Invoice</Link></li>
                            <li className="px-4 py-1.5 hover:bg-gray-100 rounded-md"><Link href='/dashboard/customers'>Customer</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Bottom */}
            <div className='p-[14.4px] relative border-t bg-white'>
                <div className="flex justify-center gap-1 items-center">
                    <LuArrowLeftToLine className="text-xl" /><h2>Collapsed View</h2>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
