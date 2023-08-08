// components/Navbar.tsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";


const Navbar = (props) => {
  return (
    <nav
      className={classNames({
        "bg-[#272684] text-white shadow-xl": true, // colors
        // "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg">Admin Panel</div>
        <div className="grid place-content-stretch p-4">
          <div className="flex gap-4 items-center overflow-hidden">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="/images/maureen.jpeg"
              alt=""
            />
            <div className="flex flex-col text-sm">
              <span>Thomas Cook</span>
              <Link href="/">View Profile</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;
