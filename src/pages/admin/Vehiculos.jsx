import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vehiculosBackend = [
  {
    name: "Corolla",
    brand: "Toyota",
    model: 2014,
  },
  {
    name: "Sandero",
    brand: "Renault",
    model: 2020,
  },
  {
    name: "Rav4",
    brand: "Toyota",
    model: 2022,
  },
  {
    name: "Fiesta",
    brand: "Ford",
    model: 2017,
  },
  {
    name: "Mazda 3",
    brand: "Mazda",
    model: 2016,
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
      setTextoBoton("Crear Nuevo Vehículo");
      setColorBoton("indigo");
    } else {
      setTextoBoton("Mostrar Todos los vehículos");
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
        <FormularioCreacionVehiculo
          setMostrarTabla={setMostrarTabla}
          setVehiculos={setVehiculos}
          listaVehiculos={vehiculos}
        />
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
                <td>{vehiculo.name}</td>
                <td>{vehiculo.brand}</td>
                <td>{vehiculo.model}</td>
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

const FormularioCreacionVehiculo = ({
  setMostrarTabla,
  setVehiculos,
  listaVehiculos,
}) => {
  // No se necesitan los states por el uso del 'useRef'
  // const [nombre, setNombre] = useState();
  // const [marca, setMarca] = useState();
  // const [modelo, setModelo] = useState();
  const form = useRef(null);

  // const enviarAlBackend = () => {
  //   console.log(`Nombre: ${name}, Marca: ${brand}, Modelo: ${model}`);
  //   toast.success("Vehiculo creado con exito!");
  //   setMostrarTabla(true);
  //   setVehiculos([
  //     ...listaVehiculos,
  //     { name: name, brand: brand, model: model },
  //   ]);
  // };

  const submitForm = (e) => {
    e.preventDefault();
    const datosForm = new FormData(form.current);
    const nuevoVehiculo = {};
    datosForm.forEach((val, key) => {
      //console.log(key, val);
      nuevoVehiculo[key] = val;
    });
    //console.log("datos enviados", nuevoVehiculo);
    setMostrarTabla(true);
    setVehiculos([...listaVehiculos, nuevoVehiculo]);
    //caso de exito al enviar al backedn
    toast.success("Vehiculo agregado con exito!");
    //caso de fallo al enviar al backend
    // toast.error("Error creando vehiculo!");
  };

  return (
    <div className="flex flex-col item-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center">
        Crear Nuevo Vehiculo
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <label className="flex flex-col" htmlFor="name">
          Nombre del vehículo
          <input
            name="name"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            placeholder="Corolla"
            required
          />
        </label>

        <label className="flex flex-col" htmlFor="brand">
          Marca del vehículo
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="brand"
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>

        <label className="flex flex-col" htmlFor="model">
          Modelo del vehículo
          <input
            name="model"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1992}
            max={2022}
            placeholder="2014"
            required
          />
        </label>

        <button
          type="submit"
          className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white"
        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
