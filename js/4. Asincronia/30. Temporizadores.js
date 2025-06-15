// Temporizadores

// setTimeout ==> ejecuta una funcion (una vez) despues de un tiempo determinado

setTimeout(() => {
    console.log("Hola Mundo");
}, 3000); // 3 segundos ==> se expresa en milisegundos

// =================================================================================================================

// setInterval ==> ejecuta una funcion (repetidamente) despues de un tiempo determinado

let i = 0; // contador para saber cuantas veces se va a ejecutar la funcion

const intervalo = setInterval(() => {
    console.log("Hola Mundo");
    i++;

    if (i === 5) { // se detiene el intervalo despues de 5 veces
        clearInterval(intervalo); // se usa para detener el intervalo (el intervalo debe estar guardado en una variable)
    }
}, 1000); // 1 segundo ==> se expresa en milisegundos