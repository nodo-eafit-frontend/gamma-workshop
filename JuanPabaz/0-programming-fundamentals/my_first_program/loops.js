const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log('Numbers',numbers, numbers.length);

//Loops
//Iterations -> 10
let i=0;
let tam= numbers.length;
let multiplier=13;
console.log("La tabla del ",multiplier);

while(i<=10){
    let mensaje=multiplier+" x "+i+" =";
    let result=multiplier*i;
    console.log(mensaje, result);
    i++;
}

//----------------------------------------------
i=0;
tam= numbers.length;
multiplier=12;
do{
let mensaje=multiplier+" x "+i+" =";
    let result=multiplier*i;
    console.log(mensaje, result);
    i++;
}while(i<=10)

//----------------------------------------------
i=0;
tam= numbers.length;
multiplier=8;
for(i=0;i<=10;i++){
    let mensaje=multiplier+" x "+i+" =";
    let result=multiplier*i;
    console.log(mensaje, result);
    i++;
}

//Concesionario 

const car={numwheels: 1, color: "red", logo: "https://..."}
for (const key in car) {
    console.log(key, car[key])
}


for (const number of numbers) {
    console.log(number)
}