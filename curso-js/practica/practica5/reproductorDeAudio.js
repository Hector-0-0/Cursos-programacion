/*
ARCHIVO: reproductorDeAudio.js
TEMA: Eventos de Multimedia y Custom Events (Eventos Personalizados)
Este archivo muestra cómo controlar un reproductor de audio y crear eventos propios:

1. Evento 'change': Detecta cuándo el usuario selecciona una opción distinta en un <select>.
2. API de Audio: Uso de las propiedades .src y el método .play() para controlar el elemento <audio>.
3. CustomEvent: Creación de un evento propio llamado 'cambioDeCancion'.
4. dispatchEvent: La instrucción que "dispara" o lanza el evento personalizado al sistema.

DATO IMPORTANTE: Los eventos personalizados permiten que diferentes partes de tu código 
se comuniquen entre sí mediante señales que tú mismo defines.
*/

// --- 1. SELECCIÓN DE ELEMENTOS ---
let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

// --- 2. GESTIÓN DEL CAMBIO DE CANCIÓN ---

// Escuchamos cuando el usuario cambia la selección en la lista desplegable
listaCanciones.addEventListener('change', cambiarCancion);

/**
 * Cambia la fuente del audio, inicia la reproducción y lanza un evento personalizado.
 */
function cambiarCancion() {
    let cancionElegida = listaCanciones.value; // Obtenemos la ruta del archivo (.mp3)
    
    audio.src = cancionElegida; // Cambiamos la fuente del reproductor
    audio.play();               // Iniciamos la música automáticamente
    
    // --- CREACIÓN DEL EVENTO PERSONALIZADO ---
    // Definimos un nuevo evento llamado 'cambioDeCancion'
    let evento = new CustomEvent('cambioDeCancion');
    
    // Lanzamos el evento desde el elemento audio para que otros puedan escucharlo
    audio.dispatchEvent(evento);
}

// --- 3. ESCUCHA DEL EVENTO PERSONALIZADO ---



// Registramos un listener para nuestro propio evento 'cambioDeCancion'
audio.addEventListener('cambioDeCancion', mostrarCancion);

/**
 * Función que reacciona a nuestro evento personalizado.
 */
function mostrarCancion() {
    // Mostramos en consola la canción que se acaba de cargar
    console.log(`Reproduciendo: ${listaCanciones.value}`);
}