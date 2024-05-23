"use client"
import React from 'react';
import { LuArrowLeftToLine } from "react-icons/lu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LuPieChart } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";


const AdminSideNav = ({ toggleSidebar }: any) => (

    <nav className='h-full w-full flex flex-col'>
        <div className='flex-grow bg-white overflow-hidden pr-[1px] py-[1px]'>
            <div className='overflow-y-auto h-full p-2 scrollbar' id="style-1">
                <div className=''>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='flex items-center gap-2'>
                                    <LuPieChart />
                                    <h2 className='text-sm'>Home</h2>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className='w-[75%] mx-auto'>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>E commerce</li>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project management</li>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>CRM</li>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Social feed</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <h2 className='mt-3 mb-2 font-medium text-sm px-4'>Apps</h2>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className='flex items-center gap-2'>
                                    <IoCartOutline />
                                    <h2 className='text-sm'>E Commerce</h2>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className='w-[90%] mx-auto'>
                                    <li>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>Admin</AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className='w-[80%] mx-auto'>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Add product</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Products</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Customers</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Customer details</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Orders</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Order details</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Refund</li>
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>Customer</AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className='w-[80%] mx-auto'>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Homepage</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Product details</li>
                                                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Products filter</li>
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className='flex items-center gap-2'>
                                    <FiPhone />
                                    <h2 className='text-sm'>CRM</h2>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className='w-[75%] mx-auto'>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>E commerce</li>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project management</li>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>CRM</li>
                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Social feed</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
        <div className='p-[14.4px] relative border-t bg-white'>
            <div onClick={toggleSidebar} className="flex cursor-pointer justify-center gap-1 items-center">
                <LuArrowLeftToLine className="text-xl" /> <h2>Collapsed View</h2>
            </div>
        </div>
    </nav>
);

export default AdminSideNav;
