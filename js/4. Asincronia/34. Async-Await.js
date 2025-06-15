// Async / Await es una forma moderna y sencilla de trabajar con código asíncrono en JavaScript.
// Permite escribir código asíncrono que parece síncrono, facilitando la lectura y el manejo de errores.

// 1. Una función async siempre devuelve una promesa.
async function ejemploAsync() {
  return "Hola desde async";
}

// Podemos usar .then() para obtener el resultado:
ejemploAsync().then(resultado => console.log(resultado)); // "Hola desde async"

// 2. Await solo puede usarse dentro de funciones async.
// Await pausa la ejecución de la función hasta que la promesa se resuelve o rechaza.

function promesaConRetraso() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("¡Promesa resuelta después de 2 segundos!");
    }, 2000);
  });
}

async function usarAwait() {
  console.log("Esperando la promesa...");
  // Aquí, await espera a que la promesa se resuelva antes de continuar.
  const resultado = await promesaConRetraso();
  console.log(resultado); // "¡Promesa resuelta después de 2 segundos!"
}

usarAwait();

// 3. Manejo de errores con try/catch en funciones async
async function ejemploError() {
  try {
    // Si la promesa se rechaza, el control pasa al catch
    const resultado = await Promise.reject("Ocurrió un error");
    console.log(resultado); // Esto no se ejecuta
  } catch (error) {
    console.error("Error capturado:", error); // "Error capturado: Ocurrió un error"
  }
}

ejemploError();

/*
Resumen:
- async convierte una función en asíncrona y siempre retorna una promesa.
- await pausa la ejecución hasta que la promesa se resuelve o rechaza.
- try/catch permite manejar errores de manera sencilla en funciones async.
- Es ideal para trabajar con operaciones asíncronas como peticiones HTTP, timers, etc.
*/
