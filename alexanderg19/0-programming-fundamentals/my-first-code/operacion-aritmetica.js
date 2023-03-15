console.clear();
console.log("Operaciones aritmeticas");

//VARIABLES A OPERAR
let num = 75
let num1 = 8

//SUMA
let suma = num + num1
console.log("El resultado de la suma de",  num, "+", num1, "es: ", suma)

//RESTA
let resta = num - num1
console.log("El resultado de la resta de",  num, "-", num1, "es: ", resta)

//MULTIPLICACIÓN 
let mult = num * num1
console.log("El resultado de la multiplicación de",  num, "*", num1, "es: ", mult)

//DIVISIÓN
let div = num / num1
console.log("El resultado de la división de",  num, "/", num1, "es: ", div)

//MÓDULO
let mod = num % num1
console.log("El resultado del modulo de",  num, "%", num1, "es: ", mod)




//DETERMINAR NUMEROS PARES E IMPARES

//PAR

if(num%2==0){
    console.log("El número ", num, "es par");
} else {
    console.log("El número ", num, "es impar");
}

let numero = 50
let esPar = numero % 2 === 0
console.log("¿Esté número es par", numero, "?");
console.log(esPar);


//IMPAR
console.log("¿Esté número es impar", numero, "?");
console.log(!esPar);

let esImpar = numero % 2 !== 0
console.log("¿Esté número es impar", numero, "?");
console.log(esImpar);