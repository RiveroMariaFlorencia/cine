import "./ComprarTicket.css";

// Componente principal de la página de compra.
// En React, un componente es una función que devuelve JSX.
function ComprarTicket() {

    return (
        <main className="pagina-compra">

            <h1>COMPRAR ENTRADAS</h1>

            <section className="contenedor-compra">

                <p>
                    Acá vamos a construir el proceso de compra
                    paso a paso.
                </p>

            </section>

        </main>
    );
}

// Exportamos el componente para poder usarlo
// desde App.jsx mediante React Router.
export default ComprarTicket;