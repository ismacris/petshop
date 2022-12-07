import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
/* con esta  inputs.forEach( input =>  buscara todos lo inputs que hay en el html */
/*  luego le agregara a estos inputs  el addEventListener('blur'  cuando salga de foco  */
/*y cuando salga de foco mandarea a llamara a  valida (input.target) que esta en validadicones */
inputs.forEach( input => {
    /*addEventListener  el tipo de evento que quiero escuchar, blur es el tipo de evento que quiero cuando salga*/
    input.addEventListener('blur',(input)=>{
        valida(input.target)
    })
})


