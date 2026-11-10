import { BrowserRouter, Routes, Route } from "react-router";

// Fondo general de toda la aplicación
import fondoGlitter from "./assets/img/fondoGlitter.gif";

// Páginas
import Inicio from "./pages/Inicio";
import Horarios from "./pages/Horarios";
import CrearCuenta from "./pages/CrearCuenta";
import MiCuenta from "./pages/MiCuenta";
import ComprarTicket from "./pages/ComprarTicket";
import EditarCatalogo from "./pages/EditarCatalogo";

// Componentes reutilizables
import Footer from "./components/Footer/Footer";

// Estilos generales de la aplicación
import "./App.css";


function App() {

    return (

        // BrowserRouter permite manejar las rutas de la aplicación
        // sin recargar completamente la página.
        <BrowserRouter>

            {/* Fondo general de CineMaster */}
            <div
                className="fondo-app"
                style={{
                    backgroundImage: `url(${fondoGlitter})`
                }}
            >

                {/*
                    Este contenedor ocupa el espacio disponible.
                    De esta forma el Footer queda abajo incluso
                    cuando una página tiene poco contenido.
                */}
                <div className="contenido-app">

                    <Routes>

                        {/* Página principal */}
                        <Route
                            path="/"
                            element={<Inicio />}
                        />


                        {/* Cartelera de horarios */}
                        <Route
                            path="/horarios"
                            element={<Horarios />}
                        />


                        {/* Registro de usuario */}
                        <Route
                            path="/crear-cuenta"
                            element={<CrearCuenta />}
                        />


                        {/* Inicio de sesión / cuenta */}
                        <Route
                            path="/mi-cuenta"
                            element={<MiCuenta />}
                        />


                        {/* Proceso de compra */}
                        <Route
                            path="/comprar-ticket"
                            element={<ComprarTicket />}
                        />


                        {/* Administración del catálogo */}
                        <Route
                            path="/editar-catalogo"
                            element={<EditarCatalogo />}
                        />

                    </Routes>

                </div>


                {/* Footer reutilizable visible en todas las páginas */}
                <Footer />

            </div>

        </BrowserRouter>

    );
}

export default App;