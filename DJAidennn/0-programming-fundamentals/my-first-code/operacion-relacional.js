// Declarar variables

let name = "Samuel"
let lastName = "Alvarez"
let cedula = "32412341"
let typeOfBlood = "o+"
let age = 17
let likeTheRice = true
let height = 1.82
let isMale = true

console.log (name,lastName,cedula,typeOfBlood,height,isMale) 

// Condiciones
console.log ("================================================")
console.log ("Eres mayor de edad?")
let respuesta = 18 <= age 
console.log (respuesta)

console.log ("================================================")
let cedulareserva = 43341
console.log ("Esta es tu cedula?", cedulareserva)
let c = 2233 === cedula;
let respuesta2 = cedulareserva === cedula
console.log (respuesta2)

console.log ("================================================")

// Puedes entrar?
console.log ("Puedes entrar?")
let respuesta3 = respuesta || respuesta2;
console.log (respuesta3)

console.log ("================================================")

// Negacion
console.log ("Negar el gusto al arroz?", likeTheRice)
let respuesta4 = !likeTheRice;
console.log (respuesta4)