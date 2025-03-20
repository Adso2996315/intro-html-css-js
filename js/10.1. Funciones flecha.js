// Funciones flecha (arrow function)

/* Las funciones flecha son una forma más concisa de crear funciones 
en JavaScript, y se han vuelto muy populares en los últimos años 
debido a su sintaxis simplificada. */

const miFuncionFlecha = () => {
  // código a ejecutar
};

// Ejemplo ==========
const saludar = (nombre) => {
  console.log("Hola " + nombre);
};

//Las funciones flecha pueden tener un return implícito

// Declaración de función regular
function sumar(a, b) {
  return a + b;
}

// Función flecha
const sumarFlecha2 = (a, b) => {
  return a + b;
};

// Función flecha con return implícito (siempre y cuando el return sea de una sola linea)
const sumarFlecha3 = (a, b) => a + b;
