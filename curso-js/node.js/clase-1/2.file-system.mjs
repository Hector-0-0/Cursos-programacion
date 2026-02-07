// 2.file-system.mjs

// Importamos el módulo nativo 'node:fs' (File System)
// Este módulo permite interactuar con los archivos y directorios del sistema
import fs from "node:fs";

/**
 * fs.statSync() obtiene información del archivo de forma SÍNCRONA.
 * Node.js se detendrá aquí hasta que termine de leer los metadatos.
 * Nota: Asegúrate de que './archivo.txt' exista en la misma carpeta.
 */
const stats = fs.statSync('./archivo.txt');

console.log('Información del archivo:');
console.log('----------------------');

// Comprobamos si la ruta apunta a un archivo normal
if(stats.isFile()) {
    console.log('Es un archivo.');
}
// Comprobamos si la ruta apunta a una carpeta (directorio)
else if(stats.isDirectory()) {
    console.log('Es un directorio.');
}
// Comprobamos si es un acceso directo o enlace simbólico
else if(stats.isSymbolicLink()) {
    console.log('Es un enlace simbólico.');
}

/**
 * stats.size devuelve el peso del archivo en bytes.
 * Otros datos útiles en 'stats' son:
 * - stats.atime: última vez que se accedió.
 * - stats.mtime: última vez que se modificó.
 */
console.log('Tamaño:', stats.size, 'bytes');