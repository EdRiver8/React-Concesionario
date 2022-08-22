import React from "react";
import { Outlet, Link } from "react-router-dom";
import ImagenLogo from "components/ImagenLogo";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex items-start">
        <Link to="/">
          {/* Para que funcione el icono de 'home
          https://fontawesome.com/docs/web/use-with/react*/}
          <i className="fa-solid fa-house  cursor-pointer hover:text-indigo-500" />
        </Link>
      </div>
      <div className="max-w-md w-full">
        <ImagenLogo />
        {children}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
