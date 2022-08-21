import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <>
      <main>Layout AuthLayout {children}</main>
      <Outlet />
    </>
  );
};

export default AuthLayout;
