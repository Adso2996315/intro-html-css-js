// Objeto Math

let resultado;

resultado = Math.PI;            // 3.14159
resultado = Math.round(2.5);    //redondea un numero decimal
resultado = Math.ceil(2.1);     // Ceil siempre redondea hacia arriba
resultado = Math.floor(2.9);    // Floor siempre redondea hacia abajo
resultado = Math.sqrt(144);     // raiz cuadrada
resultado = Math.abs(-5);       // devuelve el valor absoluto osea numero sin signo si el numero es positivo devuelve el mismo valor
resultado = Math.min( 3, 5, 1, 8 , 2, 10 );     // cual es el numero mas bajo
resultado = Math.max( 3, 5, 1, 8 , 2, 10 );     // cual es el numero mas alto
resultado = Math.random();      // devuelve un numero aleatorio entre 0 y 1

resultado = Math.floor( Math.random() * 30 + 1);  // devuelve un numero aleatorio de 1 a 30 entero

console.log(resultado);