function validar() {
  const nombres = document.getElementById("nombres").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const email = document.getElementById("email").value.trim();
  const email2 = document.getElementById("email2").value.trim();
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  // Nombres
  if (!nombres) {
    alert("Nombres es requerido");
    return false;
  }
  if (nombres.length < 5 || nombres.length > 20) {
    alert("Nombres debe tener entre 5 y 20 caracteres");
    return false;
  }

  // Apellidos
  if (!apellidos) {
    alert("Apellidos es requerido");
    return false;
  }
  if (apellidos.length < 5 || apellidos.length > 20) {
    alert("Apellidos debe tener entre 5 y 20 caracteres");
    return false;
  }

  // Fecha de nacimiento
  if (!fechaNacimiento) {
    alert("Fecha de nacimiento es requerida");
    return false;
  }

  // Correos
  if (!email || !email2) {
    alert("Debe ingresar ambos correos");
    return false;
  }
  if (email !== email2) {
    alert("Los correos no coinciden");
    return false;
  }

  // Contraseñas
  if (!password || !password2) {
    alert("Debe ingresar ambas contraseñas");
    return false;
  }
  if (password !== password2) {
    alert("Las contraseñas no coinciden");
    return false;
  }

  // Todo OK
  return true;
}
