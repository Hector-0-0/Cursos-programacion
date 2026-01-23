/*
ARCHIVO: funciones.js
TEMA: Declaración, Parámetros y Retorno en Funciones
En este ejemplo se utilizan:
- Funciones declaradas (saludar, despedirse)
- Funciones con parámetros (sumar(a, b))
- Palabra reservada 'return' para devolver valores
- Conversión de datos con parseFloat()
*/

// --- 1. Funciones simples ---
var nombre = prompt("¿Cómo te llamas?");

function saludar() {
    alert("¡Hola " + nombre + "!");
}

function despedirse() {
    alert("¡Adiós " + nombre + "!");
}

saludar();
despedirse();

// --- 2. Funciones con parámetros ---
var valor1 = parseFloat(prompt("Ingresa el primer valor a sumar:"));
var valor2 = parseFloat(prompt("Ingresa el segundo valor a sumar:"));

function sumar(a, b) {
    var resultado = a + b;
    document.write("El resultado de la suma es: " + resultado + "<br>");
}

sumar(valor1, valor2);

// --- 3. Funciones con retorno ---
function multiplicar(a, b) {
    return a * b; // Envía el resultado fuera de la función
}

let n1 = parseFloat(prompt("Ingresa primer número a multiplicar:"));
let n2 = parseFloat(prompt("Ingresa segundo número a multiplicar:"));

let resMulti = multiplicar(n1, n2);
document.write("El resultado de la multiplicación es: " + resMulti);