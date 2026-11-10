import "./Cartelera.css";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import { Link } from "react-router";

import barbie from "../../assets/img/portadaPeliculas/barbie.png";
import coraline from "../../assets/img/portadaPeliculas/coraline.png";
import oppenheimer from "../../assets/img/portadaPeliculas/oppenheimer.png";

function Cartelera() {

    const peliculas = [
        {
            id: 1,
            titulo: "Barbie",
            genero: "Comedia / Fantasía",
            duracion: "1 h 54 min",
            descripcion: "Barbie descubre un mundo fuera de Barbieland.",
            imagen: barbie
        },
        {
            id: 2,
            titulo: "Coraline",
            genero: "Animación / Fantasía",
            duracion: "1 h 55 min",
            descripcion: "Coraline encuentra un mundo alternativo detrás de una puerta secreta.",
            imagen: coraline
        },
        {
            id: 3,
            titulo: "Oppenheimer",
            genero: "Drama / Historia",
            duracion: "3 h",
            descripcion: "La historia del científico J. Robert Oppenheimer.",
            imagen: oppenheimer
        }
    ];

    return (
        <section className="cartelera">

            <h2>PELÍCULAS</h2>

            <div className="lista-peliculas">

                {peliculas.map((pelicula) => (  /* map: Recorre el array de peliculas */
                    <TarjetaPelicula
                        key={pelicula.id}
                        imagen={pelicula.imagen}
                        titulo={pelicula.titulo}
                        genero={pelicula.genero}
                        duracion={pelicula.duracion}
                        descripcion={pelicula.descripcion}
                    />
                ))}

                <Link
                    to="/horarios"
                    className="boton-horarios"
                >
                    CONSULTAR HORARIOS
                </Link>

            </div>

        </section>
    );
}

export default Cartelera;