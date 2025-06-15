// Classes


class PRODUCTO {           //esto es la version mejorada de object constructor
    constructor(nombre, precio) {   // los parametros de la clase se hacen con esta sintaxis  "constructor(a,b)"
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new PRODUCTO('Monitor Curvo de 49"', 800);   //nueva instancia de la clase PRODUCTO
const producto3 = new PRODUCTO('Laptop', 300);


// Herencia      se hace para evitar duplicar codigo y hace que una clase herede metodos, funciones, etc de otra clase

class LIBRO extends PRODUCTO {         //extends significa heredar
    constructor(nombre, precio, id) {
        super(nombre, precio);         // "super" se utiliza para que llame al constructor de la clase padre y acceder a sus propiedades 
        this.id = id;
    }

    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es ${this.id}`;   //aqui con template string podemos traer la funcion de la clase padre ${}
    }
}

const libro = new LIBRO('JavaScript la Revolución', 120, '910313981389139');

console.log(libro.formatearProducto() );
console.log(producto2.formatearProducto());