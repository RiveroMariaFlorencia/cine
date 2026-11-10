import "./TarjetaPelicula.css";

function TarjetaPelicula(props) {
    return (
        <div className="tarjeta-pelicula">

            <img
                src={props.imagen}     /* props: este componente permite recibir info desde afuera */
                alt={props.titulo}
                className="portada-pelicula"
            />

            <div className="descripcion-pelicula">
                <h3>{props.titulo}</h3>
                <p>{props.genero}</p>
                <p>{props.duracion}</p>
                <p>{props.descripcion}</p>
            </div>

        </div>
    );
}

export default TarjetaPelicula;