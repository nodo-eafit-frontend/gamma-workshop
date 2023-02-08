//Declarar variables

let nombre = "Leydy"; 
let apellido = "Mosquera";
let cedula = "12345";
let tipoDeSangre = "0+";
let LeGustaChocolate = true;
let edad = 18;
let altura = 1.60;
let esFemenino = true;

console.log(nombre,apellido,cedula,tipoDeSangre,LeGustaChocolate,altura,esFemenino) //console.log=imprime la respuesta
//==================================
// Codiciones
//==================================
console.log("==================================")
console.log("¿Eres mayor de edad?");
let respuesta = 18 <= edad;
console.log(respuesta);
//==================================

let cedulaReserva = "12345";
console.log("==================================");
console.log("¿Esta es su cédula?, cedulaReserva");
let respuesta2 = "cedulaReserva" === cedula;
console.log(respuesta2);

//¿Puedes entrar?
console.log("==================================");
let respuesta3 = respuesta || respuesta2;
console.log(respuesta3);

// Negación
console.log("==============================================");
console.log("Negar el gusto del chocolate?", LeGustaChocolate);  // Para negar se usa un signo de exclamación antes del elemento
let respuesta4 = !LeGustaChocolate;
console.log(respuesta4); 