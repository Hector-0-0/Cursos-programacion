// 6.process.mjs

/**
 * El objeto 'process' es una variable global que proporciona información 
 * y control sobre el proceso actual de ejecución de Node.js.
 */

// 1. Argumentos de entrada (process.argv)
/**
 * Devuelve un array con los argumentos pasados en la línea de comandos.
 * [0]: Ruta del ejecutable de Node.
 * [1]: Ruta del archivo que se está ejecutando.
 * [2...n]: Argumentos adicionales proporcionados por el usuario.
 */
console.log('Argumentos de entrada:', process.argv);

// 2. Controlar el proceso y su salida (process.exit)
/**
 * Finaliza el proceso de forma inmediata.
 * process.exit(0) -> Indica que todo salió bien (Éxito).
 * process.exit(1) -> Indica que algo falló (Error).
 */
// process.exit(0); 

// 3. Controlar eventos del proceso (process.on)
/**
 * Podemos escuchar eventos específicos del ciclo de vida del proceso.
 * El evento 'exit' se dispara justo antes de que Node.js termine.
 */
process.on('exit', () => {
    console.log('El proceso va a finalizar');
    // Aquí podrías limpiar recursos o cerrar conexiones, 
    // pero no puedes ejecutar código asíncrono aquí dentro.
});

// 4. Directorio de trabajo actual (process.cwd)
/**
 * Devuelve la ruta desde donde estás ejecutando el comando en la terminal.
 * Nota: No es necesariamente la carpeta donde está el archivo .js, 
 * sino donde está "parada" tu terminal.
 */
console.log('Directorio de trabajo actual (CWD):', process.cwd());

// 5. Variables de entorno (process.env)
/**
 * Permite acceder a las variables configuradas en el sistema o en archivos .env.
 * Útil para manejar secretos (API Keys), puertos de servidor o modos (dev/prod).
 */
console.log('Variables de entorno:', process.env.VARIABLE_NO_EXISTE || 'Valor por defecto');