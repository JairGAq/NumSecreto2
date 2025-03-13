// Autor: Jair Guerrero

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
    }else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor')
    }else{
        asignarTextoElemento('p','El numero secreto es mayor')
    }
    intentos++;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10)+1;
}

asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento ('p', 'Indica un numero del 1 al 10');