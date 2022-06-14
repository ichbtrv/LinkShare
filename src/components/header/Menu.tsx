import { handleStateEvent } from "@/utils/events";
import Link from "next/link";
import React, { useState } from "react";
import HorizontalMenuIcon from "../icons/icon-menu-hor";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative">
      <div className="flex items-center">
        <div
          className="flex flex-col justify-center ml-2 leading-none hover:cursor-pointer hover:bg-gray-200 p-1 pb-2 rounded-md"
          onClick={(e) => handleStateEvent(e, setOpen(!open)!)}
        >
          <HorizontalMenuIcon />
          <HorizontalMenuIcon />
          <HorizontalMenuIcon />
        </div>
      </div>
      {open ? (
        <>
          <div
            className="w-[100vw] h-[100vh] absolute -top-2  bg-opacity-40 bg-gray-200 backdrop-blur-sm z-50"
            onClick={(e) => handleStateEvent(e, setOpen(!open)!)}
          />

          <div
            className="absolute -top-2 left-0 w-96 py-2 px-2  reveal z-50"
            onClick={(e) => handleStateEvent(e, setOpen(!open)!)}
          >
            <Link href="/">
              <h1 className="text-4xl hover:underline cursor-pointer">Home</h1>
            </Link>
            <Link href="/music">
              <h1 className="text-4xl hover:underline cursor-pointer">About</h1>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default Menu;
