// For Loop  ==> Se usa cuando se sabe cuantas veces se va a ejecutar el código

for (inicialización; condición; actualización) {
  // código a ejecutar
}

// Ejemplo ==========
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// Ejemplo ==========
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue; // <---- saltamos a la siguiente iteración con la palabra reservada continue
  }
  console.log(i); // Solo mostramos este consola.log si es impar
  if (i === 7) {
    // Salimos del bucle al llegar al 7
    break; // <---- salimos del bucle con la palabra reservada break
  }
}

//==================================================================================================
// Bucle While ==> Se usa cuando no se sabe cuantas veces se va a ejecutar el código

while (condición) {
  // código a ejecutar mientras se cumpla la condición
}

// Ejemplo ==========
let cuentaAtras = 10;
// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras);
  // restamos 1 a la cuenta atrás
  cuentaAtras--;
}
console.log("¡Despegue! 🚀");

// Ejemplo ==========
let cuentaAtras2 = 10;

while (cuentaAtras2 > 0) {
  console.log(cuentaAtras2);
  cuentaAtras2--;

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break; // <---- salimos del bucle con la palabra reservada break
  }

  if (cuentaAtras % 2 === 0) {
    continue; // <---- saltamos a la siguiente iteración con la palabra reservada continue
  }
}

//==================================================================================================
// Do While Loop ==> ejecuta al menos una vez el codigo y luego se verifica la condición

// Ejemplo ==========
let i = 100;

do {
  console.log(i);
  i++;
} while (i < 10);

