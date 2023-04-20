/*---------PARA GUARDAR INPUT Y EL FORMULARIO---------*/
const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input");


/*---------EXPRESIONES REGULARES---------*/
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // CAMPO USUARIO ACEPTE LETRAS MINUSCULAS Y MAYUSCULAS DE LA A HASTA LA Z, NÚMEROS DEL 0 HASTA EL 9, GUIONES BAJOS, GUIONES MEDIO Y UNA CANTIDAD MINIMA DE 4 CARACTERES Y MAXIMA DE 16 CARACTERES
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //LETRAS CON O SIN ACENTO Y ESPACIOS
    password: /^.{4,12}$/, // SÓLO ACEPTARA UN MINIMO DE 4 DIGITOS Y UN MÁXIMO DE 12 DIGITOS
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    telefono: /^\d{7,14}$/ // ACEPTARA MINIMO 7 Y MAXIMO 14 NÚMEROS
}


/*---------CAMPOS---------*/
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}


/*---------SELECCIONA EL INPUT DONDE SE CENTRE EL USUARIO---------*/
const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, "usuario");
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
    }
}


/*---------VALIDACIÓN DE INPUTS---------*/
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById('group__${campo}').classList.remove('formulario__group-incorrecto');
        document.getElementById('group__${campo}').classList.add('formulario__group-correcto');
        document.querySelector('#group__${campo} i').classList.remove('fa-times-circle');
        document.querySelector('#group__${campo} i').classList.add('fa-check-circle');
        document.querySelector('#group__${campo} .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[campo] = true;
        console.log("Funciona");
    } 
    else {
           document.getElementById('group__${campo}').classList.add('formulario__group-incorrecto');
           document.getElementById('group__${campo}').classList.remove('formulario__group-correcto');
           document.querySelector('#group__${campo} i').classList.add('fa-times-circle');
           document.querySelector('#group__${campo} i').classList.remove('fa-check-circle');
           document.querySelector('#group__${campo} .formulario__input-error').classList.add('formulario__input-error-activo');
           campos[campo] = false;
           console.log("Funciona");
        }
}


/*---------VALIDACIÓN DE PASSWORD'S---------*/
const validarPassword2 = () => {
    let inputPassword1 = document.getElementById("password");
    let inptPassword2 = document.getElementById("password2");

    if (inputPassword1.value !== inptPassword2.value) {
        document.getElementById('group__password2').classList.add("formulario__group-incorrecto");
        document.getElementById('group__password2').classList.remove("formulario__group-correcto");
        document.querySelector('#group__password2 i').classList.add("fa-times-circle");
        document.querySelector('#group__password2 i').classList.remove("fa-check-circle");
        document.querySelector('#group__password2 .formulario__input-error').classList.add("formulario__input-error-activo");
        campos[password] = false;
        console.log("Funciona");
    } else {
        document.getElementById('group__password2').classList.remove("formulario__group-incorrecto");
        document.getElementById('group__password2').classList.add("formulario__group-correcto");
        document.querySelector('#group__password2 i').classList.remove("fa-times-circle");
        document.querySelector('#group__password2 i').classList.add("fa-check-circle");
        document.querySelector('#group__password2 .formulario__input-error').classList.remove("formulario__input-error-activo");
        campos[password] = true;
        console.log("Funciona");
    }
}


/*---------SE CAPTURA CADA QUE EL USUARIO PRESIONA UNA TECLA---------*/
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


/*---------VALIDACIÓN DEL FORMULARIO COMPLETO---------*/
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $terminos = document.getElementById("terminos");
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && $terminos.checked) {
        // formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
            document.getElementById("formulario__grupo-terminos").style.display = "none";
            
        }, 3000);
        
        document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
            icono.classList.remove("formulario__grupo--correcto");
        });
        
        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});