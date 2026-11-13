import { useState } from 'react';
import logo from '../assets/img/logo.png';
import './Cuenta.css';
import { validarFormularioIniciarSesion } from '../functions/validacionesCuenta';


function MiCuenta() {
    //Creamos una memoria (estado) para cada input del formulario
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
    //Función que se ejecuta al hacer clic en el botón "Registrarse"
    const manejarRegistro = () => {
    // Llama a la función de validación pasándole lo que escribió el usuario
    const esValido = validarFormularioIniciarSesion(email, password);

    if (!esValido) return; 

    window.location.href = '/editar-catalogo';
    }


    return (
        <div className="pagina-cuenta">
              <div className="contenedor">
                <div className="logo">
                  <img src={logo} alt="logo" className="logo" />
                </div>
        
                <div className="sesion">
                  <h2>Iniciar Sesión</h2> <br />
        
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
        
                    <button type="button" onClick={manejarRegistro}>
                      Iniciar Sesión
                    </button>
                  </form>
        
                  <br />
        
                  <a href="/crear-cuenta">No tienes cuenta? <br /> CREA UNA!</a>
                </div>
              </div>
            </div>
    );

}

export default MiCuenta;