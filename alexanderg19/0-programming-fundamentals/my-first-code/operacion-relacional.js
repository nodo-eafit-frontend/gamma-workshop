let name = "Alexander"
let lastname = "Gallo Lopez"
let identification = "12345"
let height = 1.80
let expedition = "Medellín" 
let bloodType = "A-"
let gender = "Masculino"
let age = 18
let professional = true

console.log(name, lastname, identification, height, expedition, bloodType, gender, age, professional)

// ==============================================
// Comparación 
// ==============================================
console.log("==============================================");
console.log("Eres mayor de edad?");
let answer = age > 17;
console.log(answer );
// ==============================================
console.log("==============================================");
let reservationCard = "12345";
console.log("Esta es su cédula?", reservationCard);
let answer1 = reservationCard === identification;
console.log(answer1);
// Puedes entrar?
console.log("==============================================");
console.log("Puedes entrar?");
let answer2 = answer || answer1;
console.log(answer2);
// Negación
console.log("==============================================");
console.log("Negar su profesionalismo?", professional);
let answer3 = !professional;
console.log(answer3);