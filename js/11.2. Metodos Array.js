// Metodos de Arrays

// Saber la longitud (tamaño) de un array ===========================================================================

let numeros = [10,20,30,40,50];
console.log(numeros.length); // 5 ==> porque hay 5 elementos

numeros.length(3); // Modificar la longitud del array ==> deja solo los primeros 3 elementos sin modificar el contenido

// Agregar elementos al final del array ===========================================================================

let numeros2 = [10,20,30,40,50];
numeros2.push(80); // Agregar un elemento al final del arreglo
console.log(numeros2); // [10, 20, 30, 40, 50, 80]

const frutas = ["plátano", "fresa"];
const nuevasFrutas = frutas.push("limón"); // El metodo push devuelve el nuevo array modificado
console.log(nuevasFrutas); // ["plátano", "fresa", "limón"]

// Insertar elemento al principio del array ===========================================================================

const frutas4 = ["plátano", "fresa", "naranja"]
frutas4.unshift("manzana")

console.log(frutas4) // ["manzana", "plátano", "fresa", "naranja"]

// Eliminar ultimo elemento del array ===========================================================================

const frutas2 = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop() // Elimina el último elemento del array y devuelve ese valor

console.log(frutas2) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"

// Eliminar primer elemento del array ===========================================================================

const frutas3 = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift() // Elimina el primer elemento del array y devuelve ese valor

console.log(frutas3) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"

// Concatenar dos arrays ===========================================================================

const numbers_concat = [1, 2, 3]
const numbers2_concat = [4, 5]

const allNumbers = numbers_concat.concat(numbers2_concat) // concat devuelve un nuevo array con los elementos de ambos arrays

console.log(allNumbers) // [1, 2, 3, 4, 5]

//Otra forma de concatenar dos arrays es con el spread operator (...)

const numbers3_concat = [1, 2, 3]
const numbers4_concat = [4, 5]

//                        1,2,3               4,5
const allNumbers2 = [...numbers3_concat, ...numbers4_concat]

console.log(allNumbers2) // [1, 2, 3, 4, 5]

