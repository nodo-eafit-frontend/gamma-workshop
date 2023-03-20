console.clear();



//// Condicionales con if - else if - else



// Yo

let presupuesto = 25_000;



// Tienda de transporte



let medioDeTransporte = "Carro";

let costoCarro = 30_000;

let prestamoBanco = 10_000;



let loCompro = medioDeTransporte && costoCarro <= presupuesto;

let pidoPrestamo = medioDeTransporte && costoCarro <= presupuesto + prestamoBanco;

console.log(typeof pidoPrestamo, pidoPrestamo);





// Compraré si 'tengo el presupuesto' y el transporte exite

if (loCompro) {

medioDeTransporte = medioDeTransporte + ' comprado!';

} else if (pidoPrestamo) { //Pediré prestamo si 10_000 que alcance para comprar el carro

medioDeTransporte = medioDeTransporte + ' Prestamo!' + ' ' + (presupuesto + prestamoBanco);

} else {

medioDeTransporte = medioDeTransporte + ' 😥!';

}



console.log(medioDeTransporte);



/// Condicionales con switch

let diaActual = 'martes';

let mensaje = '';





switch (diaActual) {

// Lunes Estudiar Interactiva

case "lunes":

mensaje = "Estudiar interactiva";

break;

// Martes clases de programación

case "martes":

mensaje = "hacer lista de preguntas";

break; 



// Miercoles clases de programación

case "miercoles":

mensaje = "clases de programación";

break;

// Jueves clases de programación

case "jueves":

mensaje = "clases de programación";

break;

// Viernes Hacer deportes

case "viernes":

mensaje = "hacer deporte";

break;

// Sabado Hacer aseo

case "sabado":

mensaje = "hacer aseo";

break;

// Defecto descansar

default:

mensaje = "descansar";

break;

}

console.log("\nQue hare el dia", diaActual, mensaje);
