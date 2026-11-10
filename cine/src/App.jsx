import { BrowserRouter, Routes, Route } from "react-router";

import fondoGlitter from "./assets/img/fondoGlitter.gif";   // Importamos el fondoGlitter a una variable

import Inicio from "./pages/Inicio";
import Horarios from "./pages/Horarios";

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

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;