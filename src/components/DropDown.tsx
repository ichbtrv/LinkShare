import React from "react";
interface DropDownProps {
  className: string;
}

const DropDown = ({ className }: DropDownProps) => {
  return (
    <>
      <div
        className={`absolute z-20 left-2 bottom-12 bg-white border ${className}`}
      >
        <ul className="">
          <li className="px-4 py-1 cursor-pointer hover:bg-gray-300">
            Account
          </li>
          <li className="px-4 py-1 cursor-pointer hover:bg-gray-300">Help</li>
          <li className="px-4 py-1 cursor-pointer hover:bg-gray-300">Logout</li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
