/*
ARCHIVO: arraysMetodos.js
TEMA: Manipulación de Arreglos (Arrays) en JavaScript
En este ejemplo se exploran:
- Acceso por índice y modificación de elementos.
- Propiedades fundamentales como .length.
- Métodos de transformación: toString(), concat().
- Métodos de mutación: pop(), push(), shift(), unshift(), splice().
- Métodos de ordenamiento: sort(), reverse().
*/

// 1. DECLARACIÓN Y ACCESO
let numeros = [10, 20, 30, 40, -50];
document.write("Elementos: ", numeros, "<br>");

// Los arrays en JS comienzan en el índice 0
document.write("Primer elemento: ", numeros[0], "<br>");

// Modificación de un valor mediante su posición
numeros[0] = 100;
document.write("Nuevo primer elemento: ", numeros[0], "<br>");

let frutas = ["manzana", "pera", "banana", "kiwi"];
document.write("Frutas: ", frutas, "<br>");

// 2. PROPIEDADES Y MÉTODOS BÁSICOS
// .length devuelve la cantidad total de elementos
document.write("Cantidad de elementos: ", numeros.length, "<br>");

// truco para acceder al último elemento dinámicamente
document.write("Último elemento: ", frutas[frutas.length - 1], "<br>");

// .toString() convierte el array en una cadena de texto separada por comas
document.write("Array como texto: ", numeros.toString(), "<br>");

// .concat() une dos o más arrays creando uno nuevo
let letras = ["a", "b", "c", "d"];
let numeros2 = [1, 2, 3, 4];
document.write("Unir arrays: ", letras.concat(numeros2), "<br>");

// 3. AGREGAR Y ELIMINAR ELEMENTOS
// .pop() elimina el ÚLTIMO elemento
numeros.pop();
document.write("Después de pop (quita último): ", numeros, "<br>");

// .push() agrega un elemento al FINAL
numeros.push(500);
document.write("Después de push (agrega al final): ", numeros, "<br>");

// .shift() elimina el PRIMER elemento
frutas.shift();
document.write("Después de shift (quita primero): ", frutas, "<br>");

// .unshift() agrega un elemento al INICIO
frutas.unshift("frutilla");
document.write("Después de unshift (agrega al inicio): ", frutas, "<br>");



// 4. MÉTODOS AVANZADOS (Splice y Slice)
// .splice(posición, cantidad) elimina elementos en cualquier posición
letras.splice(2, 1); // En la posición 2, elimina 1 elemento
document.write("Después de splice: ", letras, "<br>");

// .slice(inicio, fin) copia una parte del array (el fin no se incluye)
let nuevosNumeros = numeros.slice(1, 3);
document.write("Nuevo array con slice: ", nuevosNumeros, "<br>");

// 5. ORDENAMIENTO
let array = ["z", "a", "c", "b", "e"];
document.write("Array original: ", array, "<br>");

// .sort() ordena alfabéticamente (por defecto)
array.sort();
document.write("Array ordenado (sort): ", array, "<br>");

// .reverse() invierte el orden actual de los elementos
array.reverse();
document.write("Array en orden inverso (reverse): ", array, "<br>");