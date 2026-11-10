import { useState } from "react";
import { useSearchParams } from "react-router";
import "./ComprarTicket.css";

// Componente principal de la página de compra.
// En React, un componente es una función que devuelve JSX.
function ComprarTicket() {

    // Lee los parámetros que llegan en la URL.
    // Ejemplo:
    // /comprar-ticket?pelicula=barbie&dia=hoy&horario=17:00
    const [searchParams] = useSearchParams();

    const pelicula = searchParams.get("pelicula");
    const dia = searchParams.get("dia");
    const horario = searchParams.get("horario");

    // Si ya vienen película, día y horario,
    // los pasos 1 y 2 ya están resueltos.
    // Por eso comenzamos directamente en Entradas (paso 3).
    const pasoInicial =
        pelicula && dia && horario ? 3 : 1;

    const [pasoActual, setPasoActual] = useState(pasoInicial);

    // Lista con los pasos del proceso de compra.
    // La usamos para generar el stepper sin repetir código.
    const pasos = [
        "Película",
        "Horario",
        "Entradas",
        "Pago",
        "Finalizar"
    ];

    return (
        <main className="pagina-compra">

            <h1>COMPRAR ENTRADAS</h1>

            {/* STEPPER */}
<div className="stepper">

    {pasos.map((nombrePaso, indice) => {

        // Los arrays empiezan en posición 0,
        // pero nuestro stepper empieza en paso 1.
        const numeroPaso = indice + 1;

        return (
            <div
                className={`paso ${
                    numeroPaso === pasoActual
                        ? "activo"
                        : numeroPaso < pasoActual
                        ? "completado"
                        : ""
                }`}
                key={numeroPaso}
            >

                <div className="circulo">
                    {numeroPaso < pasoActual
                        ? "✓"
                        : numeroPaso}
                </div>

                <span>{nombrePaso}</span>

            </div>
        );
    })}

</div>

            <section className="contenedor-compra">

    {/* Muestra los datos solo si llegaron por la URL */}
    {pelicula && dia && horario && (
        <div>
            <p>Película: {pelicula}</p>
            <p>Día: {dia}</p>
            <p>Horario: {horario}</p>
        </div>
    )}

    <p>
        Paso actual: {pasoActual}
    </p>

    <button
        onClick={() => setPasoActual(pasoActual + 1)}
        disabled={pasoActual === 5}
    >
        Siguiente
    </button>

    <button
        onClick={() => setPasoActual(pasoActual - 1)}
        disabled={pasoActual === 1}
    >
        Anterior
    </button>

</section>
        </main>
    );
}

// Exportamos el componente para poder usarlo
// desde App.jsx mediante React Router.
export default ComprarTicket;