// Estructuras de control

const puntaje = 100;

// Condicionales

if (condición) {
  // código que se ejecuta si la condición es verdadera
} else if (condicion2) {
  // codigo que se ejecuta si la primera condición es falsa y la segunda es verdadera
} else {
  // código que se ejecuta si la condición o condiciones son falsas
}

// ============================================================================

if (puntaje !== 1000) {
  console.log("No es igual");
} else {
  console.log("Si el puntaje es 1000");
}

//=============================================================================

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
  console.log("El Usuario puede pagar");
} else {
  console.log("Fondos Insuficientes");
}

//=============================================================================
const rol = "VISITANTE";

if (rol === "ADMINISTRADOR") {
  console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
  console.log("Eres editor, puedes entrar pero no puedes hacer mucho");
} else {
  console.log("No tienes acceso");
}

//=============================================================================

const edad = 17
const tieneCarnet = true

if (edad >= 18) {
  if (tieneCarnet) {
    console.log('Puedes conducir')
  } else {
    console.log('No puedes conducir')
  }
} else {
  console.log('No puedes conducir')
}

// Operado ternario ==========================================================================================================

// El operador ternario es una forma de escribir condicionales que se puede usar en una sola línea.

condicion ? "codigo si es verdadero" : "codigo si es falso"

// Forma tradicional

if (edad >= 18) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

// Forma con operador ternario

edad >= 18 ? "Puedes conducir" : "No puedes conducir"

