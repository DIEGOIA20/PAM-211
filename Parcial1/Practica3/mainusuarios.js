// mainUsuarios.js
import { verificarUsuario } from "./usuarios.js";

// Prueba con admin
verificarUsuario("admin")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Prueba con otro usuario
verificarUsuario("Ivan")
  .then(res => console.log(res))
  .catch(err => console.error(err));
