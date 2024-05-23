"use client"
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
// import { adminHeaderNavMenu } from '@/lib/global'
import { CiGift } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdDisplaySettings } from "react-icons/md";

const iconMap:any = {
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
                                    <NavigationMenuContent className='px-4 py-2 '>
                                        <NavigationMenuLink>{data.link}</NavigationMenuLink>
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