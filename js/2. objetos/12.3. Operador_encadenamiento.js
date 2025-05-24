// Operadores Encadenamiento opcional

// El operador de encadenamiento opcional es un operador que se usa para ejecutar una función o un método de un objeto si es que existe

const gamesystem = {
  name: "PS5",
  price: 550,
  specs: {
    cpu: "AMD Ryzen Zen 2",
    gpu: "AMD Radeon RDNA 2",
  },
};

console.log(gamesystem.name); // -> PS5

console.log(gamesystem.specifications); // -> undefined

console.log(gamesystem.specifications.ram);
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
// Este error ocurre cuando intentamos acceder a una propiedad de un objeto que no existe.

// Evitar el error con el operador de encadenamiento opcional=========================================

console.log(gamesystem.specifications?.cpu)
// -> undefined ==> Da undefined pero ahora no lanzamos el error
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2
