// 1.os-info.mjs

// Importamos el módulo nativo 'os' usando el prefijo 'node:' (buena práctica moderna)
import os from 'node:os';

console.log('Información del sistema operativo:');
console.log('----------------------------------');

// .platform() devuelve la plataforma (ej: 'win32', 'linux', 'darwin')
console.log("Nombre del sistema operativo:", os.platform());

// .release() nos da la versión específica del kernel/sistema
console.log("Versión del sistema operativo:", os.release());

// .arch() indica la arquitectura de la CPU (ej: 'x64', 'arm64')
console.log("Arquitectura del sistema operativo:", os.arch());

// .cpus() devuelve un array de objetos con info de cada núcleo (modelo, velocidad, etc.)
console.log("CPUs:", os.cpus());

// .freemem() muestra la memoria RAM disponible en bytes
console.log("Memoria libre:", os.freemem(), 'bytes');

// .totalmem() muestra la capacidad total de la RAM en bytes
console.log("Memoria total:", os.totalmem(), 'bytes');

/**
 * .uptime() devuelve los segundos que el PC lleva encendido.
 * Dividir entre 60 (minutos) y luego entre 60 (horas) lo hace legible.
 */
console.log("Uptime: ", os.uptime() / 60 / 60, ' horas');