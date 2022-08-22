import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PrivateLayout = ({ children }) => {
  return (
    <>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <main className="flex w-full overflow-y-scroll items-center justify-center">
          {children}
          {/* outlet para posicionar el contenido de los hijos */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PrivateLayout;
