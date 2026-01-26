/*
ARCHIVO: setTimeout.js
TEMA: Temporizadores y Reloj en Tiempo Real
En este ejemplo se utilizan:
- setTimeout(): Ejecuta la alarma tras el tiempo elegido.
- setInterval(): Actualiza el reloj cada segundo (1000ms).
- Objeto Date: Para obtener la hora, minutos y segundos actuales.
- Audio Playback: Control del sonido de la alarma.
*/

// Referencias a los elementos del DOM
let elementoSegundos = document.getElementById("tiempoelegido");
let elementoTextoAlarma = document.getElementById("textoalarma");
let elementoSonidoAlarma = document.getElementById("audioAlarma");
let tictac_id; // Variable para almacenar el ID del intervalo del reloj

function comenzarTiempo() {
    /* Al hacer clic, se programa la ejecución de tiempoCumplido
       multiplicando el valor del input por 1000ms */
    setTimeout(tiempoCumplido, 1000 * elementoSegundos.value);
}

function tiempoCumplido() {
    // Al cumplirse el tiempo: cambia el texto a rojo, suena la alarma y se detiene el reloj
    elementoTextoAlarma.style.color = "red";
    elementoSonidoAlarma.play(); 
    clearInterval(tictac_id); 
}

function comenzarReloj() {
    // Inicia el intervalo para que la función tictac se ejecute cada segundo
    tictac_id = setInterval(tictac, 1000);
}

function tictac() {
    let tiempoActual = new Date(); // Obtiene la fecha/hora actual
    let hora = tiempoActual.getHours();
    
    // .padStart(2, '0') asegura que siempre haya dos dígitos (ej: "05" en lugar de "5")
    let minutos = String(tiempoActual.getMinutes()).padStart(2, '0');
    let segundos = String(tiempoActual.getSeconds()).padStart(2, '0');
    
    let textoHora = hora + ":" + minutos + ":" + segundos;
    
    // Actualiza el contenido visual del reloj
    elementoTextoAlarma.textContent = textoHora;
    elementoTextoAlarma.style.color = "black";
}