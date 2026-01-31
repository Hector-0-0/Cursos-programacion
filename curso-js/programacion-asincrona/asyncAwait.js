/*
ARCHIVO: asyncAwait.js
TEMA: Asincronía con Async y Await
En este ejemplo se exploran:
- Definición de funciones asincrónicas mediante la palabra clave 'async'.
- Uso del operador 'await' para pausar la ejecución hasta que una promesa se resuelva.
- Consumo de APIs externas mediante la Fetch API.
- Flujo secuencial de múltiples peticiones asincrónicas.
- Comprobación de la naturaleza no bloqueante del hilo principal.
*/

// 1. PETICIÓN BÁSICA CON ASYNC/AWAIT
/**
 * Obtiene personajes de la API de Rick and Morty de forma asincrónica.
 */
async function obtenerDatos() {
    // await detiene la ejecución de ESTA función hasta que fetch termine
    let respuesta = await fetch("https://rickandmortyapi.com/api/character");
    
    // Esperamos a que el cuerpo de la respuesta se transforme a JSON
    let datos = await respuesta.json();
    
    console.log(datos);
}

// Ejecución de la función
obtenerDatos();

// Este log aparecerá ANTES que los datos de la API
console.log("El codigo sigue");


// 2. MÚLTIPLES PETICIONES SECUENCIALES
/**
 * Realiza varias consultas en orden, esperando que una termine para empezar la otra.
 */
async function almacenarDatos() {
    console.log("Iniciando las peticiones");

    // Primera petición: Personajes
    let respuesta = await fetch("https://rickandmortyapi.com/api/character");
    let datos1 = await respuesta.json();
    console.log(datos1);

    console.log("Segunda peticion");

    // Segunda petición: Locaciones (solo inicia cuando la primera termina)
    let respuesta2 = await fetch("https://rickandmortyapi.com/api/location");
    let datos2 = await respuesta2.json();
    console.log(datos2);

    console.log("Acabando las peticiones");
}



// Ejecución de la función compleja
almacenarDatos();

// El hilo principal nunca se detiene, por lo que este mensaje sale de inmediato
console.log("El codigo sigue");