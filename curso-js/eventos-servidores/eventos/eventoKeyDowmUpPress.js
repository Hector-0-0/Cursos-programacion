/*
ARCHIVO: eventoKeyDownUpPress.js
TEMA: Eventos de Teclado (Keydown, Keypress, Keyup)
Este archivo explica el ciclo de vida de una pulsación de tecla:

1. keydown: Se dispara en cuanto se presiona la tecla (ideal para bloquear teclas).
2. keypress: Se dispara cuando se genera un carácter (está en desuso, pero aún se ve en código legacy).
3. keyup: Se dispara cuando el usuario suelta la tecla (ideal para leer el texto final).

DATO IMPORTANTE: Usar 'event.preventDefault()' en 'keydown' permite cancelar 
la escritura antes de que el carácter aparezca en el campo de texto.
*/

// --- 1. SELECCIÓN DEL ELEMENTO ---
let texto1 = document.getElementById("mitexto");

// --- 2. FUNCIÓN DE VALIDACIÓN ---

/**
 * Bloquea cualquier entrada que no sea un número.
 * @param {KeyboardEvent} event - Objeto con la información de la tecla pulsada.
 */
function verificaNumero(event) {
    // Los códigos 48 al 57 corresponden a los números del 0 al 9
    // Si la tecla no está en ese rango, cancelamos la acción
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault(); // Evita que el carácter no numérico se escriba
    }
}

// --- 3. ASIGNACIÓN DE LISTENERS (CICLO DE VIDA) ---

// Paso 1: Detectar la presión y validar (Filtro de entrada)
texto1.addEventListener("keydown", verificaNumero);

// Paso 2: Ver qué carácter específico se intentó ingresar
texto1.addEventListener("keypress", function(event) {
    // event.key devuelve el valor de la tecla (ej: "a", "5", "Enter")
    console.log("Caracter ingresado: " + event.key);
});

// Paso 3: Leer el valor del campo una vez que la tecla se soltó
texto1.addEventListener("keyup", function(event) {
    // event.target.value nos da todo el texto acumulado en el input
    console.log("Entrada del usuario: " + event.target.value);
});