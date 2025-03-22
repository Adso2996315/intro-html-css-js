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

// Slice ====================================================================================================

// Crea un nuevo array con una porcion del array original

array.slice(inicio, fin); // <- inicio es el indice del primer elemento(Incluyente) y fin es el indice del último elemento(Excluyente)

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstThreeNumbers = numbers5.slice(0, 3)
console.log(firstThreeNumbers) // [1, 2, 3]

// Splice ====================================================================================================

// Modifica el array original, eliminando elementos y/o insertando nuevos elementos

array.splice(index, cantidadDeElementos, elemento1, elemento2); 
// index es el indice del primer elemento a eliminar, 
// cantidadDeElementos es el número de elementos a eliminar
// los elementos que siguen son los nuevos elementos a insertar

const colores = ['rojo', 'verde', 'azul', 'amarillo'];

// Eliminar 2 elementos desde el índice 1
colores.splice(1, 2);
console.log(colores); // ['rojo', 'amarillo']

// Agregar elementos sin eliminar ninguno
colores.splice(1, 0, 'naranja', 'morado');
console.log(colores); // ['rojo', 'naranja', 'morado', 'amarillo']

// Reemplazar elementos (eliminar 1 y agregar 2)
colores.splice(2, 1, 'rosa', 'gris');
console.log(colores); // ['rojo', 'naranja', 'rosa', 'gris', 'amarillo']

// Join ====================================================================================================

// Devuelve un nuevo array convirtiendo un array en un string separando cada elemento con un separador (opcional)

const frutas = ['manzana', 'plátano', 'uva'];

// Unir con un espacio como separador
const frase = frutas.join(' ');
console.log(frase); // "manzana plátano uva"

// Unir con un guion como separador
const fraseConGuion = frutas.join('-');
console.log(fraseConGuion); // "manzana-plátano-uva"

// Sin especificar separador (usa la coma por defecto)
const frasePorDefecto = frutas.join();
console.log(frasePorDefecto); // "manzana,plátano,uva"

// Split ====================================================================================================

// Devuelve un nuevo array Dividiendo un string en un array de strings usando un separador (opcional)

const frase2 = "JavaScript es divertido";

// Dividir por espacios
const palabras = frase2.split(' ');
console.log(palabras); // ["JavaScript", "es", "divertido"]

// Dividir por letras específicas
const letras = frase2.split('e');
console.log(letras); // ["JavaScript ", "s div", "rtido"]

// Dividir cada carácter
const caracteres = frase2.split('');
console.log(caracteres); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "e", "s", " ", "d", "i", "v", "e", "r", "t", "i", "d", "o"]

// Con límite
const limitado = frase2.split(' ', 2); // solo hablan dos elementos en el array
console.log(limitado); // ["JavaScript", "es"]

// Reverse ====================================================================================================

// Modifica el array original, invertiendo el orden de los elementos

const numeros = [1, 2, 3, 4, 5];

// Invertir el array
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]