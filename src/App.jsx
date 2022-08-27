import "./styles/styles.css";
// debe ser instalado yarn add react-router-dom@6
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Admin from "./pages/admin";
import Home from "./pages/Home";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import AuthLayout from "./layouts/AuthLayout";
import Vehiculos from "pages/admin/Vehiculos";
import Clientes from "pages/admin/Clientes";
import { DarkModeContext } from "context/DarkMode";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log("modo dark: ", darkMode);
  });
  return (
    <div className="App">
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Routes>
            {/* con la palabra 'index' como atributo ya se hace esta por defecto */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
            </Route>
            {/* rutas relativas al /, por ello no se pone de nuevo, para anidarlas en layout se uso outlet como placeholder */}
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="registro" element={<Registro />} />
            </Route>
            <Route path="/admin" element={<PrivateLayout />}>
              <Route path="" element={<Admin />} />
              <Route path="vehiculos" element={<Vehiculos />} />
              <Route path="clientes" element={<Clientes />} />
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;

{
  /* ya de esta manera no, debido a los layouts que van a agrupar varias
      rutas/paginas */
}
{
  /* <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/admin"
          element={
            <PrivateLayout>
              <Admin />
            </PrivateLayout>
          }
        />
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        /> 
      </Routes>*/
}
