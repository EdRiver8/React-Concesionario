import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <main>
        Layout AuthLayout {children}
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
