// components/Layout.tsx
import classNames from "classnames";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
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
        setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
        shown={showSidebar}
      />
      <div>
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        <div className=""> {children}</div>
      </div>
    </div>
  );
};
export default Layout;
