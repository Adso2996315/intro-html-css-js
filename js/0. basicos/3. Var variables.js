// Variables Var ==> Es la forma más antigua de declarar variables en JavaScript.


// "var" tiene un alcance de función o global, y permite redeclaraciones
function ejemploVar() {
    if (true) {
        var mensaje = "Soy var dentro del bloque";
        console.log(mensaje); // "Soy var dentro del bloque"
    }
    console.log(mensaje); // "Soy var dentro del bloque" (accesible fuera del bloque)
}

ejemploVar();

// "let" tiene un alcance de bloque y no permite redeclaraciones
function ejemploLet() {
    if (true) {
        let mensaje = "Soy let dentro del bloque";
        console.log(mensaje); // "Soy let dentro del bloque"
    }
    // console.log(mensaje); // Error: mensaje no está definido fuera del bloque
}

ejemploLet();

// Diferencia clave: "var" ignora el alcance de bloque, mientras que "let" lo respeta.

