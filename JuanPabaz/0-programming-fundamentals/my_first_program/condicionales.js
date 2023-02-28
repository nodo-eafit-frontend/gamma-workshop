console.clear();

//Condicionales con switch

//Yo
let Presupuesto=20000

//Concesionario
let medioDeTransporte="Carro de carreras";
let loQuiero=medioDeTransporte=="Carro de carreras";
let costoCarro=30000
let prestamoBanco=10000
let pidePrestamo=medioDeTransporte && costoCarro<=Presupuesto+prestamoBanco;

//console.log(typeof loQuiero, loQuiero);

//(medioDeTransporte && Presupuesto>costoCarro)

if(medioDeTransporte && Presupuesto>costoCarro){
    medioDeTransporte=medioDeTransporte+" comprado";
}else if(pidePrestamo){//Pedir prestamo
    medioDeTransporte=medioDeTransporte+" prestamo"+" "+(Presupuesto + prestamoBanco);    
}else{
    medioDeTransporte=medioDeTransporte+" no fue comprado";
}

console.log(medioDeTransporte);

//Condicionales con switch
let diaActual="Lunes";
let mensaje="";
//Lunes => Estudiar interactiva 
if(diaActual=="Lunes"){
    mensaje="Estudiar interactiva ";
}

//Martes => Tenemos clase de programacion
else if(diaActual=="Martes"){
    mensaje="Tenemos clase de programacion";
}

//Miercoles => Tenemos clase de programacion
else if(diaActual=="Miercoles"){
    mensaje="Tenemos clase de programacion";
}

//Jueves => Tenemos clase de programacion
else if(diaActual=="Jueves"){
    mensaje="Tenemos clase de programacion";
}

//Viernes => Farrear
else if(diaActual=="Viernes"){
    mensaje="Farrear";
}

//Sabado => Limpiar hogar
else if(diaActual=="Sabado"){
    mensaje="Limpiar hogar";
}

//Defecto => Descansar
else{
    mensaje="Descansar";
}

console.log("Que hare el", diaActual+"?, "+ mensaje);

let elCaso="B";
switch (elCaso){
    case "A":
        console.log(elCaso);
    break;
    case "B":
        console.log(elCaso);
    break;
    case "C":
        console.log(elCaso);
    break;
    case "D":
        console.log(elCaso);
    break;
}
