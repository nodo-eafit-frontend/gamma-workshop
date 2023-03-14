// Consecionario Ejemplo

const vehicles = [
    'Car 1',
    'Car 1',
    'Car 1',
    'Car 1',
    'Car 1',
    'Car 1',
    'Car 1',
    'Car 1',
    'Airplane',
    'Car 1',
    'Moto',
    'Car 1',
    'Car 1',
    'Moto',
    'Car 1',
    'Car 1',
    'Car 1',
    'Moto',
    'Moto',
    'Moto',
    'Car 1',
    'Car 1',
    'Car 1',
    'Car 1',
    'Moto',
    'Airplane',
    'Moto',
    'Car 1',
    'Moto',
    'Car 1',
    'Car 1',
    'Car 1',
    'Bycicle',
    'Moto',
    'Moto',
    'Car 1',
    'Car 1',
    'Moto',
    'Moto',
    'Car 1',
    'Car 1',
];

const carShop = {
    name: 'Genius Cars', 
    address: 'cr 30 # 20',
    vehicles,
};

// console.log(carShop.vehicles.length);
// let constador = 0

// for (const vehicle of carShop.vehicles) {
//     if (vehicle === 'Moto') {
//         console.log(vehicle);
//         constador++;
//     }
//   }
//   console.log(constador);

// carShop.vehicles.forEach(function (vehicle) {
//     if (vehicle === 'Moto') {
//         console.log(vehicle);
//         constador++;
//     }
// });
// console.log(constador); 


const motos = carShop.vehicles.filter((vehicle) => vehicle === 'Moto');
console.log('Filter' ,motos, motos.length);

const hasAirplane = carShop.vehicles.some((vehicle) => vehicle === 'Bycicle');
console.log('Some Airplane?', hasAirplane);

// const positionVehicle = carShop.vehicles.indexOf(Bicycle);
const positionVehicle = carShop.vehicles.findIndex((vehicle) => vehicle === 'Airplane');
console.log('Location Bicycle' , positionVehicle);

