// POO 

/** Object Literal */      // nosotros colocamos las claves y los valores
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor                   //es un una funcion que ese utiliza para crear clases (prototipos en POO)
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente = new Cliente('Juan', 'De la torre');  // con new se crea una nueva instancia (objeto en POO)

// Protype crea funciones que solo se utilizan en un objeto en especifico, en este caso "Cliente"
Cliente.prototype.formatearCliente = function() {                  
    return `El Cliente ${this.nombre} ${this.apellido}`;
}



//Ejemplo 2

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);


Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


// ---------------------------------------------------------------------------------------------------------

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );


// ---------------------
// Explicación adicional sobre prototipos:
// ---------------------

/**
 * En JavaScript, todos los objetos tienen una propiedad interna llamada [[Prototype]], que apunta a otro objeto.
 * Este objeto "prototipo" es donde JavaScript busca propiedades y métodos que no se encuentra directamente en el objeto.
 * 
 * Cuando creamos una función constructora (como Cliente o Producto), podemos agregar métodos a su prototipo usando
 * NombreConstructor.prototype.nombreMetodo. Así, todas las instancias creadas con ese constructor comparten esos métodos,
 * ahorrando memoria y permitiendo reutilización de código.
 * 
 * Por ejemplo, al agregar formatearProducto al prototipo de Producto, todas las instancias de Producto pueden usar ese método,
 * aunque no esté definido directamente en cada objeto.
 * 
 * Este mecanismo se llama "herencia prototípica" y es la base de la programación orientada a objetos en JavaScript.
 * 
 * Resumiendo:
 * - Los prototipos permiten compartir métodos entre todas las instancias de un constructor.
 * - Si un objeto no tiene una propiedad o método, JavaScript lo busca en su prototipo.
 * - Así se logra reutilización y extensión de funcionalidades en los objetos.
 */
