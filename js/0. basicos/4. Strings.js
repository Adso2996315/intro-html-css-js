// STRING O CADENA DE TEXTO

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
const producto2 = 'Monitor HD"';
const nombre = "Juan Pablo";
const email = "correo@correo.com";
const variasLineas = `Esto es una cadena de texto
que ocupa varias líneas. Puedes escribir
tantas líneas como quieras.`;

// Concatenación ==> se usa el operador + para concatenar strings (no confundir con el operador de suma)
console.log("Nombre Cliente: " + nombre + " Email: " + email); //aqui el (+) lo que hace es añadir cosas una detras de otra

// length es para la extension
console.log(tweet.length); // -> 62 <- que refleja los 62 caracteres del string de la variable tweet
console.log(producto2); // -> Monitor HD" <-  ya que las comillas que representa string son simples y las dobles hacen parte del texto en este caso

// IndexOf (retorna posición)
console.log(tweet.indexOf("JavaScript")); // -> 12 <-  muestra que en el caracter numero 12 empieza 'javascript'
console.log(producto2.indexOf("Tablet")); // -> -1 <-  esto aparece cuando no existe lo que se busca
console.log(email.indexOf("@")); // ->  6 <-  el caracter @ se encuentra en el caracter numero 6

// Includes (retorna true o false)
console.log(tweet.includes("JavaScript")); // -> true <- debido a que si esta incluido
console.log(producto2.includes("Tablet")); // -> false <- debido a que no esta incluido

// Template Strings - String Literals
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);
//con template Strings puedes añadir variables, operadores, funciones, (en general logica javascript) DENTRO de un string
