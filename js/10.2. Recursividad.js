// ¿Qué es la recursividad?
// La recursividad es una técnica en programación donde una función se llama a sí misma.
// Es útil para resolver problemas que pueden dividirse en subproblemas más pequeños.

// Ejemplo básico: Contar hacia atrás
function contarHaciaAtras(numero) {
    if (numero <= 0) { // Caso base: Detener la recursión
        console.log("¡Fin!");
        return;
    }
    console.log(numero);
    contarHaciaAtras(numero - 1); // Llamada recursiva (vuelve a ejecutar la función)
}

// Llamamos a la función
contarHaciaAtras(5);

// Explicación:
// 1. La función `contarHaciaAtras` recibe un número.
// 2. Si el número es menor o igual a 0, se detiene (caso base).
// 3. Si no, imprime el número y se llama a sí misma con `numero - 1`.

// Ejemplo práctico: Factorial de un número
function factorial(n) {
    if (n === 0) { // Caso base: El factorial de 0 es 1
        return 1;
    }
    return n * factorial(n - 1); // Llamada recursiva
}

// Llamamos a la función
console.log(factorial(5)); // Resultado: 120

// Explicación:
// 1. El factorial de un número (n!) es el producto de todos los números enteros positivos hasta n.
// 2. Caso base: El factorial de 0 es 1.
// 3. La función se llama a sí misma con `n - 1` hasta llegar al caso base.

// Nota importante:
// Siempre debes definir un "caso base" para evitar que la recursión sea infinita.
// Si no hay un caso base, la función seguirá llamándose indefinidamente y causará un error (stack overflow).

// Ejemplo adicional: Números de Fibonacci
function fibonacci(n) {
    if (n === 0) return 0; // Caso base 1
    if (n === 1) return 1; // Caso base 2
    return fibonacci(n - 1) + fibonacci(n - 2); // Llamada recursiva
}

// Llamamos a la función
console.log(fibonacci(6)); // Resultado: 8

// Explicación:
// 1. La secuencia de Fibonacci comienza con 0 y 1.
// 2. Cada número siguiente es la suma de los dos anteriores.
// 3. Usamos dos casos base: `fibonacci(0)` y `fibonacci(1)` para detener la recursión.