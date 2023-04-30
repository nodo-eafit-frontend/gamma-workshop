//loops - ciclos que se repiten

//Iteractions --> 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Numbers', numbers, numbers.length);

// Loops

// iterations -> 10 se repetira
let i = 0;
let tam = numbers.length;
let multiplier = 7;

while (i < 10) {
  // Action
  let result = multiplier * i;

  let mensaje = `${multiplier} x ${i} = ${result}`;

  console.log(mensaje);

  i = i + 1; 
}

// ===================================================================

i = 0;
tam = numbers.length;
multiplier = 8;

do {   // Primero se pregunta la acción y luego se ejecuta la condición.
  // Action
  let result = multiplier * i;

  let mensaje = `${multiplier} x ${i} = ${result}`;

  console.log(mensaje);

  i = i + 1;
} while (i < 10);

// ===================================================================
i = 0;
tam = numbers.length;
multiplier = 4;

for (i = 0; i < 10; i++) {
  // Action
  let result = multiplier * i;

  let mensaje = `${multiplier} x ${i} = ${result}`;

  console.log(mensaje);
}

// ===================================================================
const vehicle = { numWheels: 4, color: '#FFF', logo: 'https://...' };

for (const key in vehicle) {
  console.log(key, vehicle[key]);
}

// ===================================================================
let nombres = ['vehicle', 'name', 'status', 'status 3'];

for (const nombre of nombres) {
  console.log(nombre);
}








//consecionario
