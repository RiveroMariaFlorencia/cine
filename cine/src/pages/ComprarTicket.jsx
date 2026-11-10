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

    // Estados para guardar la cantidad elegida de cada tipo de entrada.
    // Cada vez que cambia uno de estos valores, React vuelve a renderizar
    // el componente y actualiza automáticamente el total.
    const [general, setGeneral] = useState(0); //inicialmente hay 0 entradas
    const [menor, setMenor] = useState(0);
    const [jubilado, setJubilado] = useState(0);

    // Precios de cada tipo de entrada
    const PRECIO_GENERAL = 12000;
    const PRECIO_MENOR = 8000;
    const PRECIO_JUBILADO = 9000;

    // El total se calcula usando los valores actuales de los estados.
    // No necesitamos modificar el HTML manualmente:
    // cuando cambia una cantidad, React vuelve a calcular este valor.
    const total =
        general * PRECIO_GENERAL +
        menor * PRECIO_MENOR +
        jubilado * PRECIO_JUBILADO;

    // Lista con los pasos del proceso de compra.
    // La usamos para generar el stepper sin repetir código.
    const pasos = [
        "Película",
        "Horario",
        "Entradas",
        "Pago",
        "Finalizar"
    ];

    // Verifica que el usuario haya elegido al menos una entrada.
    function validarEntradas() {

        const cantidadTotal = general + menor + jubilado;

        if (cantidadTotal === 0) {
            alert("Debes seleccionar al menos una entrada");
            return;
        }

        // Si la validación es correcta, avanzamos al paso Pago.
        setPasoActual(4);
    }

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

    {/* PASO 3: ENTRADAS */}
{pasoActual === 3 && (

    <div className="contenido-paso">

        <h2>Seleccioná tus entradas</h2>

        {/* Entrada General */}
        <div className="tipo-entrada">

            <div>
                <h3>General</h3>
                <p>$12.000</p>
            </div>

            <select
                value={general}
                onChange={(evento) =>
                    setGeneral(Number(evento.target.value))
                }
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>

        </div>


        {/* Entrada Menor */}
        <div className="tipo-entrada">

            <div>
                <h3>Menor</h3>
                <p>$8.000</p>
            </div>

            <select
                value={menor}
                onChange={(evento) =>
                    setMenor(Number(evento.target.value))
                }
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>

        </div>


        {/* Entrada Jubilado */}
        <div className="tipo-entrada">

            <div>
                <h3>Jubilado</h3>
                <p>$9.000</p>
            </div>

            <select
                value={jubilado}
                onChange={(evento) =>
                    setJubilado(Number(evento.target.value))
                }
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>

        </div>


        {/* Total calculado automáticamente */}
        <div className="total-entradas">
            Total: ${total.toLocaleString("es-AR")}
        </div>


        <div className="botones-navegacion">

            <button
                className="boton-anterior"
                onClick={() => setPasoActual(2)}
            >
                Anterior
            </button>

            <button
                className="boton-siguiente"
                onClick={validarEntradas}
            >
                Siguiente
            </button>

        </div>

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