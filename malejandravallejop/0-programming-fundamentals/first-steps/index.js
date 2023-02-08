let nombre = "maria alejandra";
let apellidos = "vallejo pino";
let tipoSangre = "o+";
let leGustaChocolates = true;
let edad = 29;
let cedula = "1234567";

console.log (nombre, apellidos, tipoSangre, cedula);

//condiciones 
console.log ("eres mayor de edad");

let respuesta = 18 < edad; 
console.log(respuesta);

let cedulaReserva = "1234567";
console.log ("esta es su cedula?", cedulaReserva)
let respuesta2 = cedulaReserva === cedula;
console.log(respuesta2)


//puedes entrar?
console.log ("puedes entrar?");
let respuesta3 = respuesta && respuesta2;
console.log(respuesta3)

// negacion
console.log("negar el gusto del chocolates?", leGustaChocolates);
let respuesta4 = !leGustaChocolates;
console.log(respuesta4);




























