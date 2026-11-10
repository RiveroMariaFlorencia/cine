import { useState } from "react";
import "./ComprarTicket.css";

// Componente principal de la página de compra.
// En React, un componente es una función que devuelve JSX.
function ComprarTicket() {

    // Estado que guarda en qué paso del proceso estamos.
    // El valor inicial es 1.
    const [pasoActual, setPasoActual] = useState(1);

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

                <p>
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
                </p>

            </section>

        </main>
    );
}

// Exportamos el componente para poder usarlo
// desde App.jsx mediante React Router.
export default ComprarTicket;