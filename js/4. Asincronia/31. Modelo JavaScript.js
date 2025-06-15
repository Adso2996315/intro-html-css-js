
// Procesamiento single thread y multithread ==========================================================================================

/*

Single thread significa que el lenguaje ejecuta una sola tarea a la vez en un único hilo de ejecución. 
JavaScript es single thread, lo que quiere decir que solo puede ejecutar una instrucción a la vez, en orden secuencial.

Multithread significa que el lenguaje o entorno puede ejecutar varias tareas al mismo tiempo usando múltiples hilos de ejecución. 
Lenguajes como Java o C++ pueden ser multithread.

JavaScript trabaja de forma single thread, pero gracias al "Event Loop" y a la "asíncronía" 
(por ejemplo, usando setTimeout, Promesas, async/await), puede manejar tareas que parecen ejecutarse en paralelo, 
aunque realmente delega operaciones pesadas (como peticiones de red) al navegador o al entorno (Node.js), 
y cuando terminan, las vuelve a poner en la cola de tareas para ser ejecutadas por el hilo principal.

*/

// Operaciones de entrada/salida (I/O) y operaciones de CPU ==========================================================================

/*
Las operaciones de entrada/salida (I/O) son aquellas que implican interactuar con el mundo exterior, 
como leer archivos, hacer peticiones HTTP o interactuar con bases de datos. Estas operaciones suelen 
ser lentas y pueden bloquear el hilo principal si se ejecutan de forma síncrona.

Las operaciones de CPU, por otro lado, son aquellas que implican cálculos y procesamiento de datos. 
Estas operaciones suelen ser más rápidas y se pueden ejecutar de forma más eficiente en el hilo principal.

En JavaScript, las operaciones de I/O se manejan de forma asíncrona para evitar bloquear el hilo principal, 
mientras que las operaciones de CPU intensivas deben ser optimizadas para no afectar la capacidad de respuesta de la aplicación.

*/

// Operaciones de concurrencia y paralelismo ===================================================================================

/*

La concurrencia es la capacidad de un sistema para PROGRESAR múltiples tareas al mismo tiempo, 
sin necesariamente ejecutarlas al mismo tiempo. En JavaScript, la concurrencia se logra a través del 
Event Loop, que permite que el hilo principal maneje múltiples operaciones asíncronas.

El paralelismo, por otro lado, es la capacidad de un sistema para EJECUTAR múltiples tareas al mismo tiempo, 
utilizando múltiples hilos de ejecución. JavaScript no es un lenguaje de programación paralelo por sí mismo, 
pero puede aprovechar las capacidades de paralelismo del entorno en el que se ejecuta, como Web Workers en el navegador o 
módulos en Node.js.

En resumen, JavaScript es un lenguaje single thread que maneja la concurrencia a través del Event Loop y
la asíncronía, permitiendo que las operaciones de I/O no bloqueen el hilo principal.

*/

// Operaciones bloqueantes y no bloqueantes ===================================================================================

/*
Las operaciones bloqueantes son aquellas que detienen la ejecución del hilo principal hasta que se completan.
*/

// BLOQUEANTE

(() => {

    console.log("Inicio"); // 1. Se imprime primero

    function dos() {
        console.log("Dos"); // 3. Se imprime después de "Uno"
    }

    function uno() {
        console.log("Uno"); // 2. Se imprime después de "Inicio"
        dos(); // Llama a dos(), que imprime "Dos"
        console.log("Tres"); // 4. Se imprime después de "Dos"
    }

    uno(); // Ejecuta la función uno()
    console.log("Fin"); // 5. Se imprime al final
    
})

/*
Las operaciones no bloqueantes, en cambio, permiten que el hilo principal continúe ejecutándose mientras se espera que se completen otras tareas.
*/

// NO BLOQUEANTE

(() => {
    console.log("Inicio"); // 1. Se imprime primero

    function dos() {
        setTimeout(() => {
            console.log("Dos"); // 5. Se imprime al final, después de 1000ms
        }, 1000);
    }

    function uno() {
        setTimeout(() => {
            console.log("Uno"); // 4. Se imprime después de "Fin", tras 0ms (cuando el stack esté vacío)
        }, 0);
        dos(); // Llama a dos(), que agenda "Dos" para después de 1000ms
        console.log("Tres"); // 2. Se imprime después de "Inicio"
    }

    uno(); // Ejecuta la función uno()
    console.log("Fin"); // 3. Se imprime después de "Tres"

})();

// Operaciones síncronas y asíncronas ===================================================================================

/*
Las operaciones síncronas son aquellas que se ejecutan de forma secuencial, una tras otra, bloqueando el hilo principal hasta que se completan. En JavaScript, 
las operaciones sincronicas pueden ser operaciones de CPU o I/O que se ejecutan de forma directa, como cálculos matemáticos o lecturas de archivos sincrónicas.

Las operaciones asíncronas, en cambio, permiten que el hilo principal continúe ejecutándose mientras se espera que se completen otras tareas.

En JavaScript, las operaciones asíncronas se manejan a través de callbacks, Promesas y async/await, lo que permite que el código no se bloquee 
mientras se esperan resultados de operaciones como peticiones HTTP o lecturas de archivos.
*/

// Event Loop y su funcionamiento ===================================================================================

/*
El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asíncronas sin bloquear el hilo principal.

Funcionamiento paso a paso:

1. Call Stack (Pila de llamadas): 
    - Es donde se ejecutan las funciones de JavaScript de manera secuencial.
    - Si una función llama a otra, se apila en la parte superior.

2. Web APIs (o APIs del entorno):
    - Cuando se llama a una función asíncrona (como setTimeout, fetch, etc.), esta se delega al entorno (navegador o Node.js).
    - El stack sigue ejecutando otras tareas mientras la operación asíncrona se procesa fuera del stack.

3. Callback Queue (Cola de tareas):
    - Cuando una operación asíncrona termina, su callback se coloca en la cola de tareas.

4. Event Loop:
    - El Event Loop está constantemente revisando si el stack está vacío.
    - Si el stack está vacío y hay tareas en la cola, mueve la primera tarea de la cola al stack para que se ejecute.

Resumen:
- El Event Loop permite que JavaScript ejecute código, gestione eventos y procese tareas asíncronas de forma eficiente, sin bloquear el hilo principal.
- Así, aunque JavaScript es single thread, puede manejar múltiples operaciones asíncronas de manera fluida.
*/

//NOTA: Pagina para visualizar el Event Loop: https://event-loop-explorer.vercel.app/
