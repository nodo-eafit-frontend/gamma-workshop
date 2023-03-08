console.clear();
// Declarar Variables
let nombre = 'Marvin Daniel';
let apellidos = 'Cely Báez';
let tipoSangre = 'O+';
let leGustaCholotate = true;
let edad = 30;
let cedula = '12345';
console.log(nombre, apellidos, tipoSangre, leGustaCholotate, edad, cedula);
// ==============================================// Condiciones// ==============================================console.log("==============================================");
console.log('Eres mayor de edad?');
let esMayor = 18 <= edad;
console.log(esMayor);
// ==============================================
let cedulaReserva = '12345';
console.log('==============================================');
console.log('Esta es su cédula en la reserva?', cedulaReserva);
let conReserva = cedulaReserva !== cedula;
console.log(cedulaReserva, '!==', cedula, '=>', conReserva);
// Puedes entrar?
console.log('==============================================');
console.log('Puedes entrar al restaurante? (Estrictamente)');
let puedePasar = esMayor && conReserva;
console.log(esMayor, '&&', conReserva, '=>', puedePasar);

console.log('==============================================');
console.log('Puedes entrar al restaurante? (Flexible)');
let puedePasar2 = esMayor || conReserva;
console.log(esMayor, '||', conReserva, '=>', puedePasar2);
// Negación
console.log('==============================================');
console.log('Negar el gusto del chocolate?', leGustaCholotate);
let respuesta4 = !leGustaCholotate;
console.log(respuesta4);
