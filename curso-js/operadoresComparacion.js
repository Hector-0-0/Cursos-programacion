/*
  ARCHIVO: operadoresComparacion.js
  TEMA: Operadores de comparación y condicional if

  Operadores usados:
  ==  igual a
  >   mayor que
  <   menor que
*/

let a, b;

// Entrada de datos
a = parseInt(prompt("Ingrese el valor de a:"));
b = parseInt(prompt("Ingrese el valor de b:"));

// Mostrar valores ingresados
document.write("a = ", a, "<br>");
document.write("b = ", b, "<br>");

/*
  Estructura condicional if - else if - else
  Permite comparar valores y ejecutar
  diferentes acciones según el resultado.
*/
if (a == b) {
  document.write("a es igual a b<br>");
} else if (a > b) {
  document.write("a es mayor que b<br>");
} else {
  document.write("a es menor que b<br>");
}
