console.clear();
console.log('Operaciones Aritméticas');

// Sumar
let num1 = 75;
let num2 = 8;
let resultadoSuma = num1 + num2;

console.log('La suma de ', num1, ' + ', num2);
console.log(resultadoSuma);

// Restar
let resultadoResta = num1 - num2;

console.log('La resta de ', num1, ' - ', num2);
console.log(resultadoResta);

// Multiplicar
let resultadoMultiplicar = num1 * num2;

console.log('La Multiplicar de ', num1, ' * ', num2);
console.log(resultadoMultiplicar);

// Dividir
let resultadoDividir = num1 / num2;

console.log('La Dividir de ', num1, ' / ', num2);
console.log(resultadoDividir);

// Módulo
let resultadoModulo = num1 % num2;

console.log('La Módulo de ', num1, ' % ', num2);
console.log(resultadoModulo);

// Es par
let numero = 21;
let esPar = numero % 2 === 0;
console.log('este número es par', numero);
console.log(esPar);

// Es impar
let esImpar = numero % 2 !== 0;
console.log('este número es impar', numero);
console.log(esImpar);

// Es impar
console.log('este número es impar (Neagación)', numero);
console.log(!esPar);
