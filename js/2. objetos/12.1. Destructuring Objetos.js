// Objetos

// Destructuring o Desestructuración ====================================================================================================

// Es una forma mas corta de acceder a las propiedades de un objeto y guardarlas en variables de una sola vez

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// Forma anterior

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// Forma con destructuring

const { precio, nombre } = producto; // <-- Objeto al que se le aplica destructuring
//        ^        ^
//Se extrae la propiedad precio y nombre del objeto producto

// NOTA: El nombre de variable sera el mismo que la propiedad del objeto
// Para cambiarle el nombre a la variable con destructuring se hace asi:

const { precio: precioProducto, nombre: nombreProducto } = producto;

// Destructuring en objetos anidados

const usuario = {
    juan: {
        edad: 27,
        correo: "pepito@pepita.com"
    }
};

const { juan : {edad, correo} } = usuario ;   // aqui hacemos un const con el valor de una propiedad dentro de otra propiedad
const { juan : {edad: edadUsuario, correo: correroUsuario} } = usuario    // se le puede cambiar el nombre a la const asi
