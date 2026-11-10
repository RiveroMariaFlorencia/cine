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

    // Estados del formulario de pago.
    // Cada estado guarda lo que escribe el usuario en un input.
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [titular, setTitular] = useState("");
    const [vencimiento, setVencimiento] = useState("");
    const [cvv, setCvv] = useState("");

    // Indica si la compra ya fue confirmada.
    // Al principio es false porque todavía no terminó.
    const [compraFinalizada, setCompraFinalizada] = useState(false);

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


    // Valida los datos ingresados antes de avanzar al resumen.
    function validarPago() {

        // trim() elimina espacios al principio y al final.
        if (
            nombre.trim() === "" ||
            email.trim() === "" ||
            tarjeta.trim() === "" ||
            titular.trim() === "" ||
            vencimiento.trim() === "" ||
            cvv.trim() === ""
        ) {
            alert("Debes completar todos los campos");
            return;
        }

        // Valida un formato básico de email.
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {
            alert("Email no válido");
            return;
        }

        // La tarjeta debe tener exactamente 16 números.
        const regexTarjeta = /^\d{16}$/;

        if (!regexTarjeta.test(tarjeta)) {
            alert("La tarjeta debe tener 16 dígitos");
            return;
        }

        // El vencimiento debe tener formato MM/AA.
        const regexVencimiento = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!regexVencimiento.test(vencimiento)) {
            alert("El vencimiento debe tener formato MM/AA");
            return;
        }

        // Separamos mes y año
        const [mes, anio] = vencimiento.split("/").map(Number);

        // Convertimos el año de 2 dígitos a 4 dígitos.
        // Ejemplo: 28 -> 2028
        const anioCompleto = 2000 + anio;

        // Obtenemos la fecha actual
        const fechaActual = new Date();

        const mesActual = fechaActual.getMonth() + 1;
        const anioActual = fechaActual.getFullYear();

        // Validamos si la tarjeta está vencida
        if (
            anioCompleto < anioActual ||
            (anioCompleto === anioActual && mes < mesActual)
        ) {
            alert("La tarjeta está vencida");
            return;
        }

        // El CVV debe tener exactamente 3 números.
        const regexCvv = /^\d{3}$/;

        if (!regexCvv.test(cvv)) {
            alert("El CVV debe tener 3 dígitos");
            return;
        }

        // Si todas las validaciones son correctas,
        // avanzamos al Paso 5.
        setPasoActual(5);
    }

    // Confirma la compra.
    // Cambiamos el estado y React actualiza automáticamente la interfaz.
    function finalizarCompra() {
        setCompraFinalizada(true);
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
                    compraFinalizada
                        ? "completado"
                        : numeroPaso === pasoActual
                        ? "activo"
                        : numeroPaso < pasoActual
                        ? "completado"
                        : ""
                }`}
                key={numeroPaso}
            >

                <div className="circulo">
                    {compraFinalizada || numeroPaso < pasoActual
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

{/* PASO 4: PAGO */}
{pasoActual === 4 && (

    <div className="contenido-paso">

        <h2>Datos de pago</h2>

        <div className="campo-pago">
            <label htmlFor="nombre">
                Nombre y apellido
            </label>

            <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(evento) =>
                    setNombre(evento.target.value)
                }
            />
        </div>


        <div className="campo-pago">
            <label htmlFor="email">
                Email
            </label>

            <input
                id="email"
                type="email"
                value={email}
                onChange={(evento) =>
                    setEmail(evento.target.value)
                }
            />
        </div>


        <div className="campo-pago">
            <label htmlFor="tarjeta">
                Número de tarjeta
            </label>

            <input
                id="tarjeta"
                type="text"
                value={tarjeta}
                maxLength={16}
                onChange={(evento) =>
                    setTarjeta(evento.target.value)
                }
            />
        </div>


        <div className="campo-pago">
            <label htmlFor="titular">
                Titular
            </label>

            <input
                id="titular"
                type="text"
                value={titular}
                onChange={(evento) =>
                    setTitular(evento.target.value)
                }
            />
        </div>


        <div className="campo-pago">
            <label htmlFor="vencimiento">
                Vencimiento
            </label>

            <input
                id="vencimiento"
                type="text"
                placeholder="MM/AA"
                value={vencimiento}
                maxLength={5}
                onChange={(evento) =>
                    setVencimiento(evento.target.value)
                }
            />
        </div>


        <div className="campo-pago">
            <label htmlFor="cvv">
                CVV
            </label>

            <input
                id="cvv"
                type="text"
                value={cvv}
                maxLength={3}
                onChange={(evento) =>
                    setCvv(evento.target.value)
                }
            />
        </div>


        <div className="botones-navegacion">

            <button
                className="boton-anterior"
                onClick={() => setPasoActual(3)}
            >
                Anterior
            </button>

            <button
                className="boton-siguiente"
                onClick={validarPago}
            >
                Siguiente
            </button>

        </div>

    </div>

)}

{/* PASO 5: FINALIZAR */}
{pasoActual === 5 && (

    <div className="contenido-paso">

        {!compraFinalizada ? (

            <>
                <h2>Resumen de compra</h2>

                <div className="resumen-compra">

                    <p>
                        <strong>Película:</strong> {pelicula}
                    </p>

                    <p>
                        <strong>Día:</strong> {dia}
                    </p>

                    <p>
                        <strong>Horario:</strong> {horario}
                    </p>

                    <p>
                        <strong>Entrada General:</strong> {general}
                    </p>

                    <p>
                        <strong>Entrada Menor:</strong> {menor}
                    </p>

                    <p>
                        <strong>Entrada Jubilado:</strong> {jubilado}
                    </p>

                    <p className="total-resumen">
                        <strong>
                            Total: ${total.toLocaleString("es-AR")}
                        </strong>
                    </p>

                </div>

                <div className="botones-navegacion">

                    <button
                        className="boton-anterior"
                        onClick={() => setPasoActual(4)}
                    >
                        Anterior
                    </button>

                    <button
                        className="boton-siguiente"
                        onClick={finalizarCompra}
                    >
                        Confirmar compra
                    </button>

                </div>
            </>

        ) : (

            <div className="compra-exitosa">

                <h2>¡Compra realizada con éxito!</h2>

                <p>
                    Tu compra para {pelicula} fue confirmada.
                </p>

                <p>
                    {dia} · {horario}
                </p>

                <p>
                    Total pagado: ${total.toLocaleString("es-AR")}
                </p>

            </div>

        )}

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