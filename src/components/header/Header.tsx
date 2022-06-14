import React, { useState } from "react";
import Icon from "../icons/Icons";
import Menu from "./Menu";
import { handleStateEvent } from "../../utils/events";
import DropDown from "../DropDown";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`flex flex-col items-center border-r w-16 justify-between h-[100vh]`}
    >
      <Menu />
      <div className="flex items-center">
        <div onClick={(e) => handleStateEvent(e, setOpen(!open)!)}>
          <Icon
            iconKey="user"
            className="text-gray-500 hover:bg-gray-300 cursor-pointer rounded-md p-1 mx-1"
          />
          <DropDown className={`${open ? "visible" : "invisible"}`} />
          <div
            className={`absolute top-0 left-0 h-[100vh] w-[100vw] z-50 ${open ? "visible" : "invisible"
              }`}
            onClick={(e) => handleStateEvent(e, setOpen(!open)!)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
