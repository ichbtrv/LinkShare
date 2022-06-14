import React, { useState } from "react";
import { handleStateEvent } from "@/utils/events";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative mt-1 flex items-center  mx-2 `}>
      <div className={`${open ? 'absolute' : ''} inset-y-0 left-0 pl-3 flex items-center`} onClick={(e) => handleStateEvent(e, setOpen(!open)!)} >
        <svg className={`h-8 w-8 p-1 rounded-md text-gray-500 ${!open ? 'hover:bg-gray-300 cursor-pointer' : ''}`} viewBox="0 0 24 24" fill="none" >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={`${open ? 'visible' : 'invisible w-0'}`}
      >
        <input
          className={`${open ? 'visible md:w-96 ' : 'invisible w-0'} bg-white border-b-blue-90 bg-opacity-80 border text-black pl-12 pr-4 py-1 focus:outline-none focus:shadow-outline`}
          type="text"
          placeholder="Search"
          value={searchValue}
          hidden={!open}
          onChange={(e) => setSearchValue((_val) => e.target.value)}
          autoFocus={open}
        />
      </form>
    </div>
  );
};

export default SearchBar;
