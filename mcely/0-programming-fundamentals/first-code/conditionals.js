console.clear();

/// Condicionales con if - else if - else

// Yo
let presupuesto = 25_000;

// Tienda de transporte
let medioDeTrasporte = 'Carro';
let costoCarro = 30_000;
let prestamoBanco = 10_000;

let loCompro = medioDeTrasporte && costoCarro <= presupuesto;
let pidoPrestamo = medioDeTrasporte && costoCarro <= presupuesto + prestamoBanco;
console.log(typeof pidoPrestamo, pidoPrestamo);

// Compraré si 'tengo el presupuesto' y el transporte exite
if (loCompro) {
  medioDeTrasporte = medioDeTrasporte + '     comprado!';
} else if (pidoPrestamo) {
  // Pedir prestamo de 10_000 que alcance para comprar el carro
  medioDeTrasporte = medioDeTrasporte + '     Prestamo! ' + (presupuesto + prestamoBanco);
} else {
  medioDeTrasporte = medioDeTrasporte + '     😥!';
}

console.log(medioDeTrasporte);

/// Condicionales con switch

let diaActual = 'viernes';
let mensaje = '';

if (diaActual === 'lunes') {
  // lunes -> Estudiar Interactiva
  mensaje = 'Estudiar Interactiva';
} else if (diaActual === 'martes') {
  // martes -> Tenemos clase de programación
  mensaje = 'Tenemos clase de programación';
} else if (diaActual === 'miercoles') {
  // miercoles -> Tenemos clase de programación
  mensaje = 'Tenemos clase de programación';
} else if (diaActual === 'jueves') {
  // jueves -> Tenemos clase de programación
  mensaje = 'Tenemos clase de programación';
} else if (diaActual === 'viernes') {
  // viernes -> Hacer deporte
  mensaje = 'Hacer deporte';
} else if (diaActual === 'sabados') {
  // sabados -> Limpiamos hogar
  mensaje = 'Limpiamos hogar';
} else {
  // por defecto -> descansar
  mensaje = 'descansar';
}

console.log('\nQue haré', diaActual, mensaje);

let letra = 'B';

switch (letra) {
  case 'A':
    console.log(letra);
    break;

  case 'B':
    console.log(letra);
    break;

  case 'Z':
    console.log(letra);
    break;

  default:
    console.log(letra);
    break;
}
