console.clear();



let global = "Es global"

let name = "Alexander"
let local = "Está también es local"

function variableLocal() {
    let local = "Esta es local"
    console.log(local);
}
variableLocal()

{
    let usuario = "Astrid"
    console.log(usuario);
}

console.log(global);
console.log(name);
console.log(local)