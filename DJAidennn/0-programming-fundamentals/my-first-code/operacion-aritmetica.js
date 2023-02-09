
console.log("Operaciones aritmeticas");

// Sumar
let num1 = 2000;
let num2 = 4000;
let resultadoSuma = num1 + num2;

console.log("la suma de", num1, "+",num2);
console.log(resultadoSuma);

// Restar
let resultadoResta = num1 - num2;

console.log("la resta de", num1,"-",num2);
console.log(resultadoResta);

// Multiplicar
let resultadoMultiplicacion = num1 * num2;

console.log("la multiplicacion de", num1,"*",num2);
console.log(resultadoMultiplicacion);

// Dividir
let resultadoDivision = num1 / num2;

console.log("la division de", num1,"/",num2);
console.log(resultadoDivision);

// Modulo
let resultadoModulo = num1 % num2;
console.log("El modulo de", num1,"%",num2);
console.log(resultadoModulo);

////////////////////
let numero = 75;
let esPar = (numero) % 2 === 0;
console.log("Este numero es par", numero);
console.log(esPar);

// Solucion 1
let esImpar = (numero) % 2 !== 0;
console.log("Este numero es impar", numero);
console.log(esImpar);

// Solucion 2
console.log("Este numero es impar (negacion)", numero);
console.log(!esPar);