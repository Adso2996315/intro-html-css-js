// TRY - CATCH       //Se utiliza para capturar un error y hagamos algo con el

const numero1 = 20;
const numero3 = 30;

console.log(numero1);

try {
  console.log(numero2); // prueba este codigo
} catch (error) {
  console.log(error); // Si hay algun error en el TRY, se ejecuta el catch y se puede manipular el error
}

console.log(numero3);

try {
  console.log("En el Try se agrega el código a evaluar");
  noExiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log(
    "El bloque finally se ejecutará siempre al final de unbloque try-catch"
  );
}

// Ejemplo de uso

try {
  let numero = "y";

  if (isNaN(numero)) {
    throw new Error("El caractér introducido no es un Número");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
