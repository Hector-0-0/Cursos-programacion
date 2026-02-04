// 3.fs-readFile-promises.mjs

// Importamos la versión de 'fs' basada en Promesas directamente
import fs from 'node:fs/promises';

// --- MÉTODO ASÍNCRONO CON PROMESAS (.then / .catch) ---

console.log('Leyendo el primer archivo de forma asíncrona...');

/**
 * Al usar fs/promises, readFile ya no necesita un callback.
 * En su lugar, devuelve un objeto 'Promise' que representa una operación futura.
 */
fs.readFile('./archivo.txt', 'utf-8')
    .then((data) => {
        /**
         * .then() se ejecuta cuando la lectura es exitosa (Promesa resuelta).
         * Recibimos los datos directamente como parámetro.
         */
        console.log('Contenido del archivo (asíncrono - promises):');
        console.log('-----------------------------------------');
        console.log(data);
    })
    .catch((err) => {
        /**
         * .catch() captura errores de forma centralizada (Promesa rechazada).
         * Mucho más limpio que manejar errores dentro de cada callback.
         */
        console.error('Error al leer el archivo:', err);
    });

// Este mensaje se imprimirá antes que el contenido de los archivos, 
// confirmando que el hilo principal no se detiene.
console.log("Haciendo cosas mientras se lee el archivo...");

// Lectura del segundo archivo (se ejecuta en paralelo a la primera)
fs.readFile('./archivo2.txt', 'utf-8')
    .then((data) => {
        console.log('Contenido del segundo archivo (asíncrono - promises):');
        console.log('---------------------------------------');
        console.log(data);
    })
    .catch((err) => {
        console.error('Error al leer el segundo archivo:', err);
    });


/**
 * --- OTRA FORMA DE HACERLO (Legacy/Compatibilidad) ---
 * Si estuvieras en una versión muy vieja de Node que no tuviera fs/promises,
 * podrías transformar funciones de callback en promesas manualmente así:
 * * import fs from 'node:fs';
 * import { promisify } from 'node:util';
 * * const readFileAsync = promisify(fs.readFile);
 * * readFileAsync('./archivo.txt', 'utf-8')
 * .then(data => console.log(data));
 */