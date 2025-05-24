// --- Parámetros REST ============================================================================================

// Permiten a una función recibir un número indefinido de argumentos como un array.

function sumar(...numeros) {
    // 'numeros' es un array con todos los argumentos pasados
    return numeros.reduce((total, n) => total + n, 0);
}

console.log(sumar(1, 2, 3));        // 6
console.log(sumar(5, 10, 15, 20));  // 50

// Puedes combinar parámetros normales y REST (el REST debe ir al final)
function mostrarDatos(nombre, ...otrosDatos) {
    console.log('Nombre:', nombre);
    console.log('Otros datos:', otrosDatos);
}

mostrarDatos('Juan', 25, 'Colombia', 'Desarrollador');
// Nombre: Juan
// Otros datos: [25, 'Colombia', 'Desarrollador']


// --- Operador SPREAD ============================================================================================
// Permite expandir (descomponer) elementos de un array u objeto donde se esperan varios elementos.

const numeros = [1, 2, 3];
console.log(...numeros); // 1 2 3

// Ejemplo: copiar arrays
const copia = [...numeros];
console.log(copia); // [1, 2, 3]

// Ejemplo: combinar arrays
const masNumeros = [4, 5, 6];
const combinados = [...numeros, ...masNumeros];
console.log(combinados); // [1, 2, 3, 4, 5, 6]

// Ejemplo: pasar elementos de un array como argumentos
function multiplicar(a, b, c) {
    return a * b * c;
}
console.log(multiplicar(...numeros)); // 6

// SPREAD también funciona con objetos (ES2018+)
const persona = { nombre: 'Ana', edad: 30 };
const personaActualizada = { ...persona, ciudad: 'Bogotá' };
console.log(personaActualizada);
// { nombre: 'Ana', edad: 30, ciudad: 'Bogotá' }