/*
ARCHIVO: manejoErrores.js
TEMA: Gestión Integral de Errores en JavaScript
En este ejemplo se comparan todos los métodos de manejo de fallos:
- Pattern Error-First (Callbacks): Estándar en librerías antiguas.
- Manejo con Promesas (.then/.catch): El puente hacia la modernidad.
- Async/Await con Try/Catch/Finally: La forma más robusta y legible.
- Bloque Finally: Ejecución de código obligatorio sin importar el resultado.
*/

// --- 1. CASO: CALLBACKS (Patrón Error-First) ---
function sumarCallback(n1, n2, callback) {
    setTimeout(() => {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return callback(new Error("Error en Callback: Solo se permiten números"));
        }
        callback(null, n1 + n2);
    }, 1000);
}

// Ejecución con error intencional
sumarCallback("10", 20, (error, resultado) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});


// --- 2. CASO: PROMESAS (.catch) ---
function sumarPromesa(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof n1 !== 'number' || typeof n2 !== 'number') {
                reject(new Error("Error en Promesa: Solo se permiten números"));
            } else {
                resolve(n1 + n2);
            }
        }, 1500);
    });
}

// Ejecución con flujo de éxito y error
sumarPromesa(10, 20)
    .then(res => console.log("Promesa exitosa:", res))
    .catch(err => console.error(err.message));


// --- 3. CASO: ASYNC/AWAIT (Try/Catch/Finally) ---


async function ejecutarSuma(n1, n2) {
    console.log("Iniciando proceso Async...");
    try {
        // Intentamos realizar la operación asincrónica
        const resultado = await sumarPromesa(n1, n2);
        console.log("Resultado Async:", resultado);
    } catch (error) {
        // Capturamos cualquier error lanzado por 'throw' o 'reject'
        console.error("Atrapado en Catch:", error.message);
    } finally {
        // Este bloque se ejecuta SIEMPRE (haya error o no)
        // Útil para cerrar conexiones, limpiar variables o quitar cargando...
        console.log("Proceso finalizado (Bloque Finally)");
    }
}

ejecutarSuma(50, "no_soy_numero");

/*
REGLA DE ORO DEL MANEJO DE ERRORES:
1. Callbacks: El error es un argumento.
2. Promesas: El error es un estado (Rejected).
3. Async/Await: El error es una excepción que interrumpe el flujo del bloque try.
*/