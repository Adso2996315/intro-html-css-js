// Arreglos o Arrays (listas)

const numeros = [10,20,30,40,50];
    //Indices =  0  1  2  3  4     se empieza a contar desde cero


// Acceder a los valores de un arreglo ===========================================================================

console.log(numeros[0]); // 10
console.log(numeros[1]); // 20
console.log(numeros[2]); // 30
console.log(numeros[3]); // 40
console.log(numeros[4]); // 50
console.log(numeros[5]); // undefined ==> se intenta acceder a un elemento que no existe

// Modificar los valores de un arreglo ===========================================================================

const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10 // ==> se asigna un valor con ==> =
numbers[2] = 30

console.log(numbers) // [10, 2, 30, 4, 5]


// Conocer la extensión (tamaño) de un array
console.log(meses.length());    //-> 5 <-

numeros.forEach( function(numero) {      //forEach itera todos los elementos de un array
    console.log(numero);
})


// modificar elementos de un Array
numeros.push(60,70,80);            // Agregar un elemento al final del arreglo
numeros.unshift(-10,-20,-30);      // Agregar un elemento al inicio del arreglo

console.table(numeros);

const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo'];

meses.pop();        // elimina el último elemento
meses.shift();      // elimina el primer elemento

meses.splice(2, 1);      // splice toma dos argumentos, 1. desde donde eliminar elementos - 2. cuantos elementos eliminar de ahi en adelante
console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo2 = [...meses, 'Junio'];    // forma mejor de agregar elementos al inicio porque no editas el array original
const nuevoArreglo1 = ['Junio', ...meses];    // forma mejor de agregar elementos al final porque no editas el array original
console.log(nuevoArreglo);
