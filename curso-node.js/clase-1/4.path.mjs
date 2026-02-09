// 4.path.mjs
import path from 'node:path';

// Muestra la barra separadora de carpetas que utiliza tu sistema operativo actual
// En Windows es '\' y en Linux/Unix es '/'
console.log('Separador del SO:', path.sep);

/**
 * path.join(): Une segmentos de rutas usando el separador correcto del SO.
 * Evita errores comunes al concatenar rutas manualmente como strings.
 */
const rutaCompleta = path.join('/carpeta1', 'carpeta2', 'archivo.txt');
console.log('Ruta unida:', rutaCompleta);

/**
 * path.basename(): Obtiene la última parte de una ruta (el nombre del archivo).
 */
const nombreArchivo = path.basename(rutaCompleta);
console.log('Nombre del archivo con extensión:', nombreArchivo);

/**
 * Para obtener el nombre sin la extensión, pasamos la extensión como segundo argumento.
 * path.extname() extrae la extensión automáticamente para usarla como filtro.
 */
const nombreSinExtension = path.basename(rutaCompleta, path.extname(rutaCompleta));
console.log('Nombre del archivo limpio:', nombreSinExtension);

/**
 * path.extname(): Devuelve la extensión del archivo incluyendo el punto (.).
 */
const extensionArchivo = path.extname(rutaCompleta);
console.log('Extensión:', extensionArchivo);

/**
 * path.resolve(): Convierte una ruta relativa en una RUTA ABSOLUTA.
 * Toma como base el directorio donde estás ejecutando el script en la terminal.
 */
const rutaAbsoluta = path.resolve('archivo.txt');
console.log('Ruta completa desde la raíz de tu PC:', rutaAbsoluta);