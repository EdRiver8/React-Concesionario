import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PrivateLayout = ({ children }) => {
  return (
    <>
      <main>
        <Sidebar />
        {children}
      </main>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
