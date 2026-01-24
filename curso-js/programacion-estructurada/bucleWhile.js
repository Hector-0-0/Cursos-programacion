/*
ARCHIVO: bucleWhile.js
TEMA: Estructura de repetición While
En este ejemplo se utilizan:
- Inicialización de contador
- Condición de parada (a <= 10)
- Operador de incremento (++)
*/

let a = 1;

// El bucle se ejecuta mientras la condición entre paréntesis sea verdadera
while(a <= 10) {
    document.write(a + "<br>");
    a++; // Es vital incrementar la variable para evitar un bucle infinito
}