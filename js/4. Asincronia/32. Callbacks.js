// Definimos una función asíncrona que recibe un callback
function obtenerDatos(callback) {
    console.log("Obteniendo datos...");

    setTimeout(function() {
        // Simulamos datos recibidos
        const datos = { nombre: "Juan", edad: 25 };
        // Llamamos al callback con los datos
        callback(datos);
    }, 2000); // Espera 2 segundos
}

// Usamos la función y pasamos un callback
obtenerDatos(function(resultado) {
    console.log("Datos recibidos:", resultado);
});

console.log("Esto se ejecuta antes de recibir los datos.");


// Ejemplo de "callback hell" (infierno de callbacks)==================================================================

// Simulamos una serie de operaciones asíncronas anidadas usando callbacks
function paso1(datos, callback) {
    setTimeout(function() {
        console.log("Paso 1 completado con datos:", datos);
        callback({ ...datos, paso1: true });
    }, 1000);
}

function paso2(datos, callback) {
    setTimeout(function() {
        console.log("Paso 2 completado con datos:", datos);
        callback({ ...datos, paso2: true });
    }, 1000);
}

function paso3(datos, callback) {
    setTimeout(function() {
        console.log("Paso 3 completado con datos:", datos);
        callback({ ...datos, paso3: true });
    }, 1000);
}

// Aquí comienza el "callback hell": muchas funciones anidadas
obtenerDatos(function(resultado) {
    // Primer callback
    paso1(resultado, function(res1) {
        // Segundo callback anidado dentro del primero
        paso2(res1, function(res2) {
            // Tercer callback anidado dentro del segundo
            paso3(res2, function(res3) {
                // Cuarto callback anidado dentro del tercero
                console.log("Todos los pasos completados:", res3);
            });
        });
    });
});

// Cada nivel de anidación hace que el código sea más difícil de leer y mantener.
// Esto es lo que se conoce como "callback hell".