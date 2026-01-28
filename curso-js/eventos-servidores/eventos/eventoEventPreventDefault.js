/*
ARCHIVO: eventoEventPreventDefault.js
TEMA: El Objeto 'event', Propagación y preventDefault()
Este archivo demuestra el control avanzado sobre los eventos:

1. El Objeto Event: JS pasa automáticamente un objeto 'event' a la función con 
   detalles del suceso (tipo, origen, coordenadas, etc.).
2. event.target vs event.currentTarget: Diferencia entre quién recibió el clic 
   original y quién tiene el "escuchador".
3. event.preventDefault(): Método para cancelar acciones automáticas del navegador 
   (como seguir un link o enviar un formulario).
*/

// --- 1. SELECCIÓN DE ELEMENTOS ---
let div1 = document.getElementById("div1");
let enlace1 = document.getElementById("enlace1");

// --- 2. FUNCIONES DE MANEJO DE EVENTOS ---

/**
 * Muestra información técnica sobre el evento disparado.
 * @param {Event} event - El objeto que contiene la información del evento.
 */
function mostrarMensaje(event) {
    // .type: indica qué evento fue (click, mouseover, etc.)
    // .target.id: indica el elemento exacto donde se hizo clic (el origen)
    alert("Evento: " + event.type + "\n" + "Id del elemento que lo origina: " + event.target.id);
    
    // .currentTarget.id: indica el elemento que está manejando el evento actualmente
    alert("Elemento que tiene el listener adjunto: " + event.currentTarget.id);
}

/**
 * Cancela la navegación de un enlace.
 * @param {Event} event - Objeto del evento.
 */
function prevenirComportamientoDefault(event) {
    // Detiene la acción natural del navegador (ej. abrir una URL)
    event.preventDefault();
    
    alert("Has hecho clic en el enlace, pero no te he llevado a Google.");
}

// --- 3. ASIGNACIÓN DE LISTENERS ---

// Al hacer clic en el div (o sus hijos), se mostrarán sus propiedades
div1.addEventListener("click", mostrarMensaje);

// Al hacer clic en el enlace, se activa la prevención del comportamiento base
enlace1.addEventListener("click", prevenirComportamientoDefault);