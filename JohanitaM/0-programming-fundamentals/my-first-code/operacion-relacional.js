//Declarar variables

let nombre = "Leydy"; 
let apellido = "Mosquera";
let cedula = "12345";
let tipoDeSangre = "0+";
let LeGustaChocolate = true;
let edad = 30;
let altura = 1.60;
let esFemenino = true;

console.log(nombre,apellido,cedula,tipoDeSangre,LeGustaChocolate,altura,esFemenino) //console.log=imprime la respuesta
//==================================
// Codiciones
//==================================
console.log("==================================")
console.log("¿Eres mayor de edad?");
let esMayor = 18 <= edad;
console.log(esMayor);
//==================================

let cedulaReserva = "12345";
console.log("==================================");
console.log("¿Esta es su cédula?, cedulaReserva");
let conReserva = "cedulaReserva" === cedula;
console.log(conReserva);

//¿Puedes entrar?
console.log("==================================");
console.log("¿Puedes entrar al restaurante (Estrictamente)")
let puedePasar = esMayor && conReserva;
console.log(esMayor, '&&', conReserva, '==>', puedePasar);

//¿Puedes entrar?
console.log("==================================");
console.log("¿Puedes entrar al restaurante (Flexible)")
let puedePasar2 = esMayor || conReserva;
console.log(esMayor, '||', conReserva, '==>', puedePasar2);

// Negación
console.log("==============================================");
console.log("Negar el gusto del chocolate?", LeGustaChocolate);  // Para negar se usa un signo de exclamación antes del elemento
let respuesta4 = !LeGustaChocolate;
console.log(respuesta4);
