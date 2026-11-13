import { useState } from 'react';
import { Link } from "react-router";
import './EditarCatalogo.css';


function EditarCatalogo() {
  // Guarda la lista de películas en un estado para poder modificarla
  const [peliculas, setPeliculas] = useState([
    "Barbie",
    "Oppenheimer",
    "Coraline y la puerta secreta",
  ]);

  // Guardamos en otro estado qué películas tienen el checkbox marcado
  const [seleccionadas, setSeleccionadas] = useState([]);

  // Función del botón Agregar
  const agregar = () => {
    alert("Realizado con exito");
  };

  // Se ejecuta cada vez que marcás o desmarcás un checkbox
  const manejarCheckbox = (titulo) => {
    if (seleccionadas.includes(titulo)) {
      // Si ya estaba marcada, la sacamos de la lista de seleccionadas
      setSeleccionadas(seleccionadas.filter((item) => item !== titulo));
    } else {
      // Si no estaba marcada, la agregamos a la lista de seleccionadas
      setSeleccionadas([...seleccionadas, titulo]);
    }
  };

  // Función del botón Eliminar
  const confirmacion = () => {
    // Si no seleccionó ninguna película, avisa
    if (seleccionadas.length === 0) {
      alert("Por favor, seleccione al menos una película para eliminar.");
      return;
    }

    // Filtra la lista dejando solo las películas que NO fueron seleccionadas
    const peliculasRestantes = peliculas.filter(
      (titulo) => !seleccionadas.includes(titulo)
    );

    // Actualiza la lista en pantalla y vacia los checkboxes marcados
    setPeliculas(peliculasRestantes);
    setSeleccionadas([]);

    alert("Se ha eliminado correctamente");
  };


  return (
    <div className="pagina-editar">
      <nav>
        <Link to="/">CINEMASTER</Link>
        <p>Bienvenida!</p>
      </nav>

      <div className="editar">
        <div>
          <h2>Seleccione que operación desea realizar sobre el catálogo:</h2>
        </div>

        <div className="formulario">
          <div className="contenedor">
            <details>
              <summary>Agregar pelicula</summary>
              <div className="contenido">
                <label htmlFor="titulo">Titulo Original: </label>
                <input type="text" id="titulo" name="titulo" placeholder="Ingrese titulo de la pelicula" /><br />

                <label htmlFor="origen">Origen: </label>
                <input type="text" id="origen" name="origen" placeholder="Ingrese origen de la pelicula" /><br />

                <label htmlFor="genero">Género: </label>
                <input type="text" id="genero" name="genero" placeholder="Ingrese el género de la pelicula" /><br />

                <label htmlFor="director">Director: </label>
                <input type="text" id="director" name="director" placeholder="Ingrese el nombre completo del director de la pelicula" /><br />

                <label htmlFor="actores">Actores: </label>
                <input type="text" id="actores" name="atores" placeholder="Ingrese el nombre completo de los actores principales de la pelicula" /><br />

                <label htmlFor="calificacion">Calificación: </label>
                <input type="text" id="calificacion" name="calificacion" placeholder="Ingrese la calificación de la pelicula" /><br />

                <label htmlFor="duracion">Duración: </label>
                <input type="number" id="duracion" name="duracion" placeholder="Ingrese la duración de la pelicula" /><br />

                <label htmlFor="distribuidora">Distribuidora: </label>
                <input type="text" id="distribuidora" name="distribuidora" placeholder="Ingrese la distribuidora de la pelicula" /><br />

                <label htmlFor="portada">Portada: </label>
                <input type="file" id="portada" name="portada" accept="image/*" /><br />

                <label htmlFor="trailer">Tráiler: </label>
                <input type="url" id="trailer" name="trailer" placeholder="Ingrese la url del trailer desde YouTube" /><br />
              </div>

              <button type="button" className="confirmar" onClick={agregar}>
                Agregar
              </button>
            </details>
          </div>
        </div>

        <div className="eliminarPeli">
          <div className="contenedor">
            <details>
              <summary>Eliminar pelicula</summary>
              <div className="contenido">
                <p>Seleccione la película que desea eliminar:</p> <br />

                {/* Con .map() recorremos la lista */}
                <div id="listaPeliculas" className="listaPeliculas">
                  {peliculas.map((titulo) => (
                    <label key={titulo} className="opcionPelicula">
                      <input
                        type="checkbox"
                        checked={seleccionadas.includes(titulo)}
                        onChange={() => manejarCheckbox(titulo)}
                      />{" "}
                      {titulo}
                    </label>
                  ))}
                </div>

                <button type="button" className="confirmar" onClick={confirmacion}>
                  Eliminar
                </button>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarCatalogo;