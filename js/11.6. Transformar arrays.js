// Transformar Arrays

// Filter ====================================================================================================

// Crea un nuevo array con los elementos que cumplen una condición toma como parametro una funcion

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers) // [2, 4, 6, 8, 10]

// Map ====================================================================================================

// Crea un nuevo array de la misma longitud que el original pero con los elementos transformados, toma como parametro una funcion

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const squaredNumbers = numbers2.map(number => number ** 2)
console.log(squaredNumbers) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Map + Filter (concatenar metodos) ============================================================================

const numbers3 = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers3
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]

// Reduce ====================================================================================================

// Reduce es un método que toma como parametro una función y un valor inicial, y devuelve el resultado de la función

const numbers4 = [1, 2, 3]

const sum = numbers4.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6

/* Iteración 1: 
el acumulador vale 0 (ya que 0 es el valor inicial) y el elemento actual vale 1. Así que devolvemos 0 + 1 = 1
Iteración 2: 
el acumulador vale 1 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 2. Así que devolvemos 1 + 2 = 3
Iteración 3: 
el acumulador vale 3 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 3. Así que devolvemos 3 + 3 = 6
*/

