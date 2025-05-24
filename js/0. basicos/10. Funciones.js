// Declaración de Función (contiene hoisting)

function sumar() { 
    console.log(10 + 10);
}

sumar(); //llamado a la funcion despues de declararla pero tambien se puede llamar antes de crearla gracias al hoisting
sumar();
sumar();

// function expression  ==> Es una funcion que se asigna a una variable (no contiene hoisting)

const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2(); //llamado a la funcion


/* HOISTING -> todas las funciones que se declaren con "function" js las llevara
al inicio del codigo (sentido figurado) y luego las ejecuta por ello podemos llamar
a una funcion antes de crearla y no va a marcar error...el hoisting no funciona
con funciones declaradas en una variable*/

//==========================================================================================================
// Funciones con parámetros

function sumar(a, b) { // a y b son los parámetros que recibe
    console.log(a + b);
}

sumar(10, 10); // llamada a la funcion con los argumentos(valores reales) que piden los parámetros

//==========================================================================================================
// Retorno de valores de una función

function sumar(a, b) {
    return a + b; // return es la palabra reservada que se utiliza para que la función devuelva un valor
}

// podemos guardar el resultado en una variable
const resultado = sumar(1, 2);
// o ver en consola directamente el resultado
console.log(sumar(1, 2)) // -> 3

//==========================================================================================================
// Funciones puras e impuras

// Una función pura es aquella que, dado el mismo conjunto de entradas (inputs), siempre devuelve el mismo resultado (output) y no tiene efectos
// secundarios (side effects). Por ejemplo, una función pura no modifica variables externas ni depende de ellas.

function funcionPura(a, b) {
    return a + b; // Siempre devuelve el mismo resultado para los mismos valores de a y b
}

console.log(funcionPura(2, 3)); // -> 5
console.log(funcionPura(2, 3)); // -> 5 (siempre el mismo resultado)

// Una función impura, por el contrario, puede devolver resultados diferentes para los mismos inputs o tener efectos secundarios, 
// como modificar variables externas o depender de ellas.

let numero = 10;

function funcionImpura(a) {
    numero += a; // Modifica una variable externa (efecto secundario)
    return numero;
}

console.log(funcionImpura(5)); // -> 15
console.log(funcionImpura(5)); // -> 20 (resultado diferente para el mismo input)

// Las funciones puras son más predecibles y fáciles de probar, mientras que las impuras pueden ser útiles en ciertos casos 
// pero requieren más cuidado.