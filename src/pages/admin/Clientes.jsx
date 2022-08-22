import React, { useState, useEffect } from "react";

const Clientes = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [menorEdad, setMenorEdad] = useState(true);

  //comprueba siempre si es mayor o no, sin tener que esperar el click en enviar
  useEffect(() => {
    console.log(mayorEdad(edad));
    setMenorEdad(menorDeEdad(edad));
  }, [edad]);

  const datos = () => {
    let mayor = "";
    if (edad > 17) {
      mayor = "ud es mayor de edad";
    } else {
      mayor = "ud no es mayor de edad";
    }
    alert(`Su nombre es: ${nombre} y ${mayor}`);
  };

  function mayorEdad(edad) {
    let caracterizacion = "";
    edad >= 18
      ? (caracterizacion = "ud es mayor de edad")
      : (caracterizacion = "ud es menor de edad");
    return caracterizacion;
  }

  function menorDeEdad(edad) {
    let caracterizacion = true;
    edad >= 18 ? (caracterizacion = false) : (caracterizacion = true);
    return caracterizacion;
  }

  return (
    <form className="flex flex-col" action="">
      <input
        type="text"
        placeholder="Ingrese Nombre"
        onChange={(e) => {
          console.log(e.target.value);
          setNombre(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Ingrese Edad"
        onChange={(e) => {
          console.log(e.target.value);
          setEdad(e.target.value);
        }}
      />
      <button
        type="button"
        className="bg-indigo-500 text-white"
        onClick={datos}
      >
        Enviar
      </button>
      {menorEdad ? (
        <span className="text-3xl text-red-500">
          Ud es menor de edad, no puede ingresar
        </span>
      ) : (
        <span className="text-3xl text-green-500">
          Ud es mayor de edad, puede ingresar
        </span>
      )}
    </form>
  );
};

export default Clientes;
