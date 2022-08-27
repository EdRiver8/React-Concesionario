import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2014,
  },
  {
    nombre: "Sandero",
    marca: "Renault",
    modelo: 2020,
  },
  {
    nombre: "Rav4",
    marca: "Toyota",
    modelo: 2022,
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2017,
  },
  {
    nombre: "Mazda 3",
    marca: "Mazda",
    modelo: 2016,
  },
];

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textoBoton, setTextoBoton] = useState("Crear Vehiculo");
  const [vehiculos, setVehiculos] = useState([]);
  const [colorBoton, setColorBoton] = useState("indigo");

  useEffect(() => {
    // Obtener lista de vehiculos del backend
    setVehiculos(vehiculosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear Nuevo Vehiculo");
      setColorBoton("indigo");
    } else {
      setTextoBoton("Mostrar Todos los Vehiculos");
      setColorBoton("green");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Pagina de Administracion Vehiculos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} />
      ) : (
        <FormularioCreacionVehiculo funcionMostrarTabla={setMostrarTabla} />
      )}
      <ToastContainer position="button-center" autoClose={3000} />
    </div>
  );

  //  explicacion inicial =>
  // const [nombreVehiculo, setNombreVehiculo] = useState("");
  // useEffect(() => {
  //   return console.log(
  //     "Hola, soy un useEffect que se ejecuta una sola vez, cuando la pagina se renderiza, porque tiene el array de dependencias vacio"
  //   );
  // }, []);
  // useEffect(() => {
  //   console.log(
  //     "Esto es una funcion que se ejecuta cada que cambia el nombre del vehiculo"
  //   );
  //   console.log("El valor de la variable es:", nombreVehiculo);
  // }, [nombreVehiculo]);
  // const cambioNombre = (e) => {
  //   console.log(e.target.value);
  //   setNombreVehiculo(e.target.value);
  // };
  // const enviarDatosBackend = () => {
  //   console.log("Valor variable nombreVehiculo es: ", nombreVehiculo);
  // };
  // return (
  //   <form className="flex flex-col">
  //     <h2>Formulario Creacion Vehiculos</h2>
  //     <input
  //       onChange={cambioNombre}
  //       type="text"
  //       placeholder="Nombre Vehiculo"
  //       required
  //     />
  //     <input
  //       onChange={(e) => {
  //         console.log(e.target.value);
  //       }}
  //       type="text"
  //       placeholder="Marca"
  //       required
  //     />
  //     <input
  //       onChange={(e) => {
  //         console.log(e.target.value);
  //       }}
  //       type="text"
  //       placeholder="Modelo"
  //       required
  //     />
  //     <button
  //       type="button"
  //       onClick={enviarDatosBackend}
  //       className="bg-indigo-500 text-white"
  //     >
  //       Enviar Datos
  //     </button>
  //   </form>
  // );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {
    console.log(
      "Listado de Vehiculos en el componente TablaVehiculos: ",
      listaVehiculos
    );
  }, [listaVehiculos]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center">
        Todos los Vehiculos
      </h2>
      <table>
        <thead>
          <th>Nombre Vehiculo</th>
          <th>Marca Vehiculo</th>
          <th>Modelo Vehiculo</th>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Forma estatica de la tabla =>
      <table>
        <thead>
          <th>Nombre Vehiculo</th>
          <th>Marca Vehiculo</th>
          <th>Modelo Vehiculo</th>
        </thead>
        <tbody>
          <tr>
            <td>Corolla</td>
            <td>Toyota</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Sandero</td>
            <td>Renault</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Duster</td>
            <td>Renault</td>
            <td>2014</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

const FormularioCreacionVehiculo = ({ funcionMostrarTabla }) => {
  const [nombre, setNombre] = useState();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();

  const enviarAlBackend = () => {
    console.log(`Nombre: ${nombre}, Marca: ${marca}, Modelo: ${modelo}`);
    toast.success("Vehiculo creado con exito!");
    funcionMostrarTabla(true);
  };

  return (
    <div className="flex flex-col item-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center">
        Crear Nuevo Vehiculo
      </h2>
      <form action="" className="flex flex-col">
        <label htmlFor="nombre" className="flex flex-col">
          Nombre del Vehiculo
          <input
            className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2"
            type="text"
            placeholder="Corolla"
            name="nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </label>
        <label htmlFor="marca" className="flex flex-col">
          Marca del Vehiculo
          <select
            name="marca"
            id=""
            className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
          >
            <option value="" selected disabled>
              Seleccione una opcion
            </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label htmlFor="modelo" className="flex flex-col">
          Modelo del Vehiculo
          <input
            className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2"
            type="number"
            placeholder="2022"
            name="modelo"
            min={1992}
            max="2023"
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
          />
        </label>
        <label htmlFor="marca"></label>
        <button
          type="button"
          className="col-span-2 bg-green-400 p-2 rounded-full shadow-md "
          onClick={() => {
            enviarAlBackend();
          }}
        >
          Guardar Vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
