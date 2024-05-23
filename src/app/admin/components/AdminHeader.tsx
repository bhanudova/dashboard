"use client";
// AdminHeader.js
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { LuLayoutGrid } from 'react-icons/lu';
import { BsSearch } from 'react-icons/bs';
import AdminHeaderNavMenu from './AdminHeaderNavMenu';
import CollapseSearch from './CollapseSearch';

const AdminHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white border border-gray-300 z-10">
      <div className="flex p-[7px] justify-between gap-4 px-6">
        <div className='flex items-center gap-2'>
          <Image src={'/phoenix_logo.png'} width={600} height={600} alt='Logo' className='w-7' />
          <h2 className='font-medium text-2xl text-gray-600'>phoenix</h2>
        </div>

        <div className='hidden lg:block'>
          {/* Collapse Search */}
          <CollapseSearch isOpen={isSearchOpen} toggleSearch={toggleSearch} />

          {/* Search Container */}
          {!isSearchOpen && (
            <div className='lg:flex items-center gap-1.5 transform duration-500'>
              {/* Open Collapse Search */}
              <button className='transform scale-x-[-1] bg-[#EBECED] rounded-full p-2' onClick={toggleSearch}>
                <BsSearch className='w-5 h-5 text-[#3F6AD8] font-bold ' />
              </button>
              <div>
                <AdminHeaderNavMenu />
              </div>
            </div>
          )}
        </div>

        <div className='flex items-center gap-2'>
          <div>
            <IoIosNotificationsOutline className='text-2xl' />
          </div>
          <div>
            <LuLayoutGrid className='text-2xl' />
          </div>
          <div>
            <Image src={'/profile_logo.webp'} width={600} height={600} alt='Logo' className='w-10 h-10 rounded-full' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
