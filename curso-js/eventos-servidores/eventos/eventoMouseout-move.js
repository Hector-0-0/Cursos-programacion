/*
ARCHIVO: eventoMouseout-move.js
TEMA: Eventos Avanzados de Ratón (Mouseover, Mouseout, Mousemove)
Este archivo demuestra cómo crear componentes dinámicos (como menús) y rastrear coordenadas:

1. Visibilidad Dinámica: Uso de 'mouseover' y 'mouseout' para mostrar/ocultar elementos.
2. Rastreo de Coordenadas: Uso de 'mousemove' para obtener la posición exacta del cursor.
3. Propiedades CSS: Manipulación de la propiedad 'display' para controlar el flujo del documento.

DATO IMPORTANTE: El evento 'mousemove' se dispara constantemente (muchas veces por segundo) 
mientras el ratón se mueve, lo que permite una interactividad de alta precisión.
*/

// --- 1. SELECCIÓN DE ELEMENTOS ---
let menu = document.getElementById("mimenu");
let boton4 = document.getElementById("boton4");

// --- 2. GESTIÓN DE VISIBILIDAD (MENÚ DESPLEGABLE) ---

// Muestra el menú cuando el puntero entra en el área del botón
boton4.addEventListener("mouseover", function(){
    // Cambiamos el display de 'none' (oculto) a 'block' (visible)
    menu.style.display = "block";
});

// Oculta el menú cuando el puntero sale del área del botón
boton4.addEventListener("mouseout", function(){
    menu.style.display = "none";
});

// --- 3. RASTREO DE MOVIMIENTO Y COORDENADAS ---

/**
 * Detecta el movimiento dentro del botón y captura las coordenadas.
 * @param {MouseEvent} event - Objeto que contiene las propiedades clientX y clientY.
 */
boton4.addEventListener("mousemove", function(event){
    // clientX: Posición horizontal respecto a la ventana del navegador.
    // clientY: Posición vertical respecto a la ventana del navegador.
    console.log("Movimiento del ratón sobre el botón" + 
                " Posicion X: " + event.clientX + 
                " Posición Y: " + event.clientY);
});