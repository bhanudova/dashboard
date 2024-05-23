"use client"
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"
// import { adminHeaderNavMenu } from '@/lib/global'
import { CiGift } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdDisplaySettings } from "react-icons/md";

const iconMap: any = {
    CiGift: CiGift,
    IoIosSettings: IoIosSettings,
    MdDisplaySettings: MdDisplaySettings,
};

export default function AdminHeaderNavMenu() {
    const adminHeaderNavMenu = [
        {
            title: "Mega Menu",
            icon: 'CiGift',
            link: 'Mega Menu Link'
        },
        {
            title: "Settings",
            icon: 'IoIosSettings',
            link: 'Setting Menu Link'
        },
        {
            title: "Projects",
            icon: 'MdDisplaySettings',
            link: 'Projects Menu Link'
        }
    ];


    return (
        <div className='flex'>
            {
                adminHeaderNavMenu.map((data: any, i: number) => {
                    // Get the corresponding icon component
                    const IconComponent = iconMap[data.icon];
                    return (
                        <NavigationMenu key={i}>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <div className='flex items-center gap-1'>
                                            {/* Render the icon dynamically */}
                                            <IconComponent className='text-xl' />
                                            {data.title}
                                        </div>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent >
                                        <div className='p-2 w-60 flex flex-col items-center'>
                                            <NavigationMenuLink>{data.link}</NavigationMenuLink>
                                            <h2>Hello</h2>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    );
                })
            }
        </div>
    )
}