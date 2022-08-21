import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      {/* outlet permite en que parte de la plantilla se van a cargar los elementos hijos cuando se haga match en las rutas */}
      <Outlet />
      <main className="h-full overflow-y-scroll">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
