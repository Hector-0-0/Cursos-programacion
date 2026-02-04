// 3.fs-readFile-paralelo.mjs

// Importamos la versión de promesas del módulo File System
import fs from 'node:fs/promises';

/**
 * Promise.all recibe un array de promesas.
 * Ventaja: Ambas lecturas de archivo se inician simultáneamente (en paralelo).
 * Es mucho más rápido que usar 'await' línea por línea si los archivos son independientes.
 */
Promise.all([
    fs.readFile('./archivo.txt', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8')
])
/**
 * .then() se ejecuta solo cuando TODAS las promesas del array se han cumplido.
 * Recibimos un array con los resultados en el mismo orden en que enviamos las promesas.
 * Usamos desestructuración ([data, data2]) para asignar los nombres fácilmente.
 */
.then(([data, data2]) => {
    console.log('Contenido del archivo (asincrono - paralelo):');
    console.log('-----------------------------------------');
    console.log(data);

    console.log('Contenido del segundo archivo (asincrono - paralelo):');
    console.log('---------------------------------------');
    console.log(data2);
})
/**
 * .catch() capturará el error si CUALQUIERA de las promesas falla.
 * Si './archivo.txt' existe pero './archivo2.txt' no, entrará aquí directamente.
 */
.catch((err) => {
    console.error('Error al leer los archivos:', err);
});