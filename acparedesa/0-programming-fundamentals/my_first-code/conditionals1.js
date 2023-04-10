console.clear();

// Yo
let presupuesto = 22000;
// Tienda de transporte
let medioDeTrasporte = 'carro';
let costoCarro = 30000;
let prestamoBanco = 10000;
let pedirPrestaBanco = medioDeTrasporte && costoCarro - presupuesto <= prestamoBanco
let valorPrestamo = costoCarro - presupuesto

// Compraré si 'tengo el presupuesto' y el transporte exite
if (medioDeTrasporte && costoCarro <= presupuesto) {
  medioDeTrasporte = medioDeTrasporte + '     comprado!';
} else if (pedirPrestaBanco) {
  // Pedir prestamo de 10_000 que alcance para comprar el carro  
  medioDeTrasporte = "Para comprar el medio de transporte necesito el crédito de " + valorPrestamo
} else {
  medioDeTrasporte = medioDeTrasporte + '     😥!';
}
console.log(medioDeTrasporte);


/// Condicionales con if
let diaActual = 'Miércoles';
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
  // viernes -> Ir a farrear  
  mensaje = 'Ir a farrear';
} else if (diaActual === 'sabados') {
  // sabados -> Limpiamos hogar  
  mensaje = 'Limpiamos hogar';
} else {
  // por defecto -> descansar 
    mensaje = 'descansar';
}
console.log('\nQue haré', diaActual, mensaje);

//CONDICIONALES CON SWITCH

switch (diaActual) {
    case "lunes":
        mensaje = 'Estudiar Interactiva';
        break;
    case "Martes":
        mensaje = 'Hacer lista de preguntas';
        break;
    case "Miércoles":
        mensaje = 'Tenemos clase de programación';
        break;
    case "Juéves":
        mensaje = 'Estudiar';
        break;
    case "viernes":
        mensaje = 'Ir a farrear';
        break;
    case "Sábado":
        mensaje = 'Estudiar Interactiva';
        break;
    default:
        mensaje = 'descansar';
        break;
}

console.log('\nQue haré el dia ', diaActual, "?", mensaje);
