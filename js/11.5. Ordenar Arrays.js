// Ordenar Arrays

// Sort ====================================================================================================

let numeros = [5, 10, 2, 25, 7]
numeros.sort()
console.log(numeros) // [10, 2, 25, 5, 7] 

// NOTA: .sort()ordenará los números en función de su valor como cadena de texto, no de su valor numérico.

// Solucion de Sort (con numeros)

let numeros2 = [5, 10, 2, 25, 7]

numeros2.sort(function(a, b) {
  return a - b // devuelve un número negativo si a es menor que b, positivo si a es mayor que b y cero si son iguales
})

//Lo ordena de manera ascendente
console.log(numeros2) // [2, 5, 7, 10, 25]

// NOTA: Sort Modifica el array original

// ToSorted ====================================================================================================

// Funciona igual que sort pero devuelve un nuevo array ordenado

let numeros3 = [5, 10, 2, 25, 7]

let numerosOrdenados = numeros3.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros3) // [5, 10, 2, 25, 7]

// Tambien puedes usar el spread operator (...) para devolver un nuevo array

const numeros4 = [5, 10, 2, 25, 7]

const copiaNumeros = [...numeros4]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros4) // [5, 10, 2, 25, 7]



