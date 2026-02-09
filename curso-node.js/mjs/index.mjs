// index.mjs 

/**
 * Extensiones en Node.js:
 * .js  -> Por defecto utiliza CommonJS (require/module.exports)
 * .mjs -> Indica explícitamente el uso de ES Modules (import/export)
 * .cjs -> Indica explícitamente el uso de CommonJS
 */

// Importamos la función 'sum' desde el archivo local './sum.mjs'
// En ES Modules (.mjs), es obligatorio incluir la extensión del archivo
import { sum } from './sum.mjs'

// Ejecutamos la función importada y mostramos el resultado en consola
// Nota: sum(1, 2) debería retornar 3 si sum.mjs está correctamente definido
console.log(sum(1, 2));