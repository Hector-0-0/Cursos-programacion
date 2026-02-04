// 3.fs-readFile-asyncAwait.mjs

// Importamos la versión de 'fs' que devuelve Promesas en lugar de usar callbacks
import fs from 'node:fs/promises';

// --- PRIMERA FORMA: Top Level Await (solo disponible en módulos .mjs) ---

console.log('Leyendo el primer archivo de forma asincrona...');

/**
 * Usamos 'await' para esperar a que la promesa de readFile se resuelva.
 * 'utf-8' es la codificación para recibir el texto legible y no un Buffer de bytes.
 */
const data = await fs.readFile('./archivo.txt', 'utf-8');
console.log('Contenido del archivo (asincrono - async/await):');
console.log('-----------------------------------------');
console.log(data);

// Esta línea demuestra que, aunque es asíncrono, el 'await' pausa la ejecución
// secuencial de este hilo hasta que el archivo se termina de leer.
console.log("Haciendo cosas mientras se lee el archivo...");

const data2 = await fs.readFile('./archivo2.txt', 'utf-8');
console.log('Contenido del segundo archivo (asincrono - async/await):');
console.log('---------------------------------------');
console.log(data2);


// --- SEGUNDA FORMA: IIFE (Immediately Invoked Function Expression) ---

/**
 * Esta es una función que se ejecuta a sí misma inmediatamente.
 * Se usaba mucho antes de que existiera el Top Level Await y se sigue usando
 * para envolver lógica asíncrona dentro de bloques try/catch limpios.
 */
(async () => {
    try {
        const data = await fs.readFile('./archivo.txt', 'utf-8');
        console.log('Contenido del archivo (asincrono - async/await - IIFE):');
        console.log('-----------------------------------------');
        console.log(data);
    } catch (err) {
        // Es vital manejar los errores en asincronía para evitar que la app truene
        console.error('Error al leer el archivo:', err);
    }
})();