// Matrices

// Una matriz es una lista de listas dispuesta en filas y columnas.

// Crear una matriz ========================================================================================

const matriz =  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Nota: Las matrices no tienen por qué ser cuadradas. Pueden tener cualquier número de filas y columnas.

// Acceder a elementos de una matriz =========================================================================

console.log(matriz[0][0]) // 1 ==> Se accede primero al array hijo y luego al elemento de ese array
console.log(matriz[1][2]) // 9

// Modificar elementos de una matriz =========================================================================

matriz[1][2] = 10
console.log(matriz) // [[1, 2, 3], [4, 5, 10], [7, 8, 9]]

// Iterar sobre una matriz ==================================================================================

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}
