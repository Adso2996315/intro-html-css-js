// Objetos

// Declracion y asignacion de Objetos ====================================================================================================

const persona = {
  //Se declara con llaves
  name: "Dani",
  age: 30, // Cada propiedad o metodo se define con una clave y un valor
  isWorking: true,
};

// Las propiedades pueden ser de cualquier tipo

const persona2 = {
  name: "Dani",
  age: 30,
  isWorking: true,
  family: ["Miguel", "Maria"], // por ejemplo arrays
  address: {
    // por ejemplo otro objeto
    street: "Calle de la piruleta",
    number: 13,
    city: "Barcelona",
  },
  walk: function () { // <- Asi se definen los metodos
    console.log('Estoy caminando')
  }
};

// Acceder a las propiedades y metodos ====================================================================================================

console.log(persona2.name) // Dani
console.log(persona.age) // 30
console.log(persona2.isWorking) // true
console.log(persona2.family) // ["Miguel", "Maria"]
console.log(persona2.family[1]); // Maria
console.log(persona2.address) // { street: "Calle de la piruleta", number: 13, city: "Barcelona" }
console.log(persona2.address.street) // Calle de la piruleta
console.log(persona2.walk()) // Estoy caminando
console.log(persona2.nuevaPropiedad) // undefined ==> si no existe la propiedad devuelve undefined

// Se pueden acceder a las propiedades y metodos de un objeto usando corchetes o variables

let property = 'name'

console.log(persona2["name"]); // -> Dani
console.log(persona2[property]) // -> Dani ==> mas recomendable con variables


// Asignar valores a las propiedades ====================================================================================================

persona2.name = "Pepito" // Paso de Dani a Pepito
persona2.age = 22 // Paso de 30 a 22
persona2.isWorking = false // Paso de true a false
persona2.family = ["pepita", "sasha"] // Paso de ["Miguel", "Maria"] a ["pepita", "sasha"]
persona2.address = {
  street: "calle de la nueva piruleta",
  number: 30,
  city: "Barcelona 2",
}
persona2.nuevaPropiedad = "nueva propiedad" // Si no existe la propiedad, se crea

// Eliminar propiedades ====================================================================================================

const persona3 = { name: 'Sanchez', age: 18 }

delete persona.age

console.log(persona) // -> { name: 'Sanchez' }
