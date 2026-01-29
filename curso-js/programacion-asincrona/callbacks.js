/*
ARCHIVO: callbacks.js
TEMA: Funciones de Retorno (Callbacks) en JavaScript
En este ejemplo se exploran:
- El concepto de pasar una función como argumento a otra.
- Control de flujo en procesos que dependen de un tiempo de espera.
- La ejecución asincrónica donde el código principal no se detiene.
- Uso de setTimeout para simular retrasos de red o procesos largos.
*/

// 1. DEFINICIÓN DE FUNCIONES
/**
 * Función que simula un proceso de espera.
 * @param {function} callback - Función que se ejecutará una vez termine la espera.
 */
function avanzaFila(callback) {
    // Simulamos un proceso de 5 segundos
    setTimeout(function() {
        console.log("Tu turno ha llegado");
        
        // Ejecutamos la función recibida después de la espera
        callback(); 
    }, 5000);
}

/**
 * Función que se encargará de reaccionar al aviso.
 */
function llamada() {
    console.log("Te presentas a tu turno");
}

// 2. EJECUCIÓN DEL CÓDIGO
// Mensaje inicial del hilo principal
console.log("Esperando turno...");

// Iniciamos el proceso asincrónico pasando la función 'llamada' como callback
// IMPORTANTE: Se pasa la referencia (sin paréntesis)
avanzaFila(llamada); 

// El código sigue su curso sin esperar los 5 segundos del setTimeout
console.log("Te vas a comprar cafe");

/*
RESULTADO EN CONSOLA:
1. "Esperando turno..."
2. "Te vas a comprar cafe" (Demuestra que el código NO se bloqueó)
3. ... (espera de 5 segundos) ...
4. "Tu turno ha llegado"
5. "Te presentas a tu turno" (El callback se ejecuta al final)
*/