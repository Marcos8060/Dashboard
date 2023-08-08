// components/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";


export const menus = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Users",
    href: "/team",
    icon: <UserGroupIcon className="w-6 h-6" />,
    children: [
      {
        label: "All Users",
        href: "/dashboard/users/all-users",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
      {
        label: "Approved Users",
        href: "/dashboard/users/approved-users",
        icon: <UserGroupIcon className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];
