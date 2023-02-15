// Yo
let presupuesto = 25_000;
// Tienda de transporte
let medioDeTrasporte = 'Carro';
let costoCarro = 30_000;
let prestamoBanco = 10_000;
let loCompro = medioDeTrasporte && costoCarro <= presupuesto;
let pidoPrestamo = medioDeTrasporte && costoCarro <= presupuesto + prestamoBanco;
console.log(typeof pidoPrestamo, pidoPrestamo);
// Compraré si tengo el presupuesto y el transporte exite
if (loCompro) {
    medioDeTrasporte = medioDeTrasporte + '     comprado!';
} else if (pidoPrestamo) {
    // Pedir prestamo de 10_000 que alcance para comprar el carro
    medioDeTrasporte = medioDeTrasporte + " Prestamo! " + (presupuesto + prestamoBanco);
} else {
    medioDeTrasporte = medioDeTrasporte + " 😥!";
}
console.log(medioDeTrasporte);
//Switch
let diaActual = "martess";
let mensaje = "";
switch (diaActual) {
    //Lunes estudiar interactiva
    case "lunes":
        mensaje = "estudiar interactiva";
        break;
    //Martes clase de programación
    case "martes":
        mensaje = "hacer lista de preguntas";
        break;
    //Miercoles clase de programación
    case "miercoles":
        mensaje = "clase de programación";
        break;
    //Jueves clase de programación
    case "jueves":
        mensaje = "clase de programación";
        break;
    //viernes fiesta
    case "viernes":
        mensaje = "fiesta";
        break;
    //Sábado tareas del hogar
    case "sabado":
        mensaje = "tareas del hogar";
        break;
    //Defecto descansar
    default:
        mensaje = "descansar";
        break;
}
console.log("Qué haré el día ", diaActual, "?", "Toca ", mensaje)










