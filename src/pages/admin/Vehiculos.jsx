import React, { useEffect, useState } from "react";

const Vehiculos = () => {
  const [nombreVehiculo, setNombreVehiculo] = useState("");
  const [colorBoton, setColorBoton] = useState("indigo");

  useEffect(() => {
    return console.log(
      "Hola, soy un useEffect que se ejecuta una sola vez, cuando la pagina se renderiza, porque tiene el array de dependencias vacio"
    );
  }, []);

  useEffect(() => {
    console.log(
      "Esto es una funcion que se ejecuta cada que cambia el nombre del vehiculo"
    );
    console.log("El valor de la variable es:", nombreVehiculo);
  }, [nombreVehiculo]);

  const cambioNombre = (e) => {
    console.log(e.target.value);
    setNombreVehiculo(e.target.value);
  };

  const enviarDatosBackend = () => {
    console.log("Valor variable nombreVehiculo es: ", nombreVehiculo);
  };

  return (
    <form className="flex flex-col">
      <h2>Formulario Creacion Vehiculos</h2>
      <input
        onChange={cambioNombre}
        type="text"
        placeholder="Nombre Vehiculo"
        required
      />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Marca"
        required
      />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Modelo"
        required
      />
      <button
        type="button"
        onClick={enviarDatosBackend}
        className="bg-indigo-500 text-white"
      >
        Enviar Datos
      </button>
    </form>
  );
};

export default Vehiculos;
