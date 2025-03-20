//Operadores aritmeticos

let suma = 2 + 2  // 4
    resta = 8 - 3  // 5
    multiplicacion = 10 * 2 // 20
    division = 30 / 2 // 15
    modulo_resto = 8 % 2 // 0   muestra el residuo de una divison
    incremento = 3++   // 4    suma el elemento mas 1
    decremento = 12--  // 11   resta el elemento menos 1
    potencia = 2 ** 3 // 8

// Orden de las operaciones ===================================================================================================

let resultado0;

resultado0 = (20 + 30) * 2;    // lo que esta en parentesis se calcula primero

resultado0 = ( 600 + 600 ) * 1.05;   // lo que esta en parentesis se calcula primero
  

console.log(resultado);

// Incrementos =================================================================================================================

let puntaje = 10;

puntaje++           // aqui a puntaje se le suma 1 y asi con todos los operadores aritmeticos

puntaje += 10;     // aqui se suma puntaje + 10 y asi con todos los operadores aritmeticos
console.log(puntaje);

// En javascript las operaciones siguen un orden de precedencia como en matematicas

let resultado;
resultado = (20 + 30) * 2;    // lo que esta en parentesis se calcula primero
resultado = ( 600 + 600 ) * 1.05;   // lo que esta en parentesis se calcula primero

//Operadores comparativos ==> Retorna un valor booleano =========================================================================

20 > 10   // true  --  mayor que
26 < 92   // true  --  menor que
20 >= 89  // false  --  mayor o igual que
78 <= 100 // true  --  menor o igual que

90 === "90"  // false  --  igualdad estricta ==> compara tambien el tipo
90 == "90"  // true  --  igualdad simple ==> compara solo el valor

90 !== 90   // false  --  diferencia estricta ==> compara tambien el tipo
90 != "90"  // true  --  diferencia simple ==> compara solo el valor

// Comparacion de STRINGS

'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
"JavaScript" !== 'PHP' // true
`Estoy Aprendiendo JavaScript` === 'Estoy Aprendiendo JavaScript' // true

// Comparacion de Booleans
true === true // true
true === false // false
false !== false


// OPERADORES LOGICOS =======================================================================================================

//operador AND (&&) ===> retorna true si ambas expresiones son verdaderas

10 > 5 && 10 < 15 // true
7 > 20 && 7 < 12 // false

//operador OR (||) ===> retorna true si una o ambas expresiones son verdaderas

10 > 5 || 10 < 15 // true
7 > 20 || 7 < 12 // true

//operador NOT (!) ===> retorna true si la expresion es falsa y viceversa

!10 > 5 // false
!7 > 20 // true

// Operador Typeof =========================================================================================================

typeof 10 // number
typeof "10" // string
typeof true // boolean
typeof undefined // undefined
typeof null // object ==> se considera un bug del lenguaje
typeof [] // object
typeof {} // object