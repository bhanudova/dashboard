// CollapseSearch.js
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const CollapseSearch = ({ isOpen, toggleSearch }:any) => {
  return (
    <div className={`flex items-center gap-2 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center relative">
        <input type="text" placeholder="Type to search" className="px-4 w-96 placeholder:text-[13px] border-none focus:outline-none border py-1.5 rounded-full bg-[#EDEEEF]" />
        <button className="bg-[#DFE0E1] p-1.5 rounded-full absolute right-0 cursor-pointer">
          <BsSearch className='w-6 h-6 text-[#3F6AD8] font-bold' />
        </button>
      </div>
      <button onClick={toggleSearch}>
        <IoClose />
      </button>
    </div>
  );
};

export default CollapseSearch;
