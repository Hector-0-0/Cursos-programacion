// 3.fs-readFile-callbacks.mjs
import fs from 'node:fs';

// --- MÉTODO SÍNCRONO (Bloqueante) ---
/**
 * fs.readFileSync detiene la ejecución del programa hasta que el archivo se lee por completo.
 * Si los archivos son muy grandes, tu aplicación se quedará "congelada" aquí.
 */
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log('--- RESULTADOS SÍNCRONOS ---');
console.log('Contenido del archivo:', text);
console.log('Contenido del segundo archivo:', secondText);


// --- MÉTODO ASÍNCRONO (No bloqueante con Callbacks) ---
/**
 * fs.readFile inicia la lectura y continúa con el resto del código inmediatamente.
 * No espera a que termine la lectura para seguir con la siguiente línea.
 */
console.log('\nIniciando lecturas asíncronas...');

// Leemos el primer archivo
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
    /**
     * Esta función es el "Callback". Node la llamará cuando termine de leer.
     * El primer parámetro 'err' contendrá el error si algo sale mal (ej: archivo no existe).
     */
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('-> Contenido del primer archivo (asíncrono):', data);
});

/**
 * Este mensaje aparecerá en consola ANTES que el contenido de los archivos.
 * Esto demuestra que Node no se detiene a esperar las respuestas del disco duro.
 */
console.log("Haciendo cosas mientras se lee el archivo...");

// Leemos el segundo archivo
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el segundo archivo:', err);
        return;
    }
    console.log('-> Contenido del segundo archivo (asíncrono):', data);
});