// components/Layout.tsx
import classNames from "classnames";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
const Layout = ({children}) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      {/* sidebar */}
      <Sidebar 
       collapsed={collapsed}
       setCollapsed={()=> setSidebarCollapsed((prev) => !prev)}
      />
      {/* <div className="bg-indigo-700 text-white">
        <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
          <MenuIcon className="w-10 h-10" />
        </button>
      </div> */}
      {/* content */}
      <div className=""> {children}</div>
    </div>
  );
};
export default Layout;