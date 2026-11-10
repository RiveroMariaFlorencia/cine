import { BrowserRouter, Routes, Route } from "react-router";

import fondoGlitter from "./assets/img/fondoGlitter.gif";   // Importamos el fondoGlitter a una variable

import Inicio from "./pages/Inicio";
import Horarios from "./pages/Horarios";
import ComprarTicket from "./pages/ComprarTicket"
import CrearCuenta from "./pages/CrearCuenta";
import MiCuenta from "./pages/MiCuenta";
import EditarCatalogo from "./pages/EditarCatalogo";
function App() {
    return (

        <div
            className="fondo-app"
            style={{backgroundImage: `url(${fondoGlitter})`}}
        >

            <BrowserRouter> {/* Le dice a React que esta aplicacion va a tener navegacion mediante URL */}

                <Routes>  {/* Contenedor de las distintas rutas de nuestra aplicacion */}

                    <Route       
                        path="/"
                        element={<Inicio />}
                    />

                    <Route
                        path="/horarios"
                        element={<Horarios />}
                    />
                    <Route
                        path="/comprar-ticket"
                        element={<ComprarTicket />}
                    />
                     <Route
                        path="/crear-cuenta"
                        element={<CrearCuenta />}
                    />

                    <Route
                        path="/mi-cuenta"
                        element={<MiCuenta />}
                    />

                    <Route
                        path="/editar-catalogo"
                        element={<EditarCatalogo />}
                    />


                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;