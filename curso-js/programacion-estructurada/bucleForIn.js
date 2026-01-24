/*
ARCHIVO: bucleForIn.js
TEMA: El bucle For...in
Este ciclo es ideal para recorrer las propiedades de un objeto o, 
como en este caso, los índices de una cadena de texto o un array.

En este ejemplo se utiliza:
- La estructura for (variable in objeto)
- Interpolación de cadenas con backticks (``)
- Acceso a caracteres por su índice: palabra[indice]
*/

let palabra = "JavaScript";

// 'indice' tomará el valor de la posición (0, 1, 2...) en cada iteración
for (let indice in palabra) {
    // console.log() muestra los resultados en la consola del navegador (F12)
    console.log(`Índice: ${indice}, Letra: ${palabra[indice]}`);
}