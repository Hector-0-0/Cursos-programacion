/*
ARCHIVO: eventoClickMouseover.js
TEMA: Introducción a Eventos del DOM (Click y Mouseover)
En este archivo se explica cómo detectar acciones del usuario sobre elementos HTML:

1. Selección de Elementos: Uso de 'document.getElementById' para referenciar etiquetas del HTML.
2. Definición de Funciones (Handlers): Bloques de código que se ejecutan cuando ocurre el evento.
3. Listeners (Escuchadores): El método 'addEventListener' que vincula el evento con la función.

DATO IMPORTANTE: 'addEventListener' permite separar la lógica de JavaScript del código HTML,
manteniendo un desarrollo más limpio y organizado.
*/

// --- 1. SELECCIÓN DE ELEMENTOS ---
// Guardamos en variables los elementos del HTML mediante su ID
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

// --- 2. DEFINICIÓN DE LAS FUNCIONES DE EVENTO ---

/**
 * Función que se dispara al hacer clic.
 * Muestra una ventana emergente de alerta.
 */
function eventoClick() {
    alert("Haz hecho click en el botón");
}

/**
 * Función que se dispara al pasar el ratón por encima.
 * Cambia el color de fondo del elemento mediante la propiedad .style
 */
function eventoMouseover() {
    // Modificamos el estilo CSS directamente desde JavaScript
    boton2.style.backgroundColor = "red";
}

// --- 3. VINCULACIÓN DE EVENTOS (LISTENERS) ---

// Escuchamos el evento 'click' en el boton1 y ejecutamos eventoClick
boton1.addEventListener("click", eventoClick);

// Escuchamos el evento 'mouseover' (pasar el puntero) en el boton2
boton2.addEventListener("mouseover", eventoMouseover);