/*
ARCHIVO: eventoTiempoReal.js
TEMA: Comunicación Bidireccional con WebSockets
Este archivo explica cómo enviar y recibir datos sin recargar la página:

1. WebSocket: Establece una conexión persistente entre el cliente y el servidor.
2. socket.send(): Método para enviar datos desde el navegador hacia el servidor.
3. socket.onmessage: Evento que se dispara automáticamente cuando el servidor envía datos.
4. Manipulación Dinámica: Creación de nodos (p) para mostrar el historial del chat.

DATO IMPORTANTE: A diferencia de Fetch, los WebSockets permiten que el servidor 
"empuje" información al usuario en cuanto esta ocurre.
*/

// --- 1. CONFIGURACIÓN DE LA CONEXIÓN ---
// Se abre el canal de comunicación usando el protocolo ws://
let socket = new WebSocket("ws://localhost:8080");

// Selección de elementos del DOM para la interfaz del chat
let mensajeIngresado = document.getElementById("mensajeIngresado");
let boton5 = document.getElementById("boton5");

// --- 2. FUNCIÓN DE RENDERIZADO ---

/**
 * Crea visualmente el mensaje en el área de chat.
 * @param {string} contenido - El texto que se desea mostrar.
 */
function mostrarMensajes(contenido) {
    let contenedorMensajes = document.getElementById("mensajesChat");
    
    // Creamos un nuevo párrafo para cada mensaje
    let elementoMensaje = document.createElement("p");
    elementoMensaje.innerText = contenido;
    
    // Lo añadimos al final del contenedor (historial)
    contenedorMensajes.appendChild(elementoMensaje);
}

// --- 3. LÓGICA DE ENVÍO Y RECEPCIÓN ---

// EVENTO DE ENVÍO: Cuando el usuario hace clic en el botón
boton5.onclick = function() {
    let mensaje = mensajeIngresado.value;
    
    // Mostramos nuestro propio mensaje en pantalla
    mostrarMensajes(mensaje);
    
    // Enviamos el mensaje al servidor a través del socket
    socket.send(mensaje);
    
    // Limpiamos el campo de entrada (opcional pero recomendado)
    mensajeIngresado.value = "";
};



// EVENTO DE RECEPCIÓN: Cuando alguien más envía un mensaje y el servidor nos avisa
socket.onmessage = function(event) {
    // Extraemos el contenido del evento (la data enviada por el servidor)
    let mensaje = event.data;
    
    // Lo mostramos en nuestra interfaz automáticamente
    mostrarMensajes(mensaje);
};