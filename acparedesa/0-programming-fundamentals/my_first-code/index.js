let nombre = "Astrid Carolina"
let apellido = "Paredes Angel"
let cedula = "1152440842"
let tipoDeSangre  = "B+"
let altura = 1.60
let esFemenino = true
let edad = 31


console.log(nombre, apellido, cedula, tipoDeSangre, altura, esFemenino, edad)

// condiciones
console.log("======================");
console.log("eres mayor de edad"):
let respuesta = 18 ≤ edad; 
console.log(respuesta);

//Reserva
let cedulaReserva = "1152440842";
console.log("===================");
console.log("esta es su cedula?,"cedulaReserva);
let respuesta2 =cedulaReserva === cedula;
console.log(respuesta2);

//puedes entrar
console.log("=====================");
console.log("puedes entrar?");
let respuesta3 = respuesta || respuesta2; 
console.log(respuesta3);

//Negacion
console.log("==================");




