//Fechas en JavaScript

// Crear un objeto de fecha

// La clase Date se utiliza para trabajar con fechas y horas. ===========================================================================

const fechaActual = new Date(); // Fecha y hora actuales
console.log(fechaActual);

// Crear una fecha específica ===========================================================================================================

const fechaEspecifica = new Date(2023, 9, 15); // Año, Mes (0-11), Día
console.log(fechaEspecifica);
//NOTA: Los meses van desde 0 (enero) hasta 11 (diciembre) porque se trata como un array

// Crear una fecha con hora específica ==================================================================================================

const fechaConHora = new Date(2023, 9, 15, 10, 30, 0); // Año, Mes, Día, Hora, Minuto, Segundo
console.log(fechaConHora);

// Crear una fecha a partir de una cadena ===============================================================================================

const fechaDesdeCadena = new Date("2023-10-15T10:30:00");
console.log(fechaDesdeCadena);
// Crear una fecha a partir de una cadena en formato corto (MM/DD/YYYY)
const fechaCorta = new Date("10/15/2023");
console.log(fechaCorta);

// Crear una fecha a partir de una cadena en formato largo
const fechaLarga = new Date("October 15, 2023 10:30:00");
console.log(fechaLarga);

// Crear una fecha a partir de una cadena en formato ISO sin hora
const fechaISO = new Date("2023-10-15");
console.log(fechaISO);

// Crear una fecha a partir de una cadena en formato RFC 2822
const fechaRFC = new Date("Sun, 15 Oct 2023 10:30:00 GMT");
console.log(fechaRFC);

// Crear una fecha a partir de una cadena con zona horaria específica
const fechaZonaHoraria = new Date("2023-10-15T10:30:00-05:00");
console.log(fechaZonaHoraria);

// Métodos para obtener partes de la fecha =============================================================================================

console.log(fechaActual.getFullYear()); // Año
console.log(fechaActual.getMonth()); // Mes (0-11)
console.log(fechaActual.getDate()); // Día del mes (1-31)
console.log(fechaActual.getDay()); // Día de la semana (0-6, donde 0 es domingo)
console.log(fechaActual.getHours()); // Hora (0-23)
console.log(fechaActual.getMinutes()); // Minutos (0-59)
console.log(fechaActual.getSeconds()); // Segundos (0-59)
console.log(fechaActual.getMilliseconds()); // Milisegundos (0-999)

// Métodos para establecer partes de la fecha ==========================================================================================

const nuevaFecha = new Date();
nuevaFecha.setFullYear(2025); // Cambiar el año
nuevaFecha.setMonth(11); // Cambiar el mes (0-11)
nuevaFecha.setDate(25); // Cambiar el día del mes
nuevaFecha.setHours(15); // Cambiar la hora
nuevaFecha.setMinutes(45); // Cambiar los minutos
nuevaFecha.setSeconds(30); // Cambiar los segundos
console.log(nuevaFecha);

// Obtener la marca de tiempo (timestamp) ==============================================================================================

// El número de milisegundos desde el 1 de enero de 1970
const timestamp = fechaActual.getTime();
console.log(timestamp);

// Comparar fechas =====================================================================================================================

const fecha1 = new Date(2023, 9, 15);
const fecha2 = new Date(2023, 9, 16);
console.log(fecha1 > fecha2); // false
console.log(fecha1 < fecha2); // true

// Calcular la diferencia entre fechas =================================================================================================

const diferencia = fecha2 - fecha1; // Diferencia en milisegundos
console.log(diferencia / (1000 * 60 * 60 * 24)); // Diferencia en días

// Crear una fecha a partir de un timestamp
const fechaDesdeTimestamp = new Date(1697366400000); // Milisegundos
console.log(fechaDesdeTimestamp);

// Convertir una fecha a cadena ========================================================================================================

console.log(fechaActual.toString()); // Representación completa
console.log(fechaActual.toDateString()); // Solo fecha
console.log(fechaActual.toTimeString()); // Solo hora
console.log(fechaActual.toISOString()); // Formato ISO 8601
console.log(fechaActual.toLocaleDateString()); // Fecha en formato local
console.log(fechaActual.toLocaleTimeString()); // Hora en formato local

// Fecha actual con Intl.DateTimeFormat (formato personalizado) ========================================================================

// Creamos un formateador de fechas utilizando la clase Intl.DateTimeFormat.
// Esta clase nos permite formatear fechas de acuerdo con una configuración regional específica.
// En este caso, usamos "es-ES" para indicar que queremos el formato de fecha en español de España.
const formateador = new Intl.DateTimeFormat("es-ES", {
    // Configuramos las opciones para el formato de la fecha:
    year: "numeric",   // El año se mostrará como un número completo (por ejemplo, "2023").
    month: "long",     // El mes se mostrará con su nombre completo (por ejemplo, "octubre").
    day: "numeric",    // El día se mostrará como un número (por ejemplo, "15").
    weekday: "long",   // El día de la semana se mostrará con su nombre completo (por ejemplo, "domingo").
});

// Este formateador se puede usar para convertir objetos de fecha (Date) en cadenas de texto
// con el formato especificado. Por ejemplo:
// const fecha = new Date();
// console.log(formateador.format(fecha));
// Salida: "domingo, 15 de octubre de 2023" (dependiendo de la fecha actual).

console.log(formateador.format(fechaActual));

// Trabajar con fechas UTC ============================================================================================================

console.log(fechaActual.getUTCFullYear()); // Año UTC
console.log(fechaActual.getUTCMonth()); // Mes UTC
console.log(fechaActual.getUTCDate()); // Día UTC
console.log(fechaActual.getUTCHours()); // Hora UTC

// Bonus: Moment.js (librería externa para manejo avanzado de fechas)
// Aunque Moment.js ya no se recomienda para nuevos proyectos, sigue siendo útil.
// Ejemplo:
// const moment = require('moment');
// console.log(moment().format('YYYY-MM-DD HH:mm:ss'));