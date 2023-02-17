 // Declarar Variables
 let nombre = "Astrid Carolina";
 let apellidos = "Paredes Angel";
 let tipoSangre = "B+";
 let esFemenino = true;
 let edad = 30;
 let cedula = "1152440842";
 console.log(nombre, apellidos, tipoSangre, esFemenino, edad, cedula);
 
 // ==============================================
 // Condiciones
 // ==============================================
 console.log("==============================================");
 console.log("Eres mayor de edad?");
 let respuesta = 18 <= edad;
 console.log(respuesta);
 
 // ==============================================
 let cedulaReserva = "1152440842";
 console.log("==============================================");
 console.log("Esta es su cédula?", cedulaReserva);
 let respuesta2 = cedulaReserva === cedula;
 console.log(respuesta2);
 
 // Puedes entrar?
 console.log("==============================================");
 console.log("¿Puedes entrar?");
 let respuesta3 = respuesta || respuesta2;
 console.log(respuesta3);
 
 // Negación
 console.log("==============================================");
 console.log("Negar es femenino?", esFemenino);
 let respuesta4 = !esFemenino;
 console.log(respuesta4);