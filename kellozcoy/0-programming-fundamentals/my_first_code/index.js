// Declarar Variables
let nombre = "kelly Johana";
let apellidos = "orozco yepes";
let tipoSangre = "O+";
let leGustaCholotate = true;
let edad = 39;
let cedula = "12345AAAAA";
console.log(nombre, apellidos, tipoSangre, leGustaCholotate, edad, cedula);
// ==============================================
// Condiciones
// ==============================================
console.log("==============================================");
console.log("Eres mayor de edad?");
let respuesta = 18 <= edad;
console.log(respuesta);
// ==============================================
let cedulaReserva = "12345";
console.log("==============================================");
console.log("Esta es su cédula?", cedulaReserva);
let respuesta2 = cedulaReserva === cedula;
console.log(respuesta2);
// Puedes entrar?
console.log("==============================================");
console.log("Puedes entrar?");
let respuesta3 = respuesta || respuesta2;
console.log(respuesta3);
// Negación
console.log("==============================================");
console.log("Negar el gusto del chocolate?", leGustaCholotate);
let respuesta4 = !leGustaCholotate;
console.log(respuesta4);