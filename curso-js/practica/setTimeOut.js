/*
ARCHIVO: setTimeout.js
TEMA: Temporizadores en JavaScript
En este ejemplo se utilizan:
- setTimeout(): Para ejecutar una función después de un retraso.
- Manipulación de propiedades CSS (.style.color).
- Obtención de valores de inputs (.value).
*/

// Referencias a los elementos del DOM
let elementoSegundos = document.getElementById("tiempoelegido");
let elementoTextoAlarma = document.getElementById("textoalarma");

function comenzarTiempo() {
    /* setTimeout recibe dos parámetros:
       1. La función a ejecutar (tiempoCumplido).
       2. El tiempo en milisegundos (segundos * 1000).
    */
    setTimeout(tiempoCumplido, 1000 * elementoSegundos.value);
}

function tiempoCumplido() {
    // Cambia el contenido del texto y su color a verde al finalizar
    elementoTextoAlarma.textContent = "ENCENDIDO!";
    elementoTextoAlarma.style.color = "green";
}