// TRY - CATCH       //Se utiliza para capturar un error y hagamos algo con el

const numero1 = 20;
const numero3 = 30;


console.log(numero1);

try {
    console.log(numero2); // prueba este codigo
} catch (error) {
    console.log(error);   // Si hay algun error en el TRY, se ejecuta el catch y se puede manipular el error
}

console.log(numero3);