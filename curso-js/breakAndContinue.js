/*
ARCHIVO: breakAndContinue.js
TEMA: Control de saltos en bucles (Break y Continue)
En este ejemplo se utilizan:
- Bucle 'for...in' para recorrer índices de un string
- Sentencia 'break': Detiene el bucle por completo
- Sentencia 'continue': Salta la iteración actual y sigue con la siguiente
*/

let palabra = "JavaScript";

// Ejemplo de BREAK: Se detiene al llegar a la posición 4
for (let f in palabra) {
    document.write(f);
    if (f == 4) {
        document.write("<br>Estamos en la posicion 4 <br>");
        break; // Sale del bucle inmediatamente
    }
}

// Ejemplo de CONTINUE: Filtra las vocales
for (let f in palabra) {
    // Si la letra es una vocal, se salta el document.write
    if(palabra[f] == "a" || palabra[f] == "e" || palabra[f] == "i" || palabra[f] == "o" || palabra[f] == "u") {
        continue; 
    }
    document.write(palabra[f]); // Solo escribirá las consonantes
}