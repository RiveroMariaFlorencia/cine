// Agregamos "export" adelante para poder importar estas funciones desde CrearCuenta.jsx y MiCuenta.jsx


// VALIDA EL INICIO DE SESIÓN
export const validarFormularioIniciarSesion = (email, password) => {
    if (!email || !password) {
      alert("Por favor, completá todos los campos");
      return false;
    }
  
    if (email !== "flor@email.com" && email !== "anto@email.com") {
      alert("Los emails no coinciden");
      return false;
    }
  
    if (password !== "123") {
      alert("PASSWORD INCORRECTO");
      return false;
    }
  
    return true;
  };
  

  // VALIDA EL FORMULARIO DE REGISTRO
  export const validarFormularioRegistrarse = (email, dni, password, passwordC) => {
    // 1. Verifica que ningún campo esté vacío
    if (!email || !dni || !password || !passwordC) {
      alert("Por favor, completá todos los campos");
      return false;
    }
  
    // 2. Verifica que el mail no esté ya registrado
    if (email === "flor@email.com" || email === "anto@email.com") {
      alert("Email ya registrado");
      return false;
    }
  
    // 3. Valida que el DNI tenga 8 números
    if (String(dni).length !== 8) {
      alert("DNI no válido (debe tener 8 números)");
      return false;
    }
  
    // 4. Verifica que las dos contraseñas coincidan
    if (password !== passwordC) {
      alert("Las contraseñas no coinciden");
      return false;
    }
  
    return true;
  };