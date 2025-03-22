// Iterar Objetos

//Para iterar sobre un objeto se usa el for...in==============================================================================================

const persona = {
  name: "Dani",
  age: 30,
  isWorking: true,
};

for (const property in persona) {
  console.log(property); // imprime todas las propiedades del objeto
}

for (const property in persona) {
  console.log(persona[property]); // imprime todos los valores de las propiedades del objeto
}

// Transformar un objeto en un array ====================================================================================================

const persona2 = {
  name: "Dani",
  age: 30,
  isWorking: true,
};

// Object.keys devuelve un array con todas las propiedades del objeto========================================

// Retorna un array con todas las propiedades del objeto

console.log(persona2.keys(persona2)); // ["name", "age", "isWorking"]

//Object.values devuelve un array con todos los valores de las propiedades del objeto

console.log(persona2.values(persona2)); // ["Dani", 30, true]

//Object.entries devuelve un array con todas las parejas clave-valor del objeto en un subarray

console.log(persona2.entries(persona2)); // [["name", "Dani"], ["age", 30], ["isWorking", true]]


