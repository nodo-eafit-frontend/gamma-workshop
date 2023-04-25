//Variables
const nombre = "Santiago";
const apellidos = "Ramírez Pérez";
const tipoSangre = "A+";
const leGustChocolates = "true";
const edad = "26";
const cedula = "12345678";
console.log(nombre, apellidos, tipoSangre, leGustChocolates, edad, cedula);
//Condiciones
console.log("==========================");
console.log("Eres mayor de edad?");
let respuesta1 = edad >= 18;
console.log(respuesta1);
console.log("==========================");
let cedulaReserva = "12345"
console.log("Esta es su cédula?", cedulaReserva)
let respuesta2 = cedula == "12345"
console.log(respuesta2);
//Booleano
console.log("==========================");
console.log("Puedes entrar?")
let respuesta3 = respuesta1 && respuesta2;
console.log(respuesta3);
//Negacion
console.log("==========================");
console.log(!respuesta3);