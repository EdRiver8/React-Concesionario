import React from "react";
import { useDarkMode } from "context/DarkMode";

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`bg-gray-${darkMode ? 900 : 50} flex w-full h-full`}>
      Contenido de landing Concesionario
    </div>
  );
};

export default Home;
