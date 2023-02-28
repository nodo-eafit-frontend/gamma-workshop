let nombre = "Juan Felipe"
let apellido = "Giraldo"
let id = "12345"
let tipoDeSangre = "A+"
let altura = 1.70
let esFemenino = true
let edad = 28;

console.log(nombre,apellido,id,tipoDeSangre,altura,esFemenino,edad)

//Condiciones
console.log("=============================================")
console.log("Eres mayor de edad?");
let respuesta = 18 <= edad;
console.log(respuesta);
//====================
let cedulareserva="12345";
console.log("=============================================")
console.log("Esta es su cedula?",cedulareserva)
let respuesta2 = cedulareserva === id;
console.log(respuesta2);
//====================
console.log("=============================================")
console.log("Puedes entrar?")
let respuesta3 = respuesta && respuesta2;
console.log(respuesta2);
