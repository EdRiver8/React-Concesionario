import React from "react";
import { Link } from "react-router-dom";
import TriggerDarkMode from "./TriggerDarkMode";

const Navbar = () => {
  return (
    <nav className="bg-red-400 p-1">
      <ul className="flex w-full justify-between">
        <Link to="">Logo</Link>
        <Link to="">Inicio</Link>
        <Link to="">Admin</Link>
        <li></li>
        <li className="px-3">
          <Link to="/login">
            <TriggerDarkMode />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
