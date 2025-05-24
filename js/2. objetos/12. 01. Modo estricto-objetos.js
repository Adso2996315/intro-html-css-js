// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto);          // .freeze -> hace que el objeto no reciba mas valores  ni eliminarlos ni tampoco modificarlos
Object.freeze(producto);        // .seal -> hace que el objeto no reciba mas valores ni eliminarlos pero SI modificarlos
producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);