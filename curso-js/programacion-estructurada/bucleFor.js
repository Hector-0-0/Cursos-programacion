/*
ARCHIVO: bucleFor.js
TEMA: Estructura de repetición For y recorrido de Arrays
En este ejemplo se utilizan:
- Ciclo For estándar (inicialización; condición; incremento)
- Propiedad .length para conocer el tamaño de un arreglo
- Acceso a elementos por índice: array[i]
*/

// Ejemplo 1: Conteo simple del 0 al 10
for (let f = 0; f <= 10; f++) {
    document.write("Vuelta numero: ", f, "<br>");
}

// Ejemplo 2: Recorrido de una lista (Array)
let array = ["Hola", "que", "tal", "estas"];
for (let i = 0; i < array.length; i++) {
    document.write(array[i], "<br>");
}