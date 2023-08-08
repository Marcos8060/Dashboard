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



const Sidebar = ({ collapsed, setCollapsed }) => {
  // 👇 use the correct icon depending on the state.
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={cn({
        "bg-indigo-700 text-zinc-50 z-20": true,
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
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            className={cn({
              "grid place-content-center": true, // position
              "hover:bg-indigo-800 ": true, // colors
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

      <div className="grid place-content-stretch p-4">
        <div className="flex gap-4 items-center overflow-hidden">
          {!collapsed && (
            <>
              <img
                className="object-cover w-16 h-16 rounded-full"
                src="/images/maureen.jpeg"
                alt=""
              />
              <div className="flex flex-col">
                <span>Thomas Cook</span>
                <Link href="/">View Profile</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
