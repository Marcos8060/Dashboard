// components/Sidebar.tsx
import React from "react";
import cn from "classnames";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { defaultNavItems } from "./data";
import classNames from "classnames";

const Sidebar = ({ collapsed, setCollapsed, shown }) => {
  // 👇 use the correct icon depending on the state.
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={cn({
        "bg-[#272684] shadow-2xl text-primary z-20": true,
        "fixed md:static md:translate-x-0": true,
        "w-[300px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={cn({
          "flex flex-col justify-between": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={cn({
            "flex items-center border-b border-b-indigo-800": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap text-white">My Logo</span>}
          <button
            className={cn({
              "grid place-content-center": true, // position
              "hover:bg-primary text-white ": true, // colors
              "w-10 h-10 rounded-full": true, // shape
            })}
            // 👇 set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <nav className="flex-grow">
        <ul className="my-2 flex flex-col gap-2 items-stretch">
          {defaultNavItems.map((item, index) => (
            <li
              key={index}
              className={classNames({
                "text-indigo-100 hover:bg-indigo-900 flex": true,
                "transition-colors duration-300": true,
                "rounded-md p-2 mx-3 gap-4": !collapsed,
                "rounded-full p-2 mx-3 w-10 h-10": collapsed,
              })}
            >
              <Link href={item.href} className="flex gap-2">
                {item.icon} <span>{!collapsed && item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
