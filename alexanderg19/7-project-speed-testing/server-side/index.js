const numbers= [1,2,3,4,5,6,7,8,9,10]; 



//console.log('nuestros números',numbers, numbers.length);

//loops
//iterations -> 10
/* let i=0;
let tam = numbers.length;
let multiplier = 60;

while (i < 11) {
//acción
let result = multiplier * i
let mensaje = `${multiplier}  *  ${i}   = ${result}`  

console.log(mensaje);

i++
}

//do while
i = 0;
tam = numbers.length;
multiplier = 8;

do {
  // Action
  let result = multiplier * i;

  let mensaje = `${multiplier} x ${i} = ${result}`;

  console.log(mensaje);

  i = i + 1;
} while (i < 11); */

//for

multiplier = 4;

for (i = 0; i < 11; i++) {
  // Action
  let result = multiplier * i;

  let mensaje = `${multiplier} x ${i} = ${result}`;

  console.log(mensaje);
}

// for in===================================================================
const vehicle = { numWheels: 4, color: '#FFF', logo: 'https://...' };

for (const key in vehicle) {
  console.log(key, vehicle[key]);
}

//for of ===================================================================
let nombres = ['vehicle', 'name', 'status', 'status 3'];

for (const nombre of nombres) {
  console.log(nombre);
}