console.clear();
console.log("operaciones aritmeticas");


//sumar
let num1 = 5;
let num2 = 10;
let resultadoSuma = num1 + num2;
console.log("la suma de", num1," + ",num2);
console.log(resultadoSuma);

//restar
let resultadoResta = num1 - num2;
console.log("la resta de", num1,"-",num2);
console.log(resultadoResta);

//multiplicar
let resultadoMultiplicar = num1 * num2;
console.log("la multiplicación de", num1,"*",num2);
console.log(resultadoMultiplicar);

//Dividir
let resultadoDividir = num1 / num2;
console.log("la división de", num1,"/",num2);
console.log(resultadoDividir);

// Módulo
let resultadoModulo = num1 % num2;
console.log("El módulo de", num1,"%",num2);
console.log(resultadoModulo);


//// Número par
let numeroPar = 55;
let esPar = numeroPar % 2 === 0;
console.log("este número es par", numeroPar);
console.log(esPar);

//// Número impar
let numeroImpar = 55;
let esImpar = numeroImpar % 2 !== 0;
console.log("este número es impar ", numeroImpar);
console.log(esImpar);


//// Número impar con negación
console.log("este número es impar (negación)", numeroImpar);
console.log(!esPar);







