export function valida(input){
    const tipoDeInput= input.dataset.tipo; /* verifica el tipo de input */
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    /* verificar si esta o no valdido  si no esta lo remarcara*/
    if (input.validity.valid){
        /* usamos parent par indicar al padre  */
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML= mostrarMensajeDeError(tipoDeInput, input)
    }
}

/* creamos unarreglo para los errores */
const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",];

const mensajesDeError={
    nombre:{
        /* valueMissing  , verificamos si el valor esta faltando mensaje */
        valueMissing:"este campo nombre no puede estar vacio"
    },
    email:{
        valueMissing:"este campo correo  no puede estar vacio",
        typeMismatch:"el correo no es valido"
    },
    password:{
        valueMissing:"este campo  password no puede estar vacio",
        patternMismatch:"Almenos 6 caracteres, maximo 12 debe contener una letra minuscula una mayuscula un numero y no caracteres especiales"
    },
    nacimiento:{
        valueMissing:"este campo  nacimiento no puede estar vacio",
        customError:"debes tener al menos 18 años"
    },
    numero:{
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"el formato requerido es xxx xxxxxxxx 10 numeros "
    },
    direccion: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 10 a 40 caracteres "
    },
    ciudad: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 3 a 15 caracteres "
    },
    estado: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 5 a 20 caracteres "
    }
}

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje="";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}

const validadores={
    /* aQUI ESTRAN TODOS LOS INPUTS QUE VAMOS A TENER */
    nacimiento: input=> validarnacimiento(input),
};

/* validar nacimiento */
function validarnacimiento(input){
    const fechaCliente =new Date (input.value);
    mayorDeEdad(fechaCliente);

    let mensaje="";
    if(!mayorDeEdad(fechaCliente)){
        mensaje="debes tener al menos 18 años"
    }
    /* setCustomValidity define el msj de validacion personalizado para el lemento selecionadoo  */
    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas= new Date(
        fecha.getUTCFullYesar() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
        );
    return(diferenciaFechas <= fechaActual);
}