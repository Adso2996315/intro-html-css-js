//Switch ==> se utiliza para reemplazar muchos if/else y cuando queremos realizar diferentes acciones basadas en una única variable.

switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break; //==> se usa break para que no ejecute mas casos

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break;

  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break;
}

// Ejemplo ==========
const dia = 1

switch (dia) {
  case 1:
    console.log("¡Hoy es lunes! 😢")
    break

  case 2:
    console.log("Hoy es martes")
    break

  case 3:
    console.log("Hoy es miércoles")
    break

  case 4:
    console.log("Hoy es jueves")
    break

  case 5:
    console.log("Hoy es viernes")
    break

  default:
    console.log("Es fin de semana! 🚀")
    break
}
