import React from "react";
import { useDarkMode } from "context/DarkMode";

const Admin = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`bg-gray-${darkMode ? 900 : 50} flex w-full h-full`}>
      Index del panel Admin
    </div>
  );
};

export default Admin;
