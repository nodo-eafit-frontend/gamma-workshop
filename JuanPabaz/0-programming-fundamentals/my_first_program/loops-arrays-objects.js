//Concesionario ejemplo

const vehicles=[
    "car 1",
    "car 1",
    "Moto",
    "car 1",
    "Moto",
    "car 1",
    "car 1",
    "Moto",
    "Avion",
    "car 1",
    "car 1",
    "Moto",
    "car 1",
    "Moto",
    "car 1",
    "car 1",
]
const carshop={
    name:"Genius cars",
    address:"Cr30#20",
    vehicles,
};

/*console.log(carshop.vehicles.length);
let contador=0;
for (const vehicle in carshop.vehicles) {
    if (vehicle=="Moto"){
        console.log(vehicle);
        contador++;
    }

}
console.log(contador);

let contador=0;
carshop.vehicles.forEach(function(vehicles){
    if (vehicles=="Moto"){
        console.log(vehicles);
        contador++;
    }
})
console.log(contador);
*/

function iteratorFn(vehicles){
    if(vehicles=="Moto"){
        return true;
    }else{
        return false;
    }
    
}

const motos=carshop.vehicles.filter((vehicles)=>vehicles=="Moto")

console.log(motos.length)

const HasAirPlane= carshop.vehicles.some((vehicles)=>vehicles=="Avion");

console.log(HasAirPlane)