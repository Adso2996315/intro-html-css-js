
// Getters y Setters

class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre; // Usamos _ para indicar que es privado
        this._edad = edad;
    }

    // Getter para nombre
    get nombre() { // se usa get para poder acceder a la propiedad privada
        return this._nombre;
    }

    // Setter para nombre
    set nombre(nuevoNombre) { // se usa set para poder modificar la propiedad privada
        this._nombre = nuevoNombre;
    }

    // Getter para edad
    get edad() {
        return this._edad;
    }

    // Setter para edad
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("Edad no válida");
        }
    }

    // Método normal => necesita una instancia de la clase para ser llamado
    saludar() {
        console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años.`);
    }

    // Método estático
    static esMayorDeEdad(edad) { // Método estático no necesita instancia de la clase para ser llamado
        return edad >= 18;
    }
}

// Uso de getters y setters => se usan como si fueran propiedades normales

const persona1 = new Persona("Juan", 20);
console.log(persona1.nombre); // Juan (getter)
persona1.nombre = "Pedro"; // (setter)
console.log(persona1.nombre); // Pedro

persona1.edad = 25; // (setter)
console.log(persona1.edad); // 25 (getter)
persona1.saludar(); // Hola, mi nombre es Pedro y tengo 25 años.

// Uso de método estático
console.log(Persona.esMayorDeEdad(20)); // true
console.log(Persona.esMayorDeEdad(15)); // false
