// Iterar sobre un array

// For of ====================================================================================================

let frutas = ["🍎", "🍌", "🍓"];

for (let fruta of frutas) {
  // itera sobre cada elemento del array
  console.log(fruta); // imprime el elemento en la posición i
}

// ForEach ====================================================================================================

/*
Explicación:
- El método forEach itera sobre cada elemento del array.
- Recibe una función como argumento, que se ejecuta una vez por cada elemento.
- Esta función puede recibir tres argumentos OPCIONALES:
    1. El elemento actual en cada iteracion (fruta en este caso).
    2. El índice del elemento actual.
    3. El array completo.
- En cada iteración, puedes realizar cualquier operación con estos valores.
*/

// Usando función anónima
frutas.forEach(function (fruta, indice, array) {
  console.log(`Fruta: ${fruta}, Índice: ${indice}, Array completo: ${array}`);
});

// Usando función flecha
frutas.forEach((fruta) => {
  console.log(fruta); // imprime el elemento en la posición i
});
