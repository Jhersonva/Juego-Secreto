//Cambiar Titulo
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// //Cambiar Parrafo
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 1;
// console.log(numeroSecreto);
let listaNumerosSorteados = [];
let nummeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // console.log(typeof(numeroDeUsuario));
    console.log(intentos);
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);

    // console.log(numeroDeUsuario === numeroSecreto);
   

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero en ' + intentos + (intentos == 1 ? 'ves' : 'veces') );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == nummeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else{


    //Si el numero generado esta incluido en la lista

        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto"); 
    asignarTextoElemento("p", "Indica un numero del 1 al " + nummeroMaximo); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();




