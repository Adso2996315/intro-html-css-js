/*
    ¿Qué son las Promesas en JavaScript?

    - Una Promesa (Promise) es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.
    - Permiten manejar código asíncrono de manera más sencilla y legible que usando callbacks.
    - Una promesa puede estar en uno de estos estados:
        1. Pending (pendiente): Estado inicial, ni cumplida ni rechazada.
        2. Fulfilled (cumplida): La operación se completó exitosamente.
        3. Rejected (rechazada): La operación falló.
    - Se usan los métodos .then() para manejar el éxito y .catch() para manejar errores.

    Sintaxis básica:
*/
    const promesa = new Promise((resolve, reject) => {
        // Operación asíncrona
        if (todoBien) {
            resolve(valor); // Se cumple la promesa
        } else {
            reject(error); // Se rechaza la promesa
        }
    });

// Ejemplo 1: Promesa que se resuelve después de 2 segundos
const promesaSimple = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡La promesa se cumplió!");
    }, 2000);
});

// Consumir la promesa
promesaSimple.then(resultado => {
    console.log("Éxito:", resultado); // Se ejecuta si la promesa se cumple
}).catch(error => {
    console.error("Error:", error); // Se ejecuta si la promesa es rechazada
});

/*
    Ejemplo 2: Promesa que puede cumplirse o rechazarse según una condición
*/
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 10) {
            resolve("El número es mayor que 10");
        } else {
            reject("El número NO es mayor que 10");
        }
    });
}

verificarNumero(15)
    .then(msg => console.log(msg)) // "El número es mayor que 10"
    .catch(err => console.error(err));

verificarNumero(5)
    .then(msg => console.log(msg))
    .catch(err => console.error(err)); // "El número NO es mayor que 10"

/*
    Ventajas de las promesas:
    - Evitan el "callback hell" (anidamiento excesivo de callbacks).
    - Permiten encadenar operaciones asíncronas con .then().
    - Facilitan el manejo de errores con .catch().
*/

/*
    Ejemplo 3: Encadenamiento de promesas
*/
function sumarAsync(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

sumarAsync(2, 3)
    .then(resultado => {
        console.log("Resultado 1:", resultado); // 5
        return sumarAsync(resultado, 4); // aqui se encadena otra promesa
    })
    .then(resultado2 => {
        console.log("Resultado 2:", resultado2); // 9
    })
    .catch(error => {
        console.error("Error en la suma:", error);
    });

/*
    Resumen:
    - Las promesas son una forma moderna y poderosa de manejar operaciones asíncronas en JavaScript.
    - Mejoran la legibilidad y el manejo de errores en el código.
*/