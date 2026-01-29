/*
ARCHIVO: sincroniaAsincronia.js
TEMA: Sincronía y Asincronía en JavaScript
En este ejemplo se exploran:
- El modelo de ejecución de un solo hilo (Single Thread).
- Bloqueo del hilo principal mediante bucles (Sincronía).
- Delegación de tareas mediante Web APIs (Asincronía).
- El funcionamiento del Event Loop y la Callback Queue.
- Uso de setTimeout con retardo de 0ms.
*/

// 1. EJECUCIÓN SINCRÓNICA (Secuencial)
// El código se ejecuta línea por línea. Cada tarea espera a la anterior.
console.log("--- INICIO PRUEBA SINCRÓNICA ---");
console.log("Acción 1");

// Esta acción "bloquea" la ejecución hasta que el bucle termina
for(let i = 0; i < 3; i++) {
    console.log("Acción 2 (Sincrónica): Iteración " + i);
}

console.log("Acción 3");
console.log("--- FIN PRUEBA SINCRÓNICA ---");


// 2. EJECUCIÓN ASINCRÓNICA (No bloqueante)
// Las tareas pesadas se delegan para no trabar el hilo principal.
console.log("\n--- INICIO PRUEBA ASINCRÓNICA ---");

// Acción 1
console.log("1. Inicio del código asincrónico");

// Acción 2: setTimeout es una función asincrónica
// Aunque tiene 0ms, se envía a la "cola de espera" (Callback Queue)
setTimeout(function() {
    for(let i = 0; i < 10; i++) {
        console.log(`2. Iteración asincrónica ${i}`);
    }
}, 0);

// Acción 3
// Se ejecuta inmediatamente después de la Acción 1, sin esperar al bucle
console.log("3. Fin del código asincrónico");



/* NOTA TÉCNICA:
En la consola verás que el mensaje "3. Fin..." aparece ANTES que las iteraciones.
Esto sucede porque JavaScript prioriza vaciar la pila de ejecución (Stack)
antes de atender las tareas pendientes en la cola de mensajes.
*/