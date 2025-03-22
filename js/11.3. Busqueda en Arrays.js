// Busqueda en Arrays

// IndexOf ====================================================================================================

const frutas = ["🍎", "🍌", "🍓"];

console.log(frutas.indexOf("🍌")); // imprime el índice de la primera aparición de "🍌" ==> 1

// Includes ====================================================================================================

const frutas2 = ["🍎", "🍌", "🍓"];

console.log(frutas2.includes("🍌")); // Determina si el array contiene el elemento "🍌" ==> true

// Some ====================================================================================================

// Determina si AL MENOS UNO de los elementos cumple una condición toma como parametro una funcion que devuelve un booleano

const names = ['Leo', 'Isa', 'Ían', 'Lea']
console.log(names.some(name => name.length > 3)) // Retorna un false porque ningun elemento de la cadena cumple la condición

// Nota: Some deja de iterar cuando encuentra un elemento que cumpla la condición o cuando se alcanza el final del array

// Every ====================================================================================================

// Determina si TODOS los elementos cumplen una condición toma como parametro una funcion que devuelve un booleano

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// Nota: Every deja de iterar cuando encuentra un elemento que NO cumpla la condición o cuando se alcanza el final del array

// Find ====================================================================================================

// Encuentra el PRIMER elemento que cumpla una condición toma como parametro una funcion

const numbers2 = [13, 27, 44, -10, 81]
const firstNegativeNumber = numbers.find(number => number < 0)
console.log(firstNegativeNumber) // -> -10

//NOTA: Si no encuentra ningún elemento que cumpla con la condición, el método find retorna undefined.
//NOTA: Find deja de iterar cuando encuentra un elemento que cumpla la condición o cuando se alcanza el final del array

// FindIndex ====================================================================================================

// Encuentra el PRIMER elemento que cumpla una condición pero retorna es su INDICE, toma como parametro una funcion

const numbers3 = [13, 27, 44, -10, 81]

const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)
console.log(firstNegativeNumberIndex) // -> 3

//NOTA: Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.
