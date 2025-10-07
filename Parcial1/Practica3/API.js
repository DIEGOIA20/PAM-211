// Función que simula una petición a una API con retraso
function simularPeticionAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Datos recibidos correctamente");
    }, 3000); 
  });
}

// Función async que usa await para esperar el resultado
async function obtenerDatos() {
  console.log("Esperando los datos...");

  try {
    const resultado = await simularPeticionAPI();
    console.log(resultado); 
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Llamada a la función
obtenerDatos();
