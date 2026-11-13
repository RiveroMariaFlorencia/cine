import { useState } from 'react';
import logo from '../assets/img/logo.png';
import './Cuenta.css';
import { validarFormularioRegistrarse } from '../functions/validacionesCuenta';


function CrearCuenta() {
  //Creamos una memoria (estado) para cada input del formulario
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');


  //Función que se ejecuta al hacer clic en el botón "Registrarse"
  const manejarRegistro = () => {
    // Llama a la función de validación pasándole lo que escribió el usuario
    const esValido = validarFormularioRegistrarse(email, dni, password, passwordC);

    if (!esValido) return;

    // Recupera película, día y horario de la URL
    const parametros = new URLSearchParams(window.location.search);
    const pelicula = parametros.get('pelicula');
    const dia = parametros.get('dia');
    const horario = parametros.get('horario');

    // Si hay parametros, redirige a comprar-ticket en el paso 3
    if (pelicula && dia && horario) {
        window.location.href = `/comprar-ticket?pelicula=${pelicula}&dia=${dia}&horario=${horario}`;
    } else {
        // Si no hay parametros, redirige a comprar-ticket en el paso 1
        window.location.href = '/comprar-ticket';
    }
    };


  return (

    <div className="pagina-cuenta">
      <div className="contenedor">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="sesion">
          <h2>Registrarse</h2> <br />

          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="emailRegistrarse"
              name="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} //Evento que se dispara cuando el valor del campo de entrada cambia
              required
            /><br />

            <label htmlFor="dni">DNI</label>
            <input
              type="number"
              id="dniRegistrarse"
              name="dni"
              placeholder="Ingrese su dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            /><br />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="passwordRegistrarse"
              name="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br />

            <label htmlFor="password">Confirme su contraseña</label>
            <input
              type="password"
              id="passwordRegistrarseConfirmacion"
              name="password"
              placeholder="Confirme su contraseña"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
              required
            /><br />

            <button type="button" onClick={manejarRegistro}>
              Registrarse
            </button>
          </form>

          <br />

          <a href="/mi-cuenta">Ya tienes cuenta? <br /> INGRESA!</a>
        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;