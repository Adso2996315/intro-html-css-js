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