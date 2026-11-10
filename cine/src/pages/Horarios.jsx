import { Link } from "react-router";
import "./Horarios.css";

function Horarios() {

    const programacion = [
        {
            id: 1,
            nombre: "Oppenheimer",
            valor: "oppenheimer",
            duracion: "3 h",
            horarios: {
                hoy: ["16:30", "19:00", "22:15"],
                manana: ["15:30", "18:30", "21:30"],
                viernes: ["17:00", "20:00", "23:00"]
            }
        },
        {
            id: 2,
            nombre: "Barbie",
            valor: "barbie",
            duracion: "1 h 54 min",
            horarios: {
                hoy: ["17:00", "20:00", "22:30"],
                manana: ["16:00", "19:00", "21:30"],
                viernes: ["15:30", "18:00", "20:30"]
            }
        },
        {
            id: 3,
            nombre: "Coraline",
            valor: "coraline",
            duracion: "1 h 55 min",
            horarios: {
                hoy: ["15:30", "18:30", "21:30"],
                manana: ["16:30", "19:30", "22:30"],
                viernes: ["17:30", "20:30", "23:00"]
            }
        }
    ];

    const hoy = new Date();

    const manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);

    const proximoViernes = new Date(hoy);

    let diasHastaViernes = (5 - hoy.getDay() + 7) % 7;

    if (diasHastaViernes <= 1) {
        diasHastaViernes += 7;
    }

    proximoViernes.setDate(
        hoy.getDate() + diasHastaViernes
    );

    const formatoFecha = {
        day: "2-digit",
        month: "2-digit"
    };

    const fechaHoy =
        hoy.toLocaleDateString("es-AR", formatoFecha);

    const fechaManana =
        manana.toLocaleDateString("es-AR", formatoFecha);

    const fechaViernes =
        proximoViernes.toLocaleDateString("es-AR", formatoFecha);


    return (
        <main className="pagina-horarios">
    
            <h1 className="titulo-horarios">HORARIOS</h1>
    
            <div className="contenedor-horarios">
    
                {programacion.map((pelicula) => (
    
                    <section
                        className="tarjeta-horario"
                        key={pelicula.id}
                    >
    
                        <div className="info-pelicula">
    
                            <h2>{pelicula.nombre}</h2>
    
                            <p>
                                Duración: {pelicula.duracion}
                            </p>
    
                        </div>
    
                        <div className="horarios-pelicula">
    
                            <div className="dia">
    
                                <p>Hoy · {fechaHoy}</p>
    
                                <div className="lista-horarios">
    
                                    {pelicula.horarios.hoy.map((hora) => (
                                        <Link
                                            key={hora}
                                            to={`/crear-cuenta?pelicula=${pelicula.valor}&dia=hoy&horario=${hora}`}
                                            className="boton-horario"
                                        >
                                            {hora}
                                        </Link>
                                    ))}
    
                                </div>
    
                            </div>
    
                            <div className="dia">
    
                                <p>Mañana · {fechaManana}</p>
    
                                <div className="lista-horarios">
    
                                    {pelicula.horarios.manana.map((hora) => (
                                        <Link
                                            key={hora}
                                            to={`/crear-cuenta?pelicula=${pelicula.valor}&dia=manana&horario=${hora}`}
                                            className="boton-horario"
                                        >
                                            {hora}
                                        </Link>
                                    ))}
    
                                </div>
    
                            </div>
    
                            <div className="dia">
    
                                <p>Próximo viernes · {fechaViernes}</p>
    
                                <div className="lista-horarios">
    
                                    {pelicula.horarios.viernes.map((hora) => (
                                        <Link
                                            key={hora}
                                            to={`/crear-cuenta?pelicula=${pelicula.valor}&dia=viernes&horario=${hora}`}
                                            className="boton-horario"
                                        >
                                            {hora}
                                        </Link>
                                    ))}
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </section>
    
                ))}
    
            </div>
    
        </main>
        );
}

export default Horarios;