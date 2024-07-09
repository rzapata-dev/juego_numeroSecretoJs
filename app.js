let NumeroSecreto =0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros, Fin
    if (listaNumerosSorteados.length==numeroMaximo) {
        asginarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        document.getElementById('valorUsuario').setAttribute('disabled','true'); 
    } else{
    //Si el numeroGenerado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function asginarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); // Busca el elemento en la página
    elementoHTML.innerHTML = texto; // Cambia el contenido del elemento con el texto que le pasamos
    return;
    }

function verificarIntento(){
    cursorEnInput();
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(NumeroSecreto);
    intentos ++;
        if (numeroUsuario === NumeroSecreto){
            asginarTextoElemento('p',`Acertastes al numero en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('valorUsuario').setAttribute('disabled','true'); 
            
            //de aqui el boton
            document.getElementById('reiniciar').style.backgroundColor = "#ff5232";

        } else{
            //usuairo no acierta
            if(numeroUsuario>NumeroSecreto){
                asginarTextoElemento('p','El numero secreto es menor');
            }else{
                asginarTextoElemento('p','El numero secreto es mayor');
            }
            limpiarCaja();
    }
    return;  
    
    }

function limpiarCaja() {
    //el #valorUsuario, sale del id del elemento de html
    document.querySelector('#valorUsuario').value='';   
}

function cursorEnInput(){
//para que el cursor se ponga en el input
document.getElementById("valorUsuario").focus();
}

function condicionesIniciales(){
    asginarTextoElemento('h1','Juego del numero secreto');
    asginarTextoElemento('p',`Ingresa un numero entre el 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos=0;
    vidas=3;
    cursorEnInput();
    document.getElementById('reiniciar').style.backgroundColor = "#ffdfd4";
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //intervalo de numeros
    //generar el numero random
    //Inicializar el numero de intentos
    //reinicia vidas
    condicionesIniciales();
    //Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //el #reiniciar, es el id del html
    //cursor en input
    document.getElementById('valorUsuario').removeAttribute('disabled');
    cursorEnInput();
    
}

condicionesIniciales();
