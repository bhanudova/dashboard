import React from 'react';
import { LuArrowRightToLine } from "react-icons/lu";
import { LuPieChart } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
const CollapseSideBar = ({ toggleSidebar }:any) => {
    return (
        <div className='h-full flex flex-col'>
            <div className='flex-grow bg-white overflow-hidden pr-[1px] py-[1px]'>
                <div className='overflow-y-auto h-full p-2 scrollbar' id="style-1">
                    <ul className='space-y-4 flex flex-col items-center pt-4'>
                        <li><LuPieChart className='text-lg'/></li>
                        <li><IoCartOutline className='text-lg'/></li>
                        <li><FiPhone className='text-lg'/></li>
                    </ul>
                </div>
            </div>
            <div className='p-[14.4px] relative border-t bg-white'>
                <div className="flex justify-center gap-1 items-center">
                    {/* Open Collapse */}
                    <button onClick={toggleSidebar}>
                        <LuArrowRightToLine className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CollapseSideBar;
