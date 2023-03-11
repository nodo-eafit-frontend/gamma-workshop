// Concesionario Ejemplo

const vehicles = [
  'Car',
  'Car',
  'Moto',
  'Moto',
  'Car',
  'Moto',
  'Car',
  'Moto',
  'Car',
  'Moto',
  'Car',
  'Biclycle',
  'Car',
  'Moto',
  'Car',
  'Car',
  'Car',
  'Moto',
  'Car',
  'Moto',
  'Car',
  'Car',
  'Moto',
  'Car',
  'Car',
  'Car',
  'Moto',
  'Moto',
  'Car',
  'Airplane',
  'Moto',
  'Car',
  'Car',
  'Moto',
  'Car',
  'Car',
  'Car',
  'Moto',
  'Car',
  'Car',
  'Car',
  'Car',
  'Car',
];

const carShop = {
  name: 'Genius Cars',
  address: 'Cr 30 # 20',
  vehicles,
};

// console.log(carShop.vehicles.length);

// let constador = 0;

// for (const vehicle of carShop.vehicles) {
//   if (vehicle === 'Moto') {
//     console.log(vehicle);
//     constador++;
//   }
// }

// carShop.vehicles.forEach(function (vehicle) {
//   if (vehicle === 'Moto') {
//     console.log(vehicle);
//     constador++;
//   }
// });

// console.log(constador);

const motos = carShop.vehicles.filter((vehicle) => vehicle === 'Moto');

console.log('Filter', motos, motos.length);

const hasAirplane = carShop.vehicles.some((vehicle) => vehicle === 'Biclycle');

console.log('Some Airplane?', hasAirplane);

// const positionVehicle = carShop.vehicles.indexOf('Biclycle');
const positionVehicle = carShop.vehicles.findIndex((vehicle) => vehicle === 'Airplane');

console.log('Location Biclycle', positionVehicle);
